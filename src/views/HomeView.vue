<template>
  <Navbar />
  <div class="banner_video w-100 position-relative">
    <a href="/#/user/products">
      <w-image :src="baseUrl" class="w-100 h-100" alt="" style="background-position:center center" />
    </a>
    <h1 class="text-white banner_title position-absolute start-50 top-50
        translate-middle-x">透過雜誌看見世界，<br>點擊圖片來拓展視野吧。
    </h1>
    <div class="position-absolute start-50 translate-middle-x" style="bottom:50px;">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
          class="bi bi-arrow-bar-down animated slideInDown infinite" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1
          .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1
            .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1
            .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-dark overflow-hidden">
    <div class="container mt-5">
      <div class="row text-white text-center">
        <div class="col-12 col-md-6 wow animated fadeInUp" data-wow-duration="1s">
          <div class="overflow-hidden mx-auto " style="width:150px; height:150px;border-radius: 50%;">
            <w-image :src="content2Url" class="w-100 h-100" alt="" />
          </div>
          <h4 class="pt-3 pb-1 tt">下單後24hr內到貨</h4>
          <p class="">時間未到達，現金回饋補償</p>
        </div>
        <div class="col-12 col-md-6 wow animated fadeInUp" data-wow-duration="2s">
          <div class="overflow-hidden mx-auto " style="width:150px; height:150px;border-radius: 50%;">
            <w-image :src="content3Url" class="w-100 h-100" alt="" />
          </div>
          <h4 class="pt-3 pb-1 " data-wow-duration="2s">優良的退貨機制</h4>
          <p class="" data-wow-duration="2s">3天無條件退貨，14天鑑賞期，專人到府回收</p>
        </div>
        <div class="col-12 d-md-flex justify-content-md-around my-5 wow animated fadeInRight" data-wow-duration="3s">
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class=""
              style="width:50px; height:50px; border-radius: 50px;box-shadow: 0px 0px 3px gray;    line-height: 45px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-currency-dollar"
                viewBox="0 0 16 16">
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
            </div>
            <p class="ps-3 mb-0">比市價更便宜</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class=""
              style="width:50px; height:50px; border-radius: 50px;box-shadow: 0px 0px 3px gray;    line-height: 45px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag"
                viewBox="0 0 16 16">
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
            <p class="ps-3 mb-0">商品每週更新</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class=""
              style="width:50px; height:50px; border-radius: 50px;box-shadow: 0px 0px 3px gray;line-height: 45px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam"
                viewBox="0 0 16 16">
                <path
                  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </div>
            <p class="ps-3 mb-0">包裝品質把關</p>
          </div>
        </div>
        <div class="col-12">
          <router-link to="/about">
            <w-button class="ma1 text-black py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>了解更多</w-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container text-white p-5 mt-5">
      <div class="row" style="background:burlywood">
        <div class="col-12 py-2 text-center">
          <h2>Mgz x ibook</h2>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <img src="@/assets/pic/homeArt01.png" class="w-100 h-100" alt="">
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <img src="@/assets/pic/homeFashion04.png" class="w-100 h-100" alt="">
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <img src="@/assets/pic/homeTrival03.png" class="w-100 h-100" alt="">
          </div>
        </div>
        <div class="col-12 text-center">
          <h3>//NEWS//</h3>
          <p>新上架雜誌<br>特價中!</p>
        </div>
      </div>
    </div>
  </div>
  <div :class="{ 'd-none': this.ScrollCoupon }" data-wow-duration="2s" class="wow animated bounceIn bounce-coupon position-fixed
            start-50 top-50 translate-middle bg-white p-3" style="z-index:100">
    <div class="home-coupon ms-auto position-relative text-center">
      <span class="d-block home-coupon-inner position-absolute"></span>
      <span class="d-block position-absolute"></span>
      <span class="d-block position-absolute"></span>
      <span class="d-block position-absolute text-black" @click="hideCoupon">X</span>
      <p class="coupon-content">折扣10%優惠碼<br><strong>coupon012</strong><br><i class="coupon-remind">結帳時輸入</i>
      </p>
    </div>
  </div>
  <div class="coupon position-fixed bottom-0 end-0 m-2 m-md-3" @click="openCoupon">
    <img src="@/assets/pic/coupon.png" class="w-100 h-100" alt="">
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import gsap from 'gsap';
export default {
  data() {
    return {
      ScrollCoupon: true,
      once: false,
      baseUrl: require('../assets/pic/banner.png'),
      contentUrl: require('../assets/pic/pic01.webp'),
      content2Url: require('@/assets/pic/smile02.png'),
      content3Url: require('@/assets/pic/smile01.png'),
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    scrollAnimation() {
      gsap.to('.tt', {
        x: 100,
        duration: 3,
        scrollTrigger: {
          trigger: '.tt',
          start: 'center center',
          toggleActions: 'play none none none',
          scrub: 4,
          markers: true,
        },
      });
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 450 && this.once === false) {
        this.once = true;
        this.ScrollCoupon = false; 
        }
    },
    hideCoupon() {
      this.ScrollCoupon = true;
    },
    openCoupon() {
      this.ScrollCoupon = false;
      this.once = false;
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
    this.scrollAnimation();
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  },
};
</script>
