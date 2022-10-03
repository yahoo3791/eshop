<template>
<loading v-model:active="isLoading" />
<div class="bg-dark pt-5">
  <Navbar />
  <!-- 麵包削 -->
  <div class="container pt-5">
    <div class="row pb-5">
      <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb py-2 px-1 p-md-2 breadcrumb-style tracking-normal">
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
  </div>
  <!-- END -->
  
  <!-- content -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <div class="productmore-pic position-relative cursor-pointer overflow-hidden" @click="showSingle">
          <img :src="product.imageUrl" class="w-100 h-100" alt="productImage">
          <div class="productmore-search position-absolute bottom-0 end-0 p-2 text-white opacity-75">
            <p class="d-inline-block pe-1 tracking-wide">點擊看更大圖片</p>
            <i class="bi bi-zoom-in fs-3"></i>
          </div>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :imgs="product.imageUrl" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
      </div>
      <div class="col-12 col-md-5 d-flex flex-column justify-content-between">
        <div class="">
          <div class="">
            <h1 class="text-2xl font-bold
            tracking-wider my-4 mb-md-4 mt-md-0 text-white text-center">{{product.title}}</h1>
          </div>
          <div class="text-indent2rem">
            <p class="leading-8 tracking-normal text-white">{{product.description}}</p>
          </div>
        </div>
        <div class="productmore-item py-5">
          <del class="text-white">原價{{product.origin_price}}$/{{product.unit}}</del>
          <div class="d-flex justify-content-between align-items-center">
            <div class="productmore-price d-inline-block">
              <p class="font-semibold text-2xl text-red">特價{{product.price}}$/{{product.unit}}</p>
            </div>
            <div class="numInput-item d-flex justify-content-end align-items-center">
              <div @click.prevent="min()"
              class="cursor-pointer numInput-prev text-center">-</div>
              <div class="counter border">
                <input v-model="this.num" type="text" min="1"
                class="d-block rounded-0 bg-dark text-center text-white border-0 h-100">
              </div>
              <div @click.prevent="add()"
              class="cursor-pointer numInput-next text-center">+</div>
            </div>
          </div>
          <div class="d-flex align-items-center my-5">
            <w-button @click.prevent="addCart(product.id, $event)" class="offset-btn border border-2 text-white px-3 py-4 py-md-3 px-md-4 px-lg-5 w-100" lg
              bg-color="transparent" tile><div class="d-none spinner-border spinner-border-sm mx-3 tracking-wide font-medium" role="status"></div>加入購物車</w-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->

  <!-- swiper -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 py-5 text-white">
        <h4 class="pb-2 tracking-wide font-medium text-xl" style="border-bottom:1px solid #404040">瀏覽紀錄</h4>
        <div class="swiper-container">
          <swiper ref="{swiperRef}" :slidesPerView="2" :centeredSlides="true" :spaceBetween="30" :navigation="true"
            :modules="modules" class="mySwiper">
            <swiper-slide v-for="item,index in productHistory" class="flex-column">
              <div class="mx-auto product-content-container cursor-pointer"
              @click.stop="more(item.id, index)" style="max-width:250px">
                <img :src="item.imageUrl" alt="">
                <h5 class="product-content-h5 text-base font-medium tracking-wide py-2">{{ item.title }}</h5>
                <p class="product-p">${{ item.price }}</p>
                <div :class="{'opacity-75': this.isLoading === true }" :disabled="this.isLoading ===true" class="d-block mt-2 p-1 text-center
                  tracking-wide font-medium bg-white text-decoration-none text-black"
                  @click.stop="addCart(item.id, $event)">
                  <div class="d-none spinner-border spinner-border-sm" role="status">
                  </div>加入購物車
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->

  <!-- 商品規格 書本內容 -->
  <div class="container">
    <div class="row mt-5 pb-5 justify-content-center">
      <div class="col-12 col-md-9">
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
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
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
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show rounded-0"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat amet quasi hic officia, esse quas voluptatem sunt laboriosam architecto ratione, cum, sint doloremque corrupti repudiandae dolorem! Reiciendis doloribus dolorum autem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
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
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref } from 'vue';

export default {
  data() {
    return {
      productAll: {},
      product: {},
      num: 1,
      isLoading: false,
      productHistory: [],
    };
  },
  components: {
    Loading, Navbar, Footer, Swiper, SwiperSlide, VueEasyLightbox },
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgsRef = ref([])
    const onShow = () => {
      visibleRef.value = true
    }
    const showSingle = () => {
      onShow()
    }
    const onHide = () => (visibleRef.value = false)
    return {
      modules: [Pagination, Navigation],
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      onHide
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
    addCart(id, e) {
      e.target.children[0].classList.remove('d-none');
      if (this.num <= 0 || this.num >= 50) {
        e.target.children[0].classList.add('d-none');
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
        e.target.children[0].classList.add('d-none');
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
    getDataAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        this.productAll = res.data.products;
        if ( res.data.success ) {
          this.updateHistory();
        }
      });
    },
    updateHistory() {
      let data = JSON.parse(localStorage.getItem('setHistory')) || [];
      this.productAll.filter((history) => {
        data.forEach((i) => {
          if (history.id == i) {
            this.productHistory.push( history );
          }
        })
      })
    },
    more(id) {
      this.$router.replace(`/user/product/${id}`);
    },
  },
  mounted() {
    this.getData();
    this.getDataAll();
  },
};
</script>
