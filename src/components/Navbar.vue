<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light bg-dark fixed-top py-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="navbar-logo" src="@/assets/pic/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center">
          <router-link to="/" class="nav-link">首頁</router-link>
          <router-link to="/about" class="nav-link active" aria-current="page">關於品牌</router-link>
          <router-link to="/user/products" class="nav-link">商店<i class="bi bi-shop-window"></i></router-link>
          <router-link to="/user/carts" class="nav-link">購物車<i class="bi bi-cart"></i>
            <span class="d-inline-block bg-white text-black p-1">{{ cartsNum }}</span>
          </router-link>
          <router-link to="/login" class="nav-link">登入<i class="bi bi-person"></i></router-link>
          <div class="information text-white opacity-75 mt-5 d-lg-none">
            <p>辦公室地址:台北市信義區市府路101號<br>
              客服電話:<a href="tel:+886-2-1010101" class="text-white">(02)1010101</a><br>
              客服時間:週一至週五,上午07:00~下午17:00<br>
              Email:<a href="mailto:MgzOfficer010@gmail.com" class="text-white">MgzOfficer010@gmail.com</a><br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { gsap } from 'gsap';
export default {
  props:['cartsNum'],
  data() {
    return {
    }
  },
  methods: {
    // scrollAnimation() {
    //   gsap.to('.header', {
    //     duration: 5,
    //     scrollTrigger: {
    //       trigger: '.header',
    //       start: '10',
    //       end: '800',
    //       toggleActions: 'play none none none',
    //       scrub: 4,
    //       toggleClass:'gsapNavbar',
    //     },
    //   });
    // },
  },
  mounted() {
    // this.scrollAnimation();
  }
};
</script>
