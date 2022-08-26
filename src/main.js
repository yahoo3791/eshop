import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import gsap from "../node_modules/gsap";
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger";
import axios from '../node_modules/axios';
import VueAxios from '../node_modules/vue-axios';

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
