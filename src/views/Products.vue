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
        <div class="col-12 col-md-3" :class="{'d-none': filterBar}">
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
          <div class="ps-3 px-md-0 d-flex flex-wrap justify-content-end justify-content-md-center align-items-center mt-3">
            <label for="sort" class="text-white tracking-wide font-medium pe-2 pb-md-1 d-inline-block">顯示方法</label>
            <div class="bg-white d-inline-block" style="max-width:300px;border-radius: 5px;">
              <select name="sort" id="sort" class="text-black tracking-wide font-medium px-4 py-1 border-0" @change="onChange($event)">
                <option selected="selected" disabled="disabled" style='display: none' value=''>選擇顯示方法</option>
                <option value="價格排序低到高">價格排序低到高</option>
                <option value="價格排序高到低">價格排序高到低</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="d-md-none text-end">
            <w-switch v-model="filterBar" class="ma4 w-switch--wide d-inline-block" color="grey-dark2">
              <template #track><strong>{{ filterBar ? 'on' : 'off' }}</strong></template>
            </w-switch>
            <div class="py-2 text-white d-inline-block"
            @click="filterBar = !filterBar" :class="{'d-none': filterBar}">關閉所有篩選條件欄</div>
            <div class="py-2 text-white d-inline-block"
            @click="filterBar = !filterBar" :class="{'d-none': !filterBar}">開啟所有篩選條件欄</div>
          </div>
          <div class="row">
            <div class="col-6 col-md-6 col-lg-4 mb-5"
            v-for="item,index in products">
              <div class="text-white product-content-container mx-auto cursor-pointer"
              @click.prevent="more(item.id,$event,index)">
                <div class="product-item position-relative">
                  <w-image :src="item.imageUrl" class="position-relative w-100 h-100 product-img" alt="雜誌圖片">
                  </w-image>
                  <div class="w-100 productNotes-container position-absolute bottom-0 start-50">
                      <i class="productNotes-icon d-block bi bi-info-square text-4xl position-relative top-50 start-50 text-center"></i>
                  </div>
                  <div class="fav position-absolute end-0 top-0"
                  @click.stop="addFav(item,index)">
                    <i class="bi fs-2 mx-2" 
                    :class="favoriteData.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'"></i>
                  </div>
                </div>
                <div class="product-content pt-1">
                  <h5 class="product-content-h5 text-base font-medium tracking-wide">{{ item.title }}</h5>
                    <p class="product-p">${{ item.price }}</p>
                    <div :class="{'opacity-75': this.isLoading === true }"
                    @click.stop="addCart(item, $event)"
                      :disabled="this.isLoading ===true"
                      class="d-block mt-2 p-1 text-center product-btn
                      tracking-wide font-medium bg-white text-decoration-none">
                      <div @click.stop class="d-none spinner-border spinner-border-sm" role="status">
                      </div>
                      加入購物車</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ 'scrollIconMoveIn':!scrollIcon  }" ref="scrollTop" class="scrollTop-container position-fixed end-0 text-center">
      <a @click.prevent="scrollToTop" href="/#/user/products"
      class="scrollTop-btn d-block m-1 rounded-circle text-white m-2 m-md-3">
        <i class="bi-arrow-bar-up fs-5"></i>
    </a>
    </div>
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
import emitter from '@/methods/emitter';

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
      filterBar: false,
      history: [],
    };
  },
  components: { Navbar, Footer, Loading },
  methods: {
    getData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        this.products = res.data.products;
      });
    },
    more(id, e,index) {
      if ( e.target.innerText == '加入購物車' ) {
        return
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
        this.axios.get(api).then((res) => {
          if ( res.data.success ) {
            this.$router.push(`/user/product/${id}`);
          }
        });
      }
      this.productHistory(id);
    },
    productHistory(id) {
      this.history = JSON.parse(localStorage.getItem('setHistory')) || [];
        if (this.history.includes(id)) {
          this.history.splice(this.history.indexOf(id), 1);
        } else {
          this.history.push( id );
          localStorage.setItem('setHistory', JSON.stringify(this.history))
        }
    },
    addCart(item, e) {
      e.target.childNodes[0].classList.remove('d-none');
      const data = {
        product_id: item.id,
        qty: 1,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.post(api, { data }).then((res) => {
        this.isLoading = false;
        e.target.childNodes[0].classList.add('d-none');
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
      emitter.emit('updateCartsNum');
    },
    productsFilter(e) {
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
    onChange(e) {
      let value = e.target.value;
      if (value === '價格排序低到高' && this.products.length > 1) {
        this.products.sort(function(a,b) {
          return a.price - b.price;
        })
      } else if (value === '價格排序高到低' && this.products.length > 1 ){
        this.products.sort(function(b,a) {
          return a.price - b.price;
        })
      }
    },
    addFav(item) {
      if ( this.favoriteData.includes(item.id) ) {
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
    window.addEventListener('resize', () => {
      if (document.body.clientWidth >= 768) {
        this.filterBar = false;
      }
    })
  },
  mounted() {
      this.getData();
      this.updateFav();
  },
};
</script>
