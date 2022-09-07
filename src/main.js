import { createApp } from 'vue';
import VueLoading from 'vue-loading-overlay';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import "bootstrap"
import App from './App.vue';
import WaveUI from 'wave-ui';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import 'animate.css';
import 'wave-ui/dist/wave-ui.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import { currency } from './methods/filters';
import { date } from './methods/filters';
import {Field, Form, ErrorMessage, defineRule, configure,} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');
const app = createApp(App);
app.component('Form', Form);
new WaveUI(app, {
  // Some Wave UI options.
});
// new wow({ live: false }).init();
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.config.globalProperties.$filters = {
  currency,date
}
app.use(VueLoading);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
