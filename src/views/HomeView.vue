<template>
  <Navbar />
  <div class="bg-dark overflow-hidden ">
    <div class="container-fulid" style="padding-top: 80px;">
      <div class="row">
        <div class="col">
          <swiper :direction="'vertical'" :slidesPerView="1"
          :spaceBetween="0" :mousewheel="true" :pagination="{
            clickable: true,
          }" :effect="'fade'" :speed="500" :parallax="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false, }"
          :modules="modules" class="mySwiper" style=" height: calc( 70vh - 70px ) ">
            <swiper-slide>
              <div class="swiperBg1 w-100 h-100"></div>
              <div class="swiperBg-content w-100 font-semibold tracking-wider text-2xl position-absolute top-50 start-50 translate-middle text-white">
                <p data-swiper-parallax="-300">雜誌<br>
                  <span class="tracking-wide font-normal text-lg">帶你看世界各個角落的故事</span></p>
                  <router-link to="/user/products" class="text-decoration-none">
                    <w-button data-swiper-parallax="-200" class="offset-btn tracking-widest font-bold mt-5 text-white px-5 py-3 border border-3" lg bg-color="transparent" tile>
                      SHOP
                    </w-button>
                  </router-link>
              </div>
              <a href="#recommend" class="slider-icon position-absolute bottom-0 start-50 translate-middle-x border border-3"
                style="width:30px;height:50px;z-index:2;border-radius: 30px;"></a>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperBg2 w-100 h-100"></div>
              <div
                class="swiperBg-content w-100 font-semibold tracking-wider text-2xl position-absolute top-50 start-50 translate-middle text-white">
                <p data-swiper-parallax="-300">不去感受世界的奇妙，<br>怎麼知道世界將被什麼改變。</p>
                <router-link to="/user/products" class="text-decoration-none">
                  <w-button data-swiper-parallax="-200" class="offset-btn tracking-widest font-bold mt-5 text-white px-5 py-3 border border-3" lg bg-color="transparent"
                    tile>
                    旅遊雜誌
                  </w-button>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperBg3 w-100 h-100"></div>
              <div
                class="swiperBg-content w-100 font-semibold tracking-wider text-2xl position-absolute top-50 start-50 translate-middle text-white">
                <p data-swiper-parallax="-300">那些年，<br>曾經紅極一時的80、90年代經典跑車</p>
                <router-link to="/user/products" class="text-decoration-none">
                  <w-button data-swiper-parallax="-200" class="offset-btn tracking-widest font-bold mt-5 text-white px-5 py-3 border border-3" lg bg-color="transparent"
                    tile>
                    汽車雜誌
                  </w-button>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperBg4 w-100 h-100"></div>
              <div
                class="swiperBg-content w-100 font-semibold tracking-wider text-2xl position-absolute top-50 start-50 translate-middle text-white">
                <p data-swiper-parallax="-300">欣賞萬物就是欣賞藝術</p>
                <router-link to="/user/products" class="text-decoration-none">
                  <w-button data-swiper-parallax="-200" class="offset-btn tracking-widest font-bold mt-5 text-white px-5 py-3 border border-3" lg bg-color="transparent"
                    tile>
                    藝術雜誌
                  </w-button>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="swiperBg5 w-100 h-100"></div>
              <div
                class="swiperBg-content w-100 font-semibold tracking-wider text-2xl position-absolute top-50 start-50 translate-middle text-white">
                <p data-swiper-parallax="-300">時尚是一種生活態度</p>
                <router-link to="/user/products" class="text-decoration-none">
                  <w-button data-swiper-parallax="-200" class="offset-btn tracking-widest font-bold mt-5 text-white px-5 py-3 border border-3" lg bg-color="transparent"
                    tile>
                    時尚雜誌
                  </w-button>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row text-white gx-3">
        <div class="col-12">
          <h1 id="recommend" class="text-3xl font-semibold tracking-widest text-center mt-5">好書推薦</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="recommend-item px-3 tracking-wide my-5">
            <div class="">
              <div class="rounded-pill bg-info my-2 d-inline-block px-2 me-3">熱銷第一</div>
              <div class="rounded-pill bg-info my-2 d-inline-block px-2">推薦</div>
            </div>
            <div class="my-1 p-5 p-md-0">
              <a class="d-block recommend-img" href="#/user/product/-NAkm6tU8bQ1adqkp5Q6  ">
                <img src="../assets/pic/homePage-recommend/faune.png" class="w-100 h-100 mx-auto d-block" alt="">
              </a>
            </div>
            <div class="text-center">
              <h3 class="my-md-3 tracking-wider font-semibold text-lg">《FAUNE|攝影》</h3>
              <div class="rounded-pill bg-info my-2 d-inline-block px-3 me-3 m-lg-0">知名攝影家</div>
              <div class="rounded-pill bg-info my-2 d-inline-block px-3">榮獲金獎攝影組</div>
              <p class="pt-5 text-base leading-7 tracking-wide" style="text-indent:1rem">得獎這組〈FAUNE〉動物系列專題，攝影者以十張不同面向的照片，
                如動物生態、保安林、森林步道、樹屋、都會廊帶及植物的培育栽種等，
                努力經營多元的影像，藉此探討居住環境與林木之間的依存關係。</p>
            </div>
            <div class="text-end">
              <router-link to="/user/product/-NAkm6tU8bQ1adqkp5Q6" class="text-decoration-none">
                <w-button class="offset-btn tracking-wide my-3 text-white px-3 py-3 border border-3 font-medium" lg bg-color="transparent" tile>
                more  
                </w-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="recommend-item px-3 tracking-wide my-5">
            <div class="">
              <div class="rounded-pill bg-info my-2 d-inline-block px-2 me-3">熱銷第二</div>
              <div class="rounded-pill bg-info my-2 d-inline-block px-2">推薦</div>
            </div>
            <div class="my-1 p-5 p-md-0">
              <a class="d-block recommend-img" href="#/user/product/-NAklvqQCunu-L8Xjryy">
                <img src="../assets/pic/homePage-recommend/mockup.png" class="w-100 h-100 mx-auto d-block" alt="">
              </a>
            </div>
            <div class="text-center">
              <h3 class="my-md-3 tracking-wider font-semibold text-lg">《框架|思想》</h3>
              <div class="rounded-pill bg-info my-2 d-inline-block px-3">榮獲金獎設計組</div>
              <p class="pt-5 text-base leading-7 tracking-wide" style="text-indent:1rem">
                  不以雜誌既定版型為限制，而以每期主題為設計主軸，
                  融入編輯與文字而成為一體，
                  每期皆有可觀的實驗創意，既是雜誌也是主題別冊；
                  整體表現擴張了「設計」在傳統上的定位與詮釋，
                  適切呈現視覺閱讀與當代性的緊密關係。</p>
            </div>
            <div class="text-end">
              <router-link to="/user/product/-NAklvqQCunu-L8Xjryy" class="text-decoration-none">
                <w-button class="offset-btn tracking-wide my-3 text-white px-3 py-3 border border-3 font-medium" lg bg-color="transparent"
                  tile>
                  more
                </w-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="recommend-item px-3 tracking-wide my-5">
            <div class="">
              <div class="rounded-pill bg-info my-2 d-inline-block px-2 me-3">熱銷第三</div>
            </div>
            <div class="my-1 p-5 p-md-0">
              <a class="d-block recommend-img" href="#/user/product/-NAkkWx8Eff6JS9kfwXM">
                <img src="../assets/pic/homePage-recommend/art.png" class="w-100 h-100 mx-auto d-block" alt="">
              </a>
            </div>
            <div class="text-center">
              <h3 class="my-md-3 tracking-wider font-semibold text-lg">優良推薦出版品｜《現代藝術》</h3>
              <div class="rounded-pill bg-info my-2 d-inline-block px-3">人文藝術組</div>
              <p class="pt-5 text-base leading-7 tracking-wide" style="text-indent:1rem">
                《現代藝術》是創造了深度、廣度與高度三維空間的人文藝術雜誌，
                全方位出擊，樹立紙媒的新典範。
                內容深入淺出，呈現方式不凡
                ，不只令人印象深刻，亦予人耳目一新。</p>
            </div>
            <div class="text-end">
              <router-link to="/user/product/-NAkkWx8Eff6JS9kfwXM" class="text-decoration-none">
                <w-button class="offset-btn tracking-wide my-3 text-white px-3 py-3 border border-3 font-medium" lg bg-color="transparent"
                  tile>
                  more
                </w-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="recommend-item px-3 tracking-wide my-5">
            <div class="">
              <div class="rounded-pill bg-info my-2 d-inline-block px-2 me-3">熱銷第四</div>
            </div>
            <div class="my-1 p-5 p-md-0">
              <a class="d-block recommend-img" href="#/user/product/-NAkjWcSbcaLuPjC3Km_">
                <img src="../assets/pic/homePage-recommend/travel.png" class="w-100 h-100 mx-auto d-block" alt="">
              </a>
            </div>
            <div class="text-center">
              <h3 class="my-md-3 tracking-wider font-semibold text-lg">優良推薦出版品｜《環島海陸旅行》</h3>
              <div class="rounded-pill bg-info my-2 d-inline-block px-3">好書獎</div>
              <p class="pt-5 text-base leading-7 tracking-wide" style="text-indent:1rem">
                    本書不僅是單純的台灣旅遊行腳書籍，除了26天的海上環島日誌外，
                    作者將臺灣海域航行遭遇的各種狀況，製成易懂的圖解知識欄。
                    最後一章「我們與海洋國家的距離」講述臺灣人民出海的諸多限制，作者對法規的直面檢討期盼著更自由無据的海之國。</p>
            </div>
            <div class="text-end">
              <router-link to="/user/product/-NAkjWcSbcaLuPjC3Km_" class="text-decoration-none">
                <w-button class="offset-btn tracking-wide my-3 text-white px-3 py-3 border border-3 font-medium" lg bg-color="transparent"
                  tile>
                  more
                </w-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 text-end mb-3 py-2">
          <a href="#/user/products" class="position-relative d-inline-block fs-3 ps-5 tracking-wider font-semibold text-decoration-none text-white">
            查看更多<i class="ms-2 bi bi-arrow-right opacity-always"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row text-white text-center">
        <div class="col-12"><h1 class="text-3xl font-semibold tracking-widest my-5 pb-2">輕鬆挑選 放心購物</h1></div>
        <div class="col-12 col-md-6 py-5" data-aos="fade-up">
          <div class="homeDetails-inner overflow-hidden mx-auto">
            <w-image :src="content01" class="w-100 h-100" alt="driver" />
          </div>
          <h4 class="pt-3 pb-1 tracking-wide text-xl font-semibold"
          data-aos="fade-up" data-aos-duration="1000">包裝品質</h4>
          <p class="text-lg"
          data-aos="fade-up" data-aos-duration="2000">您的商品就是我的商品</p>
        </div>
        <div class="col-12 col-md-6 py-5" data-aos="fade-up">
          <div class="homeDetails-inner overflow-hidden mx-auto">
            <w-image :src="content02" class="w-100 h-100" alt="driver" />
          </div>
          <h4 class="pt-3 pb-1 tracking-wide text-xl font-semibold" data-aos="fade-up" data-aos-duration="1000">退貨機制</h4>
          <p class="text-lg leading-7" data-aos="fade-up" data-aos-duration="2000">3天無條件退貨 10天鑑賞期</p>
        </div>
        <div class="col-12 d-md-flex justify-content-md-around my-5 flex-wrap">
          <div class="d-flex align-items-center justify-content-center pb-3"
          data-aos="fade-left" data-aos-duration="500">
            <div class="homeDetails-icon">
              <i class="bi bi-currency-dollar fs-2"></i>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider text-xl">具有競爭力的價格</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3"
          data-aos="fade-left" data-aos-duration="1000">
            <div class="homeDetails-icon">
              <i class="bi bi-bag fs-2"></i>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider text-xl">商品不斷推陳出新</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3"
          data-aos="fade-left" data-aos-duration="2000">
            <div class="homeDetails-icon">
              <i class="bi bi-box-seam fs-2"></i>
            </div>
            <p class="ps-3 text-xl  font-medium tracking-wider text-xl">下單後24hr內到貨</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-3xl font-semibold tracking-widest text-white text-center my-5">售後服務</h1>
        </div>
        <div class="col-12 col-md-4">
          <a href="mailto:mgzofficer@gmail.com" class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
            <div class="text-center" data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">
              <i class="bi bi-envelope text-5xl"></i>
              <h3 class="pt-2 pb-1 text-xl tracking-wider">透過Email</h3>
              <p class="text-base tracking-wide">發送訊息給客服中心</p>
            </div>
          </a>
        </div>
        <div class="col-12 col-md-4">
          <a href="tel:(02)1010101" class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
            <div class="text-center" data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="200">
              <i class="bi bi-telephone text-5xl"></i>
              <h3 class="pt-2 pb-1 text-xl tracking-wider">撥打電話</h3>
              <p class="text-base tracking-wide">(02)1010101<br>週一至週五,上午7:00~下午17:00</p>
            </div>
          </a>
        </div>
        <div class="col-12 col-md-4">
          <a href="https://goo.gl/maps/115xT6CDWXH6J2kD6" target="_blank" rel="noreferrer noopenner"
          class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
            <div class="text-center" data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="400">
              <i class="bi bi-house text-5xl"></i>
              <h3 class="pt-2 pb-1 text-xl tracking-wider">自行前往</h3>
              <p class="text-base tracking-wide">台北市信義區市府路101號</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container-fulid mt-5">
      <div class="row">
        <div class="col-12">
          <div class="couponBg position-relative">
            <div class="coupon-content position-absolute text-center top-50 start-50 translate-middle"
            data-aos="fade-up" data-aos-duration="1000">
              <div class="coupon-outline rounded-4 px-4 py-2 mb-2">
                <p class="text-2xl tracking-widest">歡慶開幕<br>
                  <span class="text-xl">全品項折扣活動</span></p>
              </div>
              <p class="text-lg tracking-wide">總金額<span class="coupon-span">10%</span>優惠</p>
              <p class="d-block py-2 mt-2 mb-1 mt-md-3 mb-md-2 coupon-border">限時優惠卷</p>
              <p class="text-lg tracking-wide">優惠碼coupon012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div :class="{'d-none': openDrawer}" class="coupon position-fixed
          bottom-0 end-0 m-2 m-md-3"
            @click="noOverlay = true;overlayColor = '';openDrawer = !openDrawer">
            <img src="@/assets/pic/coupon.png" class="coupon-img" alt="coupon">
          </div>
          <w-drawer v-model="openDrawer" :no-overlay="noOverlay" :overlay-color="overlayColor"
          bottom height="60px" class="overflow-hidden" style="top:auto">
            <div class="d-flex align-items-center justify-content-between
            w-100 px-1 px-md-3 bg-dark"
            style="border-top:1px solid #404040;border-bottom:1px solid #404040">
              <img src="@/assets/pic/coupon.png" class="d-block coupon-img"
              alt="coupon" style="filter: invert(1);">
              <p class="d-inline-block text-sm font-medium"
              style="color:#BFBFBF">結帳時輸入優惠碼coupon012<br class="d-md-none">即可折扣總金額10%</p>
              <w-button @click="openDrawer = false" icon="wi-cross"
              sm round bg-color="transparent" color="grey" class="position-relative">
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
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "../assets/scss/swiper/homePageSwiper.css";
import "swiper/css/pagination";
import { Parallax, EffectFade, Autoplay, Mousewheel, Pagination } from "swiper";

export default {
  data() {
    return {
      content01: require('@/assets/pic/homePage-content/content01.jpg'),
      content02: require('@/assets/pic/homePage-content/content02.jpg'),
      openDrawer: false,
      once: false,
      noOverlay: false,
      overlayColor: '',
    };
  },
  components: {
    Navbar, Footer, Swiper, SwiperSlide
  },
  setup() {
    return {
      modules: [ Parallax, EffectFade, Autoplay, Mousewheel, Pagination ],
    };
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
    countdown() {}
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('load', () => {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
      }).init();
    });
    this.countdown();
  },
};
</script>
