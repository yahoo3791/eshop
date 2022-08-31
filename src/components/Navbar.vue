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
          <router-link to="/user/carts" class="nav-link">購物車<i class="bi bi-cart"></i></router-link>
          <router-link to="/login" class="nav-link">登入<i class="bi bi-person"></i></router-link>
          <div class="information text-white opacity-75 mt-5">
            <p>辦公室地址:台北市信義區市府路101號<br>
              客服電話:<a href="tel:+886-2-1010101">(02)1010101</a><br>
              客服時間:週一至週五,上午07:00~下午17:00<br>
              Email:<a href="mailto:MgzOfficer010@gmail.com">MgzOfficer010@gmail.com</a><br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- <div class="contanier position-absolute top-0 w-100 bg-transparent overflow-hidden"
    style="background-color:transparent; z-index: 20;">
    <div class="header d-flex justify-content-between align-items-center px-5">
      <div class="logo">
        <router-link to="/" class="d-flex align-items-center text-decoration-none">
          <h1><img src="@/assets/pic/logo2.png" style="width:70px" alt=""></h1>
          <h1 class="fs-3 text-white">MGZ</h1>
        </router-link>
      </div>
      <ul class="nav d-none d-md-flex justify-content-center fs-6 d-block">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about"><i class="bi bi-dash"></i>關於MGZ</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/user/products"><i class="bi bi-shop"></i>商店</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/user/carts"><i class="bi bi-cart3"></i>購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/login"><i class="bi bi-person"></i>登入</router-link>
        </li>
      </ul>
    </div>
  </div> -->
</template>
<script>
import { gsap } from 'gsap';
export default {
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
