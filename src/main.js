import { createApp } from 'vue';
import VueLoading from 'vue-loading-overlay';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import VueAxios from 'vue-axios'
import router from './router';
import "bootstrap"
import App from './App.vue';
import 'vue-loading-overlay/dist/vue-loading.css';
import { currency } from './methods/filters';
import { date } from './methods/filters';
import {Field, Form, ErrorMessage, defineRule, configure,} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
// import * as rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// Object.keys(rules).forEach(rule => {
//   defineRule(rule, rules[rule]);
// });
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');
gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.config.globalProperties.$filters = {
  currency,date
}
app.use(VueLoading);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
