<template>
  <Navbar />
  <div class="banner_video w-100 position-relative">
    <video class="w-100 h-100" muted autoplay loop controls="false" style="object-fit: cover;filter: blur(2px);">
      <source src="@/assets/video/bannerVideo.mp4" type="video/mp4">
    </video>
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
            <img src="../assets/pic/pic01.jpg" class="w-100 position-relative" style="height:220px;z-index:2;" alt="">
            <h1 class="home-content-h1 position-absolute top-0 fs-6" style="z-index:2">每本雜誌都有故事</h1>
            <div class="bg-solid position-absolute"></div>
            <div class="bg-solid2 position-absolute"></div>
            <a href="#/user/products" class="position-absolute bottom-0 start-50 text-white" style="z-index:2">前往商店</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="home-coupon mx-auto position-relative text-center">
            <span class="d-block home-coupon-inner position-absolute"></span>
            <span class="d-block position-absolute"></span>
            <span class="d-block position-absolute"></span>
            <p class="text-white opacity-75">折扣10%優惠碼<br><strong>Sunny010</strong><br><i class="coupon-remind">結帳時輸入</i>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-white text-center pt-5">
          <div class="topPicks-area">
            <h1>TOP<br><i class="bi bi-trophy"></i><br><span class="topPicks-span">picks</span></h1>
          </div>
        </div>
        <div class="col-12 mb-5">
          <div class="topPicks-item p-1">
            <img src="../../src/assets/pic/pic03.jpg" class="w-100 h-100" alt="">
          </div>
          <div class="topPicks-content text-white">
            <h2>title & black</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem nostrum non minus nobis? Amet
              maxime officia similique minima adipisci!</p>
            <a href="#" class="text-white">看更多</a>
          </div>
        </div>
        <div class="col-12">
          <div class="topPicks-item p-1">
            <img src="../../src/assets/pic/pic03.jpg" class="w-100 h-100" alt="">
          </div>
          <div class="topPicks-content text-white">
            <h2>title & black</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem nostrum non minus nobis? Amet
              maxime officia similique minima adipisci!</p>
            <a href="#" class="text-white">看更多</a>
          </div>
        </div>
        <div class="col-12 text-center py-5">
          <button>SHOP <i class="bi bi-bag"></i></button>
        </div>
      </div>
      <div class="arrowUp ps-2 position-fixed bottom-0 end-0 opacity-75">
        <a href="#" class="text-black"><i class="bi bi-arrow-90deg-up"></i></a>
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
