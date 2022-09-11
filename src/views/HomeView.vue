<template>
  <Navbar />
  <div class="bg-dark overflow-hidden">
    <div class="container-fuild" style="padding-top: 100px;">
      <div class="row">
        <div class="col-12">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" pause="hover" touch="true" data-bs-ride="carousel">
            <div class="carousel-inner w-100">
              <div class="carousel-item carousel-item-home overflow-hidden active" data-bs-interval="3000">
                <w-image :src="carouselUrl" style="width: 220px;height: 180px;" class="me-4 ms-auto d-block" alt="artPicture" />
                  <div class="carousel-caption carousel-caption-home d-block text-white">
                    <h5>熱銷No.1</h5>
                    <p>FAUNE</p>
                  </div>
              </div>
              <div class="carousel-item carousel-item-home overflow-hidden" data-bs-interval="3000">
                <w-image :src="carousel2Url" style="width: 200px;height: 180px;" class="ms-auto d-block" alt="artPicture" />
                  <div class="carousel-caption carousel-caption-home d-block text-white">
                    <h5>熱銷No.2</h5>
                    <p>Black&White</p>
                  </div>
              </div>
              <div class="mask w-50 h-100 bg-dark position-absolute top-0 d-none d-sm-inline-block">
                <div class="banner-container">
                  <h1 class="banner-title d-block text-white mx-auto">透過雜誌看見世界<br>
                    <router-link to="/user/products">
                      <w-button class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>前往商店
                      </w-button>
                      </router-link>
                  </h1>
                </div>
              </div>
            </div>
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
        <div class="col-12 d-block d-sm-none">
          <div class="banner-container">
            <h1 class="banner-title d-block text-white mx-auto py-5">透過雜誌看見世界</h1>
              <router-link to="/user/products">
                <w-button class="d-block mx-auto text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>前往商店
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
          <h4 class="pt-3 pb-1">下單後24hr內到貨</h4>
          <p class="">時間未到達，現金回饋補償</p>
        </div>
        <div class="col-12 col-md-6 py-5 wow animated fadeInUp" data-wow-duration="2s">
          <div class="homeDetails-inner overflow-hidden mx-auto">
            <w-image :src="content3Url" class="w-100 h-100" alt="driver" />
          </div>
          <h4 class="pt-3 pb-1" data-wow-duration="2s">優良的退貨機制</h4>
          <p class="" data-wow-duration="2s">3天無條件退貨，10天鑑賞期，專人到府回收</p>
        </div>
        <div class="col-12 d-md-flex justify-content-md-around my-5 wow animated fadeInRight" data-wow-duration="3s">
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-currency-dollar"
                viewBox="0 0 16 16">
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
              </svg>
            </div>
            <p class="ps-3">比市價更便宜</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag"
                viewBox="0 0 16 16">
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
            <p class="ps-3">商品每週更新</p>
          </div>
          <div class="d-flex align-items-center justify-content-center pb-3">
            <div class="homeDetails-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam"
                viewBox="0 0 16 16">
                <path
                  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </div>
            <p class="ps-3">包裝品質把關</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-white p-5 mt-5">
      <div class="row bg-burlywood">
        <div class="col-12 py-2 text-center">
          <h2>Mgz x ibook</h2>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <router-link to="/user/products">
              <img src="@/assets/pic/homeArt01.png" class="w-100 h-100" alt="">
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <router-link to="/user/products">
              <img src="@/assets/pic/homeFashion04.png" class="w-100 h-100" alt="">
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="newsItem mx-auto pb-2">
            <router-link to="/user/products">
              <img src="@/assets/pic/homeTrival03.png" class="w-100 h-100" alt="">
            </router-link>
          </div>
        </div>
        <div class="col-12 text-center">
          <h3>//NEWS//</h3>
          <p>新上架雜誌<br>特價中!</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-5 mx-auto text-center my-4">
          <Form @submit="onSubmit"  class="position-relative form-outline form-white my-2">
            <label class="text-white d-block pb-3" for="subscription">訂閱流行資訊</label>
            <div class="d-flex flex-wrap justify-content-center">
              <Field v-model="subMail" type="email" name="信箱" id="subscription" rules="email"
              class="sub-input d-inline-block bg-dark text-white" placeholder="EMAIL ADDRESS" />
              <button type="submit" class="sub-btn d-inline-block text-black bg-white">立即訂閱</button>
              <ErrorMessage name="信箱" style="color:orangered"></ErrorMessage>
            </div>
          </Form>
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
      <span class="d-block position-absolute text-black" @click="hideCoupon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </span>
      <p class="coupon-content">折扣10%優惠碼<br><strong>coupon012</strong><br>
        <i class="coupon-remind">結帳時輸入</i></p>
    </div>
  </div>
  <div class="coupon position-fixed bottom-0 end-0 m-2 m-md-3" @click="openCoupon">
    <img src="@/assets/pic/coupon.png" class="w-100 h-100" alt="coupon">
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { defineRule } from 'vee-validate';

export default {
  data() {
    return {
      ScrollCoupon: true,
      once: false,
      carouselUrl: require('@/assets/pic/Arttransparent.png'),
      carousel2Url: require('@/assets/pic/Arttransparent02.png'),
      contentUrl: require('@/assets/pic/pic01.webp'),
      content2Url: require('@/assets/pic/smile02.png'),
      content3Url: require('@/assets/pic/smile01.png'),
      subMail: '',
    };
  },
  components: { Navbar, Footer, Form, Field, ErrorMessage },
  methods: {
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
    },
    onSubmit() {
                  /* START */
    //   defineRule('required', value => {
    //     if (!value || !value.length) {
    //       console.log(1)
    //       return '須為必填';
    //     }
    //     return true;
    //   });
    //   defineRule('email', value => {
    //     if (!value || !value.length) {
    //       return true;
    //     }
    //     // Check if email
    //     // if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    //     //   return '此字段必須是有效的電子郵件';
    //     // } 
        // console.log(this.subMail)
        // const data = {
        //   email : this.subMail,
        // }
        // const api = 'http://localhost:3000/sub';
        // this.axios.post(api, {data} ).then((res) => {
        //   console.log( res )
        //   if (res.data.success) {
        //     alert(success)
        //   }
        // });
    // return true;
    //    Swal.fire({
    //    position: 'top-end',
    //    icon: 'success',
    //    title: '感謝您的訂閱!',
    //    showConfirmButton: false,
    //    timer: 1500
    //  })
    //   });
        /*    end      */  
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
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
