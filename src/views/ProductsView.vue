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
    <div class="container-fluid pt-utility">
      <div class="row">
        <div class="col-12 col-md-9 mx-auto p-0">
          <div class="position-relative">
            <img src="@/assets/pic/banner/productBanner.png" class="w-100 productBanner"
            style="object-fit: cover; border-radius:5px" alt="全部商品圖片">
            <div class="position-absolute top-50 translate-middle-y" style="right:20%">
              <h2 class="text-3xl font-medium tracking-widest">全部甜點</h2>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9 mx-auto p-0">
          <div class="ps-3 px-md-0 d-flex flex-wrap justify-content-end
          align-items-center my-3">
            <label for="sort"
            class="text-white tracking-wide font-medium pe-2 pe-md-0 pb-md-1 d-inline-block">顯示方法
            <div class="bg-white d-inline-block"
              style="max-width:300px;border-radius: 5px;">
              <select name="sort" id="sort"
              class="text-black tracking-wide font-medium px-4 py-1 border-0"
              @change="onChange($event)">
                <option selected="selected"
                  disabled="disabled"
                  style='display: none' value=''>選擇顯示方法
                </option>
                <option value="熱銷商品">熱銷商品</option>
                <option value="價格排序低到高">價格排序低到高</option>
                <option value="價格排序高到低">價格排序高到低</option>
              </select>
            </div>
          </label>
          </div>
        </div>
        <div class="col-12 text-center pt-5"
          :class="{ 'd-none': productLoading }">
          <div class="spinner-border text-light" role="status"
            style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-12 col-md-9 mx-auto">
          <div class="row">
            <div class="col-6 col-md-6 col-lg-4 col-xl-3 mb-5"
            v-for="item,index in products"
            :key="index">
              <div class="text-white product-content-container mx-auto
              cursor-pointer position-relative"
              @click.prevent="more(item.id,$event,index)"
              @keydown="more(item.id,$event,index)">
                <span class="badge bg-danger position-absolute"
                v-if="(item.num <= 5 && item.num >= 1)"
                style="z-index:5; top:5%; left:5%">HOT</span>
                <span class="badge bg-dark opacity-50 position-absolute"
                v-else-if="(item.num === 0)" style="z-index:5; top:5%; left:5%"
                >SOLD OUT</span>
                <div class="product-item position-relative">
                  <w-image :src="item.imageUrl"
                  class="position-relative w-100 h-100 product-img" alt="雜誌圖片">
                  </w-image>
                  <div class="w-100 productNotes-container position-absolute bottom-0 start-50">
                      <i class="productNotes-icon d-block bi bi-info-square text-4xl
                        position-relative top-50 start-50 text-center">
                      </i>
                  </div>
                  <div class="fav position-absolute end-0 top-0"
                  @click.stop="addFav(item,index)"
                  @keydown="addFav(item,index)">
                    <i class="bi fs-1 mx-2"
                      :class="favoriteData.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'">
                    </i>
                  </div>
                </div>
                <div class="product-content pt-1">
                  <h5 class="product-content-h5 text-base font-medium tracking-wide">
                    {{ item.title }}
                  </h5>
                  <div class="d-block d-md-flex justify-content-md-between">
                    <p>
                      <del>{{ item.origin_price }}$</del>/
                      <span class="product-p">優惠價{{ item.price }}$</span>
                    </p>
                  </div>
                    <div v-if="item.num >= 1"
                      :class="{'opacity-75': this.isLoading === true }"
                      @click.stop="addCart(item, $event)"
                      @keydown="addCart(item, $event)"
                      :disabled="this.isLoading ===true"
                      class="w-btn-product mt-2 w-100">
                      <div @click.stop class="d-none spinner-border spinner-border-sm"
                      role="status">
                      </div>
                      加入購物車
                    </div>
                    <div v-else
                    class="w-btn-product w-100 mt-2 opacity-50"
                    @click.stop>
                      已售完
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
    :class="{ 'scrollIconMoveIn':!scrollIcon  }"
    ref="scrollTop"
    class="scrollTop-container position-fixed text-center
      end-0 bottom-0 cursor-pointer m-3">
      <div
        @click.prevent="scrollToTop"
        @keydown="scrollToTop"
        class="scrollTop-btn d-block">
      </div>
    </div>
<Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import emitter from '@/methods/emitter';
import scrollMixins from '../mixins/scroll';

export default {
  data() {
    return {
      products: {},
      isLoading: false,
      cartsNum: 0,
      carts: {},
      favoriteData: [],
      history: [],
      productLoading: true,
      pagination: {},
    };
  },
  components: { Navbar, Footer, Loading },
  mixins: [scrollMixins],
  methods: {
    getData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.productLoading = false;
      this.axios.get(api).then((res) => {
        this.pagination = res.data.pagination;
        this.products = res.data.products;
        this.productLoading = true;
      });
    },
    more(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.$router.push(`/user/product/${id}`);
        }
      });
      this.productHistory(id);
    },
    productHistory(id) {
      this.history.push(id);
      this.history = localStorage.setItem('setHistory', JSON.stringify(this.history));
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
    onChange(e) {
      const { value } = e.target;
      if (value === '價格排序低到高' && this.products.length > 1) {
        this.products.sort((a, b) => a.price - b.price);
      } else if (value === '價格排序高到低' && this.products.length > 1) {
        this.products.sort((b, a) => a.price - b.price);
      } else if (value === '熱銷商品' && this.products.length > 1) {
        this.products.sort((a, b) => a.num - b.num);
      }
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
  watch: {
    cartsNum: {
      handler() {
        this.renderCarts();
      },
      immediate: true,
    },
  },
  mounted() {
    this.getData();
    this.updateFav();
  },
};
</script>
