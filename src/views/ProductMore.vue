<template>
<loading v-model:active="isLoading">
  <div class="loadingio-spinner-interwind-il303leqtya">
    <div class="ldio-k17d8xi3rys">
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</loading>
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
              <li class="breadcrumb-item breadcrumb-item-none"
                aria-current="page">
                {{ product.category }}類
              </li>
              <li class="breadcrumb-item breadcrumb-item-none">內容</li>
              <li class="ms-auto">
              <router-link to="/user/products"
              class="breadcrumb-item-back text-black text-decoration-none"
              data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="前往商品頁">返回</router-link>
              </li>
            </ol>
          </nav>
      </div>
      <div class="col-12 text-center pt-5"
        :class="{ 'd-none': productLoading }">
        <div class="spinner-border text-light"
          role="status"
          style="width: 3rem; height: 3rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
  <!-- content -->
  <div class="container"
    :class="{'d-none': !productLoading }">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4">
        <div class=" position-relative cursor-pointer overflow-hidden"
          @click="showSingle"
          @keypress="showSingle">
          <img :src="product.imageUrl" class="w-100 h-100" alt="productImage">
            <div class="position-absolute swiper-bg top-0"></div>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="product.imageUrl"
          :index="indexRef"
          @hide="onHide">
        </vue-easy-lightbox>
      </div>
      <div class="col-12 col-md-5 offset-md-1 d-flex flex-column justify-content-between">
        <div class="">
          <div class="">
            <h1 class="text-2xl font-bold
            tracking-wider my-4 mb-md-4 text-white">
            <span class="badge bg-danger"
            v-if="(product.num <= 5 && product.num >= 1)">HOT</span>
            <span class="badge bg-secondary opacity-50"
            v-else-if="(product.num === 0)">SOLD OUT</span>
            {{product.title}}
            </h1>
          </div>
          <div class="p-01">
            <p class="mt-5 text-indent2rem">{{ product.content }}</p>
            <h5 class="mt-5">成份:</h5>
            <p class="">{{product.description}}</p>
            <h5 class="mt-5">尺寸:</h5>
            <div class="type-btn">{{product.unit}}</div>
          </div>
        </div>
        <div class="productmore-item py-5">
          <div class="d-flex align-items-center">
            <del class="text-white">原價{{product.origin_price}}$</del>
            <div class="productmore-price d-inline-block ps-2">
              <p class="font-semibold text-2xl text-red">優惠價{{product.price}}$</p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <div class="numInput-item d-flex justify-content-end align-items-center">
              <div
              @click.prevent="min()"
              @keypress="min()"
              class="cursor-pointer numInput-prev text-center">-</div>
              <div class="counter border">
                <label for="num" class="d-block h-100">
                  <input id="num" name="num" v-model="this.num" type="text" min="1"
                  class="d-block rounded-0 bg-dark border-0 text-center text-white h-100">
                </label>
              </div>
              <div
              @click.prevent="add()"
              @keydown="add()"
              class="cursor-pointer numInput-next text-center">+</div>
            </div>
            <div class="fav text-red ms-auto me-3 cursor-pointer"
              @click.stop="addFav(product)"
              @keydown="addFav(product)">
              <i class="bi mx-2 fs-1"
                :class="favoriteData.includes(product.id) ? 'bi-heart-fill' : 'bi-heart'">
              </i>
            </div>
            <div v-if="product.num >= 1 "
              :class="{'opacity-75': this.isLoading === true }"
              @click.prevent="addCart(product.id, $event)"
              @keydown="addCart(item, $event)" :disabled="this.isLoading ===true"
              class="w-btn-product cursor-pointer">
              <div
              @click.stop class="d-none spinner-border spinner-border-sm"
              role="status">
              </div>
              加入購物車
            </div>
            <div v-else class="w-btn-product opacity-50" @click.stop>
              已售完
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="col-12 col-md-9 mx-auto">
        <div class="mb-5">
          <h4 class="pb-2 tracking-wide font-medium text-xl"
        style="border-bottom:1px solid #404040">保存方式</h4>
          <p>｜最佳賞味期限｜<br>
          可冷藏保存1週，冷凍保存2週。請見商品標示日期。<br>
          建議放入冷藏前請將蛋糕用保鮮盒密封好，再存放食用前於室溫回溫20-30分鐘風味更佳！開封後請儘速食用完畢。<br>
          </p>
          <p class="mt-3">
          餅乾：常溫密封約可保存2週，冷凍密封約可保存2-3個月，回溫即可食用。<br>
          蛋糕：放置冷藏約可保存5天。<br>
          慕斯：密封冷藏約可保存2-3天，密封冷凍約可保存7-10天，回溫即可食用。
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
  <!-- swiper -->
  <div class="container"
  v-if="sameProduct.length !== 0">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 py-5 text-white">
        <h4 class="pb-2 tracking-wide font-medium text-xl"
        style="border-bottom:1px solid #404040">您可能喜歡這些...</h4>
        <div class="swiper-container">
          <swiper ref="{swiperRef}"
          :slidesPerView="2"
          :centeredSlides="true"
          :spaceBetween="30"
          :navigation="true"
          :modules="modules"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper">
            <swiper-slide v-for="item,index in sameProduct"
              :key="index"
              class="flex-column">
              <div class="mx-auto product-content-container cursor-pointer"
                @click.stop="more(item.id, index)"
                @keydown="more(item.id, index)"
                style="max-width:250px">
                <img :src="item.imageUrl" alt="">
                <h5 class="product-content-h5 text-base font-medium tracking-wide py-2">
                  {{ item.title }}
                </h5>
                <p class="product-content">
                  <del>{{ item.origin_price }}$</del>/
                  <span class="product-p">優惠價{{ item.price }}$</span>
                </p>
                <div v-if="item.num >= 1"
                  :class="{'opacity-75': this.isLoading === true }"
                  :disabled="this.isLoading ===true"
                  class="mt-2 w-btn-product"
                  @click.stop="addCart(item.id, $event)"
                  @keydown="addCart(item.id, $event)">
                  <div class="d-none spinner-border spinner-border-sm" role="status">
                  </div>加入購物車
                </div>
                <div v-else class="w-btn-product mt-2 opacity-50" @click.stop>
                  已售完
                </div>
              </div>
            </swiper-slide>
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
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import '../assets/scss/swiper/productMoreSwiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay, Pagination, Navigation,
} from 'swiper';
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
      productLoading: true,
      productHistory: [],
      sameProduct: [],
      favoriteData: [],
    };
  },
  components: {
    Loading, Navbar, Footer, Swiper, SwiperSlide, VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);
    const onShow = () => {
      visibleRef.value = true;
    };
    const showSingle = () => {
      onShow();
    };
    const onHide = () => {
      visibleRef.value = false;
    };
    return {
      modules: [Autoplay, Pagination, Navigation],
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      onHide,
    };
  },
  methods: {
    getData() {
      const id = this.$route.params.productId;
      this.productLoading = false;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.productLoading = true;
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
        this.num = 1;
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
      this.num += 1;
      if (this.num >= 50) {
        this.num = 50;
      }
    },
    min() {
      this.num -= 1;
      if (this.num <= 0) {
        this.num = 1;
      }
    },
    getDataAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        this.productAll = res.data.products;
        if (res.data.success) {
          this.updateHistory();
        }
      });
    },
    updateHistory() {
      const data = JSON.parse(localStorage.getItem('setHistory')) || [];
      const clickData = [];
      this.productAll.forEach((item) => {
        if (data.length === 0) {
          return;
        }
        if (item.id === data[0]) {
          clickData.push(item);
        }
      });
      this.productAll.forEach((item) => {
        if (data.length === 0) {
          return;
        }
        if (clickData[0].category === item.category) {
          this.sameProduct.push(item);
        }
      });
    },
    more(id) {
      this.$router.replace(`/user/product/${id}`);
    },
    addFav(item) {
      if (this.favoriteData.includes(item.id)) {
        this.favoriteData.splice(this.favoriteData.indexOf(item.id), 1);
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
          title: '成功移除收藏',
        });
      } else {
        this.favoriteData.push(item.id);
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
          title: '成功加入收藏',
        });
      }
      localStorage.setItem('fav', JSON.stringify(this.favoriteData));
      emitter.emit('updateNum');
    },
    updateFav() {
      this.favoriteData = JSON.parse(localStorage.getItem('fav')) || [];
    },
  },
  mounted() {
    this.getData();
    this.getDataAll();
    this.updateFav();
    setInterval(() => {
      localStorage.removeItem('setHistory');
    }, 3600000);
  },
};
</script>
