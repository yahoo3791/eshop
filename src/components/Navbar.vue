<template>
  <div class="contanier position-absolute top-0 w-100 bg-transparent overflow-hidden"
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
          <router-link class="nav-link text-white" to="/products"><i class="bi bi-shop"></i>商店</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/cart"><i class="bi bi-cart3"></i>購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/login"><i class="bi bi-person"></i>登入</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap';
export default {
  data() {
    return {
    }
  },
  methods: {
    scrollAnimation() {
      gsap.to('.header', {
        duration: 5,
        scrollTrigger: {
          trigger: '.header',
          start: '10',
          end: '800',
          markers:true,
          toggleActions: 'play none none none',
          scrub: 4,
          toggleClass:'gsapNavbar',
        },
      });
    },
  },
  mounted() {
    this.scrollAnimation();
  }
};
</script>
