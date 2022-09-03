<template>
  <Navbar />
  <div class="banner_video w-100 position-relative">
    <img src="../assets/pic/banner.webp" class="w-100 h-100" alt="">
    <h1 class="text-white banner_title position-absolute start-50 top-50
        translate-middle-x">透過雜誌看見世界。
    </h1>
    <div class="position-absolute start-50 translate-middle-x" style="bottom:50px;">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-bar-down animate__animated animate__slideOutDown
          animate__infinite	infinite" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1
          .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1
            .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1
            .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-dark overflow-hidden bg-shadow w-100">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="home-content w-75 position-relative mx-auto">
            <img src="../assets/pic/pic01.webp" class="w-100 position-relative"
              style="height:220px;z-index:2;object-fit: cover;" alt="">
            <h1 class="home-content-h1 position-absolute top-0 fs-6" style="z-index:2">每本雜誌都有故事</h1>
            <div class="bg-solid position-absolute"></div>
            <div class="bg-solid2 position-absolute"></div>
          </div>
        </div>
        <div class="col-12 text-center mt-5 pt-5">
          <a href="#/user/products" class="text-dark text-decoration-none bg-white px-5 py-4" style="z-index:2">前往商店</a>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="home-coupon mx-auto position-relative text-center">
            <span class="d-block home-coupon-inner position-absolute"></span>
            <span class="d-block position-absolute"></span>
            <span class="d-block position-absolute"></span>
            <p class="text-white opacity-75">折扣10%優惠碼<br><strong>coupon012</strong><br><i
                class="coupon-remind">結帳時輸入</i>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-white text-center pt-5">
          <div class="topPicks-area">
            <h1>TOP<br><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-trophy" viewBox="0 0 16 16">
                <path
                  d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z">
                </path>
              </svg><br><span class="topPicks-span">picks</span></h1>
          </div>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="topPicks-item p-1">
            <img src="@/assets/pic/pic02.webp" class="w-100 h-100" alt="">
          </div>
          <div class="topPicks-content text-white">
            <h2>title & black</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem nostrum non minus nobis? Amet
              maxime officia similique minima adipisci!</p>
            <router-link to="/user/products" class="text-white">看更多</router-link>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="topPicks-item p-1">
            <img src="@/assets/pic/pic02.webp" class="w-100 h-100" alt="">
          </div>
          <div class="topPicks-content text-white">
            <h2>title & black</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem nostrum non minus nobis? Amet
              maxime officia similique minima adipisci!</p>
            <router-link to="/user/products" class="text-white">看更多</router-link>
          </div>
        </div>
        <!-- <div class="col-12 text-center text-black py-5">
          <router-link to="/user/products" class="bg-white text-black text-decoration-none px-3 py-2">SHOP <i
              class="bi bi-bag"></i></router-link>
        </div> -->
      </div>
      <div class="arrowUp ps-2 position-fixed bottom-0 end-0 opacity-75 d-md-none">
        <a href="#" class="text-black">
          <b-icon-arrow-90deg-up />
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { gsap } from 'gsap';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      // ScrollCoupon: true,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    // Scroll() {
    //   if (window.scrollY > 200 && window.scrollY < 2770) {
    //     this.ScrollCoupon = false;
    //   } else {
    //     this.ScrollCoupon = true;
    //   }
    // },
    scrollAnimation() {
      // gsap.to('.slide_bg3', {
      //   x: 100,
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: '.slide_bg3',
      //     start: 'center center',
      //     toggleActions: 'play none none none',
      //     scrub: 4,
      //   },
      // });
      // gsap.to('.slide_bg2', {
      //   x: 500,
      //   duration: 5,
      //   scrollTrigger: {
      //     trigger: '.banner_video',
      //     start: 'top',
      //     toggleActions: 'play none none none',
      //     scrub: 4,
      //   },
      // });
    },
  },
  created() {
    // window.addEventListener('scroll', this.Scroll);
  },
  mounted() {
    this.scrollAnimation();
    document.addEventListener("touchstart", function () { }, true);
  },
};
</script>
