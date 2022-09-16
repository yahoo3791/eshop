<template>
  <Navbar />
  <div class="bg-dark overflow-hidden">
    <div class="container-fuild" style="padding-top: 100px;">
      <div class="row">
        <div class="col-12">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" pause="hover" touch="true" data-bs-ride="carousel">
            <div class="carousel-inner w-100">
              <div class="carousel-item carousel-item-home overflow-hidden active" data-bs-interval="3000">
                <w-image :src="carouselUrl" style="width: 220px;height: 180px;" class="carouselItem-img me-4 ms-auto d-block" alt="artPicture" />
                  <div class="carousel-caption carousel-caption-home d-block text-white">
                    <h5 class="text-2xl font-semibold tracking-wider">熱銷No.1</h5>
                    <p class="font-medium">FAUNE</p>
                  </div>
              </div>
              <div class="carousel-item carousel-item-home overflow-hidden" data-bs-interval="3000">
                <w-image :src="carousel2Url" style="width: 200px;height: 180px;" class="carouselItem-img ms-auto d-block" alt="artPicture" />
                  <div class="carousel-caption carousel-caption-home d-block text-white">
                    <h5 class="text-2xl font-semibold tracking-wider">熱銷No.2</h5>
                    <p class="font-medium">Black&White</p>
                  </div>
              </div>
              <div class="mask w-50 h-100 bg-dark position-absolute top-0 d-none d-sm-inline-block">
                <div class="banner-container">
                  <h1 class="banner-title d-block text-white mx-auto text-3xl tracking-wider">透過雜誌看見世界<br>
                    <router-link to="/user/products" class="text-decoration-none">
                      <w-button class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile><p>前往商店</p>
                      </w-button>
                      </router-link>
                  </h1>
                </div>
              </div>
            </div>
            <div class="text-center text-md-end">
              <button class="carousel-control-prev position-relative d-inline-block" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" style="filter: invert(0);" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next position-relative d-inline-block" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" style="filter: invert(0);" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 d-block d-sm-none">
          <div class="banner-container">
            <h1 class="banner-title d-block text-white mx-auto py-5 text-3xl tracking-wider">透過雜誌看見世界</h1>
              <router-link to="/user/products" class="text-decoration-none">
                <w-button class="d-block mx-auto text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile><p>前往商店</p>
                </w-button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row text-white text-center">
        <div class="col-12 col-md-6 py-5 wow animated fadeInUp" data-wow-duration="1s">
          <div class="homeDetails-inner overflow-hidden mx-auto">
            <w-image :src="content2Url" class="w-100 h-100" alt="driver" />
          </div>
          <h4 class="pt-3 pb-1 tracking-wide text-2xl font-semibold">下單後24hr內到貨</h4>
          <p class="text-lg">時間未到達，現金回饋補償</p>
        </div>
        <div class="col-12 col-md-6 py-5 wow animated fadeInUp" data-wow-duration="2s">
          <div class="homeDetails-inner overflow-hidden mx-auto">
            <w-image :src="content3Url" class="w-100 h-100" alt="driver" />
          </div>
          <h4 class="pt-3 pb-1 tracking-wide text-2xl font-semibold" data-wow-duration="2s">優良的退貨機制</h4>
          <p class="text-lg leading-7" data-wow-duration="2s">3天無條件退貨，10天鑑賞期<br>專人到府回收</p>
        </div>
        <div class="col-12 d-md-flex justify-content-md-around my-5">
          <div class="d-flex align-items-center justify-content-center pb-3 wow animated fadeInRight" data-wow-delay=".1s" data-wow-duration="1s">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-currency-dollar"
                viewBox="0 0 16 16">
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider">比市價更便宜</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3 wow animated fadeInRight" data-wow-delay=".2s" data-wow-duration="2s">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag"
                viewBox="0 0 16 16">
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider">商品每週更新</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3 wow animated fadeInRight" data-wow-delay=".3s" data-wow-duration="3s">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam"
                viewBox="0 0 16 16">
                <path
                  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider">包裝品質把關</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fuild my-5">
      <div class="row">
        <div class="col-12 text-white text-center">
          <h2 class="text-4xl font-semibold tracking-widest">Mgz x ibook</h2>
          <p class="text-lg tracking-wide py-2">新上架雜誌，特價中!</p>
        </div>
      </div>
      <div class="d-flex justify-content-lg-around bg-dark" style="overflow-x: scroll;">
        <div class="newsItem-container m-4 animated fadeIn wow" data-wow-duration="3s">
          <div class="newsItem mx-auto p-5 border position-relative">
            <router-link to="/user/products">
              <img src="@/assets/pic/art01300px.jpg" class="newsItem-img w-100 h-100" alt="newsItemImage">
            </router-link>
            <div class="newsItem-content text-white position-absolute top-50 start-50 translate-middle tracking-widest text-xl">
              <p>點擊進入商店</p>
            </div>
          </div>
          <div class="text-white py-3">
            <h4 class="text-center text-2xl font-semibold tracking-wider">今藝術</h4>
            <p class="text-indent2rem leading-8 text-lg">當代藝術的界限已越來越模糊，裝置藝術、行為藝術、觀念藝術、跨媒介藝術……</p>
          </div>
        </div>
        <div class="newsItem-container m-4 animated fadeIn wow" data-wow-duration="3s">
          <div class="newsItem mx-auto p-5 border position-relative">
            <router-link to="/user/products">
              <img src="@/assets/pic/fashion04300px.jpg" class="newsItem-img w-100 h-100" alt="newsItemImage">
            </router-link>
            <div class="newsItem-content text-white position-absolute top-50 start-50 translate-middle tracking-widest text-xl">
              <p>點擊進入商店</p>
            </div>
          </div>
          <div class="text-white py-3">
            <h4 class="text-center text-2xl font-semibold tracking-wider">Fashion Wedding</h4>
            <p class="text-indent2rem leading-8 text-lg">五大最潮婚禮穿搭攻略：這樣穿得體又時尚</p>
          </div>
        </div>
        <div class="newsItem-container m-4 animated fadeIn wow" data-wow-duration="3s">
          <div class="newsItem mx-auto p-5 border position-relative">
            <router-link to="/user/products">
              <img src="@/assets/pic/trival03300px.jpg" class="newsItem-img w-100 h-100" alt="newsItemImage">
            </router-link>
            <div class="newsItem-content text-white position-absolute top-50 start-50 translate-middle tracking-widest text-xl">
              <p>點擊進入商店</p>
            </div>
          </div>
          <div class="text-white py-3">
            <h4 class="text-center text-2xl font-semibold tracking-wider">亞馬遜河歷險記</h4>
            <p class="text-indent2rem leading-8 text-lg">嚴謹的考察活動和豐富的科學知識揉進情節生動、妙趣橫生的故事之中。</p>
          </div>
        </div>
      </div>
      <div class="row d-lg-none">
        <div class="col-12 text-white">
          <div class="slidebar"></div>
          <div class="pe-3 pt-3 wow animated pulse text-end" data-wow-iteration="infinite" data-wow-duration="5s">scroll</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-5 mx-auto text-center my-4">
          <Form @submit="onSubmit"  class="position-relative form-outline form-white my-2">
            <label class="text-2xl font-medium tracking-wide text-white d-block pb-3 " for="subscription">訂閱流行資訊</label>
            <div class="sub d-flex flex-wrap justify-content-center">
              <Field v-model="subMail" type="email" name="信箱" id="subscription" rules="email"
              class="sub-input d-inline-block bg-dark text-white rounded-0" placeholder="EMAIL ADDRESS" />
              <button type="submit" class="sub-btn d-inline-block text-black">立即訂閱</button>
              <ErrorMessage name="信箱" style="color:orangered"></ErrorMessage>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div :class="{'d-none': openDrawer}" class="coupon position-fixed bottom-0 end-0 m-2 m-md-3 p-md-2"
            @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer">
            <img src="@/assets/pic/coupon.png" class="coupon-img" alt="coupon">
          </div>
          <w-drawer v-model="openDrawer" :no-overlay="noOverlay" :overlay-color="overlayColor" bottom height="60px" class="overflow-hidden" style="top:auto">
            <div class="d-flex align-items-center justify-content-between w-100 px-1 px-md-3 bg-dark" style="border-top:1px solid #404040;border-bottom:1px solid #404040">
              <img src="@/assets/pic/coupon.png" class="d-block coupon-img" alt="coupon" style="filter: invert(1);">
              <p class="d-inline-block text-sm font-medium" style="color:#BFBFBF">結帳時輸入優惠碼coupon012<br class="d-md-none">即可折扣總金額10%</p>
              <w-button @click="openDrawer = false" icon="wi-cross" sm round bg-color="transparent" color="grey" class="position-relative">
            </w-button>
            </div>
          </w-drawer>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { Field, Form, ErrorMessage, defineRule, } from 'vee-validate';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      carouselUrl: require('@/assets/pic/Arttransparent250px.png'),
      carousel2Url: require('@/assets/pic/Arttransparent0250px.png'),
      contentUrl: require('@/assets/pic/pic01.webp'),
      content2Url: require('@/assets/pic/smile02170px.jpg'),
      content3Url: require('@/assets/pic/smile0170px.jpg'),
      subMail: '',
      openDrawer: false,
      once: false,
      noOverlay: false,
      overlayColor: '',
    };
  },
  components: {
    Navbar, Footer, Form, Field, ErrorMessage,
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        || document.body.scrollTop;
      if (scrollTop > 450 && this.once === false) {
        this.once = true;
        this.noOverlay = true;
        this.overlayColor = '';
        this.openDrawer = true;
      }
    },
    scrollHandling() {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset
        || document.body.scrollTop;
      if (scrollTop >= this.lastScrollTop) {
        // 讀取下面時
        // this.scrollNavbar = true;
      } else {
        // 讀取上面時
        // this.scrollNavbar = false;

      }
      this.lastScrollTop = scrollTop;
    },
    onSubmit() {
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.scrollHandling);
    window.addEventListener('load', () => {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
      }).init();
    });
    document.body.addEventListener('focusin', () => {
    })
  },
};
</script>
