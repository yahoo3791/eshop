<template>
  <Navbar />
  <div class="banner_video w-100 position-relative" style="height:100vh;">
    <video class="w-100 h-100 xx" muted autoplay loop style="object-fit: cover;filter: blur(2px);">
      <!-- autoplay loop -->
      <source src="../assets/video/bannerVideo.mp4" type="video/mp4">
    </video>
    <div class="position-absolute start-50" style="bottom:50px;">
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
  <div class="container-fulid">
    <div class="row">
      <div class="col-12">
        <h1 class="text-white banner_title position-absolute
        translate-middle top-50 start-50">雜誌讓您的生活多點樂趣!!</h1>
      </div>
      <div class="col-12">
      </div>
    </div>
  </div>
  <div class="container-fluid position-relative overflow-hidden">
    <div class="banner_solid position-absolute start-0 bg-dark w-100" style="height:10px"></div>
    <div class="slide_bg2 position-absolute end-0" style="height:30px;width: 2000px;z-index:10"></div>
    <div class="row">
      <div class="col-2 d-flex justify-content-around align-items-end" style="writing-mode:vertical-lr">
        <h2>每一本雜誌，<br>都有說不完的故事</h2>
        <h1 class="border-bottom">MGZ <span class="fs-6">想說的話</span></h1>
      </div>
      <div class="col-4 gx-0 overflow-hidden" style="">
        <div class="article section1 position-relative">
          <h2 class="position-absolute bottom-0" style="left:30%">magazine</h2>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12 pt-5">
            <h1 class="text-center">品牌發展與事跡</h1>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="ps-md-5" style="border-bottom:1px solid black">
                  <p>紙本雜誌背後的辛酸與挑戰，是閱聽眾與編輯之間的兩難。</p>
                </div>
              </div>
              <div class="col-6 col-md-6 d-sm-none"></div>
            </div>
          </div>
          <div class="col-3" style="border-right:1px solid black">
          </div>
          <div class="col-9 pt-3 mt-md-5" style="text-indent: 2rem;">
            <p>現代諸多原因導致大環境閱讀方式改變，不再需要紙張閱讀，通路迅速萎縮，
              許多雜誌品牌紛紛轉型網路書籍，反之也有重新定義雜誌書籍的書商，
              不再是單純是本雜誌，讓已逐漸成為歷史回憶、變成像黑膠唱片的藝術品，
              然而MGZ零售商提供網路平台提供他們販售不抽佣金，就為了把回憶留存到最後一刻...
              <span class="d-block text-end" style="font-size:10px">2020/02/02</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 coupon text-center py-2" style="background:yellow">
        <div class=""><i class="bi bi-stopwatch"></i>結帳時輸入<span style="color:red">FHion99</span>使用折扣優惠碼</div>
      </div>
    </div>
    <div class="row position-relative">
      <!-- <div class="col-5"></div> -->
      <div class="col-12 gx-0 overflow-hidden" style="">
        <div class="article section2">
        </div>
      </div>
      <div class="bg-font position-absolute" style="z-index:1">
        <h1 style="font-size:10em">magazine</h1>
      </div>
    </div>
    <div class="row position-relative" style="z-index:2">
      <div class="col-12 coupon text-center py-2" style="background:yellow">
        <div class="">
          <marquee direction="right" height="20" scrollamount="10" behavior="alternate"><i class="bi bi-megaphone"></i>
            跑馬燈測試</marquee>
        </div>
      </div>
    </div>
    <div class="row d-none d-md-flex">
      <div class="col-6 px-0">
        <div class="recommend_item">
          <img src="../assets/pic/pic02.jpg" class="d-block h-100 w-100" alt="">
        </div>
      </div>
      <div class="col-3 d-flex flex-column px-0">
        <div class="recommend_item">
          <img src="../assets/pic/pic02.jpg" class="h-100 w-100" alt="">
        </div>
        <div class="recommend_item">
          <img src="../assets/pic/pic02.jpg" class="h-100 w-100" alt="">
        </div>

      </div>
      <div class="col-3 d-md-flex flex-md-column px-0">
        <div class="recommend_item">
          <img src="../assets/pic/pic02.jpg" class="h-100 w-100" alt="">
        </div>
        <div class="recommend_item">
          <img src="../assets/pic/pic02.jpg" class="h-100 w-100" alt="">
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12 gx-0 overflow-hidden position-relative" style="z-index: 2;">
        <div class="mask position-absolute top-0 w-100 h-100" style="z-index:3"></div>
        <div class="article section3">
          <div class="row position-relative" style="z-index:4">
            <div class="col-12 text-white">
              <h1 style="writing-mode: vertical-lr;
    text-orientation: upright;text-shadow:0px 0px black">NEWS</h1>
            </div>
            <div class="col">
              <div class="item"></div>
            </div>
            <div class="col">
              <div class="item"></div>
            </div>
            <div class="col">
              <div class="item"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <!-- 精選推薦 -->
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
      gsap.to('.slide_bg2', {
        x: 500,
        duration: 5,
        scrollTrigger: {
          trigger: '.banner_video',
          start: 'top',
          toggleActions: 'play none none none',
          scrub: 4,
        },
      });
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
