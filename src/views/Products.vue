<template>
  <loading :active="isLoading"></loading>
  <Navbar />
  <div class="bg-dark pt-5">
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-2 breadcrumb-style tracking-wider">
              <li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">首頁</a></li>
              <li class="breadcrumb-item breadcrumb-item-none">商品列表</li>
              <li class="breadcrumb-item breadcrumb-item-none" aria-current="page">{{this.clickText}}</li>
            </ol>
          </nav>
        </div>
        <div class="col-12 col-md-3 mb-3">
          <div class="list-group px-md-0 text-center tracking-wider" @click.prevent="productsFilter($event.target.innerText)">
            <a href="#" :class="{' products-active ' : this.clickText === '全部雜誌'}" class="list-group-item
            list-group-item-action border" aria-current="true">全部雜誌</a>
            <a href="#" :class="{' products-active ' : this.clickText === '時尚'}" class="list-group-item
            list-group-item-action border border-top-0">時尚</a>
            <a href="#" :class="{' products-active ' : this.clickText === '藝術'}" class="list-group-item
            list-group-item-action border border-top-0">藝術</a>
            <a href="#" :class="{' products-active ' : this.clickText === '旅遊'}" class="list-group-item
            list-group-item-action border border-top-0">旅遊</a>
            <a href="#" :class="{' products-active ' : this.clickText === '汽車'}" class="list-group-item
            list-group-item-action border border-top-0">汽車</a>
          </div>
          <div class="px-3 px-md-0 d-flex flex-wrap justify-content-end justify-content-md-center align-items-center mt-3">
            <label for="sort" class="text-white pe-2 pb-md-2 d-inline-block">顯示方法</label>
            <div class="bg-white d-inline-block" style="max-width:300px;">
              <select name="sort" id="sort" class="text-black px-4 py-1 border-0" style="background: transparent;">
                <option value="價格排序低到高">價格排序低到高</option>
                <option value="價格排序高到低">價格排序高到低</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9 d-flex flex-row flex-wrap flex-md-row flex-md-wrap">
          <div class="product-outside w-50 px-3 py-2 mb-5 text-white border"
          v-for="item,index in products" :key="item.id" @click.prevent="more(item.id)" style="cursor:pointer">
              <div class="product-item position-relative">
                <w-image :src="item.imageUrl"
                class="position-relative w-100 h-100 product-img" alt="雜誌圖片"></w-image>
                <div class="border w-100 product-notes position-absolute  bottom-0 start-50
                tracking-widest text-lg text-center">
                  <p>點擊看更詳細</p>
                </div>
                <div @click.prevent class="fav position-absolute end-0 top-0">
                  <a href="" class="d-inline-block p-2 rounded-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="d-inline-block bi bi-heart"
                      viewBox="0 0 16 16" style="filter: drop-shadow(0px 0px 3px rgb(0 0 0 / 0.7))">
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="d-none bi bi-heart-fill"
                      viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="product-content py-1 border">
                <h5 class="product-content-h5 text-base font-medium tracking-wide">{{ item.title }}</h5>
                <div class="d-flex justify-content-between">
                  <p class="product-p">${{ item.price }}</p>
                    <button @click.prevent="addCart(item)"
                    :class="{'opacity-75': this.isLoading === true }" :disabled="this.isLoading ===true"
                    class="addCartSize border-0 d-inline-block align-self-end p-2 bg-white text-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="black" class="bi bi-bag" viewBox="0 0 16 16">
                        <path
                          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5
                          3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2
                          5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="this.openDrawer = true" class="drawer-container position-fixed bottom-0 end-0 text-center">
        <w-badge class="position-absolute" style="top:15px;right:15px"
        v-model="this.cartsNum" bg-color="error" overlap></w-badge>
      <a class="d-block p-2 m-1 rounded-circle drawer-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
          class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
          .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5
          0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479
          9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0
          0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </a>
    </div>
    <div :class="{ 'scrollIconMoveIn':!scrollIcon  }" ref="scrollTop" class="scrollTop-container position-fixed end-0 text-center">
      <a @click.prevent="scrollToTop" href="/#/user/products"
      class="scrollTop-btn d-block p-2 m-1 rounded-circle text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
        class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0
        .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0
        .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </a>
    </div>
    <w-drawer v-model="openDrawer" width="250px" bg-color="dark">
        <w-button style="top:100px" color="white" @click="this.openDrawer = false"
        xl outline absolute icon="wi-cross"></w-button>
        <div class="container">
          <div v-if="this.carts.length == 0" class="row" style="padding-top:150px">
            <div class="col-12 text-white text-center">
              <h3 class="text-center">購物車</h3>
              <h3 class="text-lg py-5 leading-7 tracking-wide">目前購物車是空的<br>
              快去逛逛吧！！</h3>
                <w-button @click="this.openDrawer = false"
                class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5 w-100"
                lg bg-color="white" tile>看商品</w-button>
            </div>
          </div>
            <div v-else-if="this.carts.length !== 0" class="row" style="padding-top:150px">
              <div class="col-12 text-white overflow-auto" style="height:50vh;">
                <h3 class="text-center text-xl font-medium tracking-wide">購物車</h3>
                <ul class="p-0 tracking-wide">
                  <li class="pt-1" style="border-bottom:1px solid #404040;" v-for="item in this.carts">
                    <h6>{{item.product.title}}</h6>
                    <div class="d-flex justify-content-between">
                      <p>{{item.qty}}/{{item.product.unit}}</p>
                      <p>{{item.total}}$</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-12">
                <router-link to="/user/carts" class="d-block text-center text-decoration-none">
                  <w-button class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5 w-100"
                  lg bg-color="white" tile>結帳</w-button>
                </router-link>
              </div>
            </div>
        </div>
    </w-drawer>
  </div>
<Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  data() {
    return {
      products: {},
      isLoading: false,
      cartsNum: 0,
      carts: {},
      scrollIcon: true,
      openDrawer: false,
      clickText: '全部雜誌',
      favoriteData: [],
      newFavoriteData: [],
    };
  },
  components: { Navbar, Footer, Loading },
  methods: {
    getData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
      });
    },
    more(id) {
      // 排除 add to cart fav點擊觸發more , 更改product item content
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = false;
      this.axios.get(api).then((res) => {
        this.isLoading = true;
        this.$router.push(`/user/product/${id}`);
      });
    },
    addCart(item) {
      const data = {
        product_id: item.id,
        qty: 1,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.post(api, { data }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
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
        } else {
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
            icon: 'error',
            title: '加入購物車失敗',
          });
        }
      });
      this.axios.get(api).then((res) => {
        const { carts } = res.data.data;
        if (res.data.success) {
          let num = 1;
          carts.forEach((i) => {
            num += i.qty;
          });
          this.cartsNum = num;
        }
        this.getCarts();
      });
      this.renderCarts();
    },
    productsFilter(e) {
      console.log(e);
      const clickText = e;
      this.clickText = e;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        const getProducts = res.data.products;
        let data = [];
        getProducts.filter((item) => {
          if (clickText === item.category) {
            data.push(item);
          } else if (clickText === '全部雜誌') {
            data = getProducts;
          }
        });
        if (data.length === 0) {
          return;
        }
        this.products = data;
      });
    },
    getCarts() {
      if (!this.cartsNum) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        this.axios.get(api).then((res) => {
          const { carts } = res.data.data;
          let num = 0;
          carts.forEach((i) => {
            num += i.qty;
            this.cartsNum = num;
          });
        });
      }
    },
    renderCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        this.carts = res.data.data.carts;
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if (window.scrollY >= 650) {
        this.scrollIcon = false;
      } else {
        this.scrollIcon = true;
      }
    },
  },
  watch: {
    cartsNum: {
      handler() {
        this.renderCarts();
      },
      immediate: true,
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.getData();
    this.getCarts();
    this.renderCarts();
  },
};
</script>
