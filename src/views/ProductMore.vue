<template>
<loading v-model:active="isLoading" />
<div class="bg-dark">
  <Navbar />
  <div class="container text-white pt-3">
    <div class="row">
      <div class="col-12">
          <nav aria-label="breadcrumb" class=" m-md-4 breadcrumb-position">
            <ol class="breadcrumb p-2 breadcrumb-style">
              <li class="breadcrumb-item">
                <a class="text-black text-decoration-none" href="#">首頁</a></li>
              <li class="breadcrumb-item breadcrumb-item-none">商品列表</li>
              <li class="breadcrumb-item breadcrumb-item-none" aria-current="page">{{ product.category }}類</li>
              <li class="breadcrumb-item breadcrumb-item-none">內容</li>
              <li class="ms-auto">
              <router-link to="/user/products"
              class="breadcrumb-item-back text-black text-decoration-none">返回</router-link>
              </li>
            </ol>
          </nav>
      </div>
    </div>
    <div class="row" style="padding-top:120px;">
      <div class="d-none d-md-block col-md-3 mb-5">
        <div class="list-group px-md-0 text-center tracking-wider">
          <a href="#"  class="list-group-item
                        list-group-item-action border" aria-current="true">全部雜誌</a>
          <a href="#"  class="list-group-item
                        list-group-item-action border border-top-0">時尚</a>
          <a href="#"  class="list-group-item
                        list-group-item-action border border-top-0">藝術</a>
          <a href="#"  class="list-group-item
                        list-group-item-action border border-top-0">旅遊</a>
          <a href="#"  class="list-group-item
                        list-group-item-action border border-top-0">汽車</a>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="product_pic position-relative my-3">
          <img :src="product.imageUrl" class="w-100 h-100" alt="productImage">
        </div>
      </div>
      <div class="col-12 col-md-5 d-flex flex-column justify-content-between">
        <div class="product_content">
          <div class="product_title">
            <h1 class="product_title_h1 text-2xl font-bold
            tracking-wider mb-4">{{product.title}}</h1>
          </div>
          <div class="product_description">
            <p class="leading-8 tracking-normal product-description">{{product.description}}</p>
          </div>
        </div>
        <div class="product_">
          <div class="d-flex justify-content-between">
            <div class="product_price">
              <del>原價{{product.origin_price}}$/{{product.unit}}</del>
              <p class="font-semibold text-2xl text-red">特價{{product.price}}$/{{product.unit}}</p>
            </div>
            <div class="numInput d-flex justify-content-end align-items-center">
              <a @click.prevent="min()" class="cursor-pointer d-block prev text-center text-decoration-none">-</a>
              <div class="counter">
                <input v-model="this.num" type="text" min="1" class="rounded-0 bg-dark text-center text-white h-100">
              </div>
              <a @click.prevent="add()" class="cursor-pointer next text-center text-decoration-none">+</a>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <w-button @click.prevent="addCart(product.id)" class="text-black px-3 py-md-3 px-md-4 px-lg-5 w-100" lg
              bg-color="white" tile style="">加入購物車</w-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 pb-5">
      <div class="col-12 col-md-9 offset-md-3">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" style="border-radius:0">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="tracking-wide accordion-button"
              type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                商品規格
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body leading-7">
                <p>
                顏色：彩色<br>
                材質：環保回收紙<br>
                尺寸：30 公分 X 40 公分 X 75 公分(長×寬×高)
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="tracking-wide accordion-button collapsed rounded-0"
              type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                書本內容
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse rounded-0"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat amet quasi hic officia, esse quas voluptatem sunt laboriosam architecto ratione, cum, sint doloremque corrupti repudiandae dolorem! Reiciendis doloribus dolorum autem.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-9 offset-md-3 py-5">
        <h4 class="pb-2" style="border-bottom:1px solid white">瀏覽紀錄</h4>
        <div class="swiper-container">
            <swiper ref="{swiperRef}" :slidesPerView="4" :centeredSlides="true" :spaceBetween="30"  :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
            </swiper>
        </div>
      </div>
    </div>
    </div>
  </div>
<Footer/>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "../assets/scss/swiper/productMoreSwiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      product: {},
      num: 1,
      isLoading: false,
    };
  },
  components: {
    Loading, Navbar, Footer, Swiper, SwiperSlide, },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    getData() {
      const id = this.$route.params.productId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.product = res.data.product;
      });
    },
    addCart(id) {
      if (this.num <= 0 || this.num >= 50) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'warning',
          title: '請輸入正確數字:等於1小於51',
        });
        return this.num = 1;
      }
      const cartData = {
        product_id: id,
        qty: Number(this.num),
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.post(api, { data: cartData }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          emitter.emit('updateNum');
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'success',
            title: '成功加入購物車',
          });
          this.num = 1;
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'error',
            title: '加入購物車失敗',
          });
        }
      });
    },
    add() {
      this.num++;
      if (this.num >= 50) {
        return this.num = 50;
      }
    },
    min() {
      this.num--;
      if (this.num <= 0) {
        return this.num = 1;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
