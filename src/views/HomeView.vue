<template>
  <Navbar />
  <div class="bg-dark overflow-hidden ">
    <div class="container-fulid pt-utility">
      <div class="overflow-hidden homeContainer">
        <div class="homeBanner w-100 h-100 position-relative">
          <a href="#recommend"
            class="slider-icon position-absolute bottom-0 start-50
            translate-middle-x border border-3 text-center"
            :class="{ 'btn-hidden-toggle': slider }"
            style="width:30px;height:50px;z-index:10;border-radius: 30px;">
            <span class="d-none">eslint</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container main" id="recommend">
      <div class="row align-items-md-center flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 py-5 py-md-0">
          <h1 class="text-center pb-5 text-3xl font-medium tracking-widest"
          data-aos="fade-up">天然新鮮食材、健康食譜</h1>
          <p class="pb-4 text-base tracking-wide leading-7" data-aos="fade-up"
          >製作配方減油、減鈉、減糖，無添加化學調味料、防腐劑，
            使用原型食物製作，保留天然食材原有的風味特性，利用天然香料打造料理豐富的層次感。</p>
          <ul class="text-center text-base tracking-wide">
            <li data-aos="fade-up">
              <img src="../assets/pic/icon/quality.png"
              alt="">榮獲2022金牌好店店家
            </li>
            <li data-aos="fade-up">
              <img src="../assets/pic/icon/quality.png"
              alt="">2022溯源餐廳一星肯定
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <div class="w-100 h-100 position-relative fruitPic-container"
          data-aos="fade-up">
            <img src="@/assets/pic/homepage/新鮮食材.png" class="w-100 h-100"
            style="object-fit: contain" alt="新鮮水果圖片">
            <div class="position-absolute top-50 start-50 translate-middle text-center">
              <h2 class="text-nowrap text-xl font-medium tracking-wider">
                當季新鮮水果
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-column-reverse flex-md-row-reverse align-items-md-center">
        <div class="col-12 col-md-6 text-center py-5 py-md-0">
          <h1 class="pb-5 text-3xl font-medium tracking-widest"
          data-aos="fade-up">客製化訂單 <img src="@/assets/pic/icon/chef.png" alt=""></h1>
          <p class="pb-4 text-base tracking-wide leading-7" data-aos="fade-up"
          >始終找不到您心中幻想的甜點嗎？<br><span>( 聯絡我們提供想法、溝通報價 )</span></p>
          <a href="/#/user/contact" class="href-none">
            <w-button class="font-bold tracking-wider text-black px-3
            py-md-3 px-md-4 py-lg-3 px-lg-5"
            lg bg-color="white" tile data-aos="fade-up">聯絡我們
            </w-button>
          </a>
        </div>
        <div class="col-12 col-md-6">
          <swiper ref="{swiperRef}"
            :slidesPerView="1"
            :centeredSlides="true"
            :spaceBetween="30"
            :navigation="true"
            :modules="modules"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :speed="600"
            :breakpoints="{
              '768': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }"
            class="mySwiper position-relative customized-container">
              <div class="position-absolute swiper-bg top-0"></div>
              <swiper-slide class="position-relative">
                <img class="" src="@/assets/pic/homepage/母親節蛋糕.png" alt="">
                <h2 class="position-absolute top-50 start-50 translate-middle
                text-xl font-medium tracking-wider text-nowrap">母親節蛋糕</h2>
              </swiper-slide>
              <swiper-slide class="position-relative">
                <img class="" src="@/assets/pic/homepage/聖誕節餅乾.png" alt="">
                <h2 class="position-absolute top-50 start-50 translate-middle
                text-xl font-medium tracking-wider">暖心餅乾</h2>
              </swiper-slide>
              <swiper-slide class="position-relative">
                <img class="" src="@/assets/pic/homepage/萬聖節餅乾.png" alt="">
                <h2 class="position-absolute top-50 start-50 translate-middle
                text-xl font-medium tracking-wider">搞怪餅乾</h2>
              </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="container main2">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center pb-5" data-aos="fade-up">
            <span class="position-relative text-3xl font-medium tracking-widest">熱銷商品
              <img src="@/assets/pic/icon/hot.png"
              class="position-absolute top-0 start-0"
              style="transform: translate(-40px, -15px) rotate(-45deg);" alt="">
            </span>
            <img src="@/assets/pic/icon/trophy.png" alt="">
          </h1>
          <swiper ref="{swiperRef}"
            :slidesPerView="1"
            :centeredSlides="true"
            :spaceBetween="30"
            :navigation="true"
            :modules="modules"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
            }" :speed="500" :breakpoints="{
              '768': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 50,
              }
            }" class="mySwiper hot-product-container">
            <div class="position-absolute swiper-bg top-0"></div>
            <swiper-slide class="position-relative">
              <a href="#">
                <img class="w-100" src="@/assets/pic/products/巧克力焦糖杯子蛋糕.png" alt="巧克力焦糖杯子蛋糕">
              </a>
              <div class="position-absolute top-50 start-50 translate-middle content">
                <h2 class="text-xl font-medium tracking-wider">巧克力焦糖杯子蛋糕</h2>
                <p>口感 作法 特色 差異 熱銷原因</p>
              </div>
            </swiper-slide>
            <swiper-slide class="position-relative">
              <a href="">
                <img class="w-100" src="@/assets/pic/products/巧克力布朗尼.png" alt="巧克力布朗尼">
              </a>
              <div class="position-absolute top-50 start-50 translate-middle content">
                <h2 class="text-xl font-medium tracking-wider">蛋糕</h2>
                <p>口感 作法 特色 差異 熱銷原因</p>
              </div>
            </swiper-slide>
            <swiper-slide class="position-relative">
              <a href="">
                <img class="w-100" src="@/assets/pic/products/巧克力金沙蛋糕.png" alt="巧克力金沙蛋糕">
              </a>
              <div class="position-absolute top-50 start-50 translate-middle content">
                <h2 class="text-xl font-medium tracking-wider">蛋糕</h2>
                <p>口感 作法 特色 差異 熱銷原因</p>
              </div>
            </swiper-slide>
            <swiper-slide class="position-relative">
              <a href="">
                <img class="w-100" src="@/assets/pic/products/檸檬蜂蜜奶油蛋糕.png" alt="檸檬蜂蜜奶油蛋糕">
              </a>
              <div class="position-absolute top-50 start-50 translate-middle content">
                <h2 class="text-xl font-medium tracking-wider">蛋糕</h2>
                <p>口感 作法 特色 差異 熱銷原因</p>
              </div>
            </swiper-slide>
            <swiper-slide class="position-relative">
              <a href="">
                <img class="w-100" src="@/assets/pic/products/起司藍莓蛋糕.png" alt="起司藍莓蛋糕">
              </a>
              <div class="position-absolute top-50 start-50 translate-middle content">
                <h2 class="text-xl font-medium tracking-wider">蛋糕</h2>
                <p>口感 作法 特色 差異 熱銷原因</p>
              </div>
            </swiper-slide>
            <swiper-slide class="position-relative">
              <a href="">
                <img class="w-100" src="@/assets/pic/products/混合巧克力蛋糕.png" alt="混合巧克力蛋糕">
              </a>
                <div class="position-absolute top-50 start-50 translate-middle content">
                  <h2 class="text-xl font-medium tracking-wider">蛋糕</h2>
                  <p>口感 作法 特色 差異 熱銷原因</p>
                </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="container-fulid">
      <div class="subBg">
        <div class="mx-auto" style="max-width:450px;">
          <Form @submit="submit" class="position-relative form-outline form-white my-5">
            <h2 class="font-medium tracking-widest text-3xl d-block"
            data-aos="fade-up">
              訂閱甜點電子報<br>立馬獲得8折優惠卷
            </h2>
            <div class="sub d-flex flex-wrap justify-content-center pt-3"
            data-aos="fade-up">
              <Field v-model="subMail" type="email"
              name="信箱" id="subscription" rules="required|email" :validateOnBlur="false"
                :validateOnChange="false"
                class="sub-input d-inline-block bg-transparent rounded-0 tracking-widest"
                placeholder="EMAIL" />
              <button type="submit"
              class="sub-btn d-inline-block text-black tracking-wide">
                <i class="bi bi-envelope footer-envelope"></i></button>
              <ErrorMessage :class="{ 'd-none': this.subMail == ''}"
              name="信箱" style="color:orangered"></ErrorMessage>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import {
  Swiper, SwiperSlide,
} from 'swiper/vue';
import {
  Parallax, Autoplay, Navigation,
} from 'swiper';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import {
  Field, Form, ErrorMessage,
} from 'vee-validate';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../assets/scss/swiper/homePageSwiper.css';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      subMail: '',
      slider: false,
    };
  },
  components: {
    Navbar, Footer, Swiper, SwiperSlide, Field, Form, ErrorMessage,
  },
  setup() {
    return {
      modules: [Parallax, Autoplay, Navigation],
    };
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        || document.body.scrollTop;
      if (scrollTop > 20) {
        this.slider = true;
      } else {
        this.slider = false;
      }
    },
    submit() {
      this.subMail = '';
      Swal.fire('感謝您的訂閱，<br>8折優惠碼:coupon012');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
