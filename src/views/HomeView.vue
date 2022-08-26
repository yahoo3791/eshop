<template>
  <div class="banner_video w-100 position-relative" style="height:100vh;">
    <video class="w-100 h-100" muted autoplay loop style="object-fit: cover;">
      <!-- autoplay loop -->
      <source src="../assets/video/bannerVideo.mp4" type="video/mp4">
    </video>
    <div class="position-absolute start-50" style="bottom:50px">
      <a href="" @click.prevent>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
          class="bi bi-arrow-bar-down animate__animated animate__slideOutDown animate__infinite	infinite"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
        </svg>
      </a>
    </div>
  </div>

  <div class="container-fulid">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-12">
        <h1 class="text-white banner_title position-absolute translate-middle top-50 start-50">hello!!</h1>
      </div>
      <div class="col-12">
      </div>
    </div>
  </div>
  <div class="container-fluid position-relative overflow-hidden">
    <div class="banner_solid position-absolute start-0 bg-dark w-100" style="height:10px"></div>
    <div class="slide_bg3 position-absolute"
      style="width:150%;height:50px;transform:rotate(30deg);top:500px;left:-100px;z-index: 2;">
    </div>
    <div class="slide_bg1 position-absolute"
      style="color:red;background:yellow;width:150%;height:50px;transform:rotate(30deg);top:500px;left:-100px">
    </div>
    <div class="slide_bg2 position-absolute end-0" style="height:30px;width: 2000px;"></div>
    <div class="row  position-fixed top-50" style="z-index:5;">
      <div class="col-12">
        <h1 :class="{ 'd-none' :Scrollh1 }" class=" bg-dark d-inline-block text-white"
          style="writing-mode:vertical-lr">
          關於雜誌!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-8" style="padding-top:500px">
        <div class="article section1">
        </div>
      </div>
      <div class="col-4"></div>
      <div class="col-5"></div>
      <div class="col-7" style="padding-top:400px">
        <div class="article section2"></div>
      </div>
      <div class="col-9">
        <div class="article section3"></div>
      </div>
    </div>

  </div>
  <div :class="{ 'd-none': ScrollCoupon }" class="coupon position-fixed left-0 bottom-0 w-100 text-center"
    style="background:yellow">結帳輸入<span style="color:red">FHion99</span>使用折扣優惠碼</div>
  <!-- 首頁 video 塑造品牌形象
  文案
  製作的材料
  為何選我們
  推銷商品
  精選推薦
  訂閱電子報
  製作footer
  折扣碼找地方放 -->
</template>

<script>
import { gsap } from 'gsap';
// import { CSSPlugin } from '../../node_modules/gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin);

export default {
  data() {
    return {
      Scrollh1:false,
      ScrollCoupon:true,
    }
  },
  methods: {
    Scroll() {
      if (window.scrollY > 2600 ){
        this.Scrollh1 = true;
      }else {
        this.Scrollh1 = false;
      }
      if (window.scrollY > 200 && window.scrollY < 2770 ) {
        this.ScrollCoupon = false;
      } else {
        this.ScrollCoupon = true;
      }
    },
    scrollAnimation() {
      gsap.to('.slide_bg3', {
        x: 100,
        duration:3,
        scrollTrigger: {
          trigger: '.slide_bg3',
          start: 'center center',
          toggleActions: 'play none none none',
          scrub:4,
        }
      });
      gsap.to('.slide_bg2', {
        x: 500,
        duration: 5,
        scrollTrigger: {
          trigger: '.banner_video',
          start: 'top',
          toggleActions: 'play none none none',
          scrub: 4,
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.Scroll);
    },
  mounted: function() {
    this.scrollAnimation();
  }
}
</script>
