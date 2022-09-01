<template>
  <loading :active="isLoading"></loading>
  <Navbar :carts-num="this.cartsNum"></Navbar>
  <div class="banner position-relative">
    <img src="@/assets/pic/productBg.jpg" class="w-100" style="object-fit:cover;height: 50vh;" alt="">
    <div class="position-absolute overflow-hidden"
      style="bottom: 0;width: 100%;height: 70px;background-color: rgb(33, 37, 41);">
      <div class="div2"></div>
    </div>
  </div>
  <div class="bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        </div>
        <div class="col">
          <ul class="d-flex justify-content-center position-relative p-0">
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">全部雜誌</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">時尚</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">藝術</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">旅遊</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">汽車</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container" style="">
      <div class="row gx-0 gx-md-5 text-white">
        <div class="col-12 col-md-6 col-xl-4 px-5 py-5" v-for="item in products">
          <div class="product_item text-white position-relative">
            <img :src="item.imageUrl" class="w-100 h-100" alt="">
            <h3 class="product_h3 position-absolute start-0 top-0">
              {{item.title}}</h3>
            <h3 class="position-absolute bottom-0 end-0 text-end"><del
                style="color:red;">{{item.origin_price}}$</del><br>
              特價{{item.price}}$</h3>
            <a href="#" @click.prevent="addCart(item)"
              class="product_more position-absolute d-inline-block bg-white text-center"><i
                class="bi bi-cart-plus"></i></a>
          </div>
          <div class="text-end mt-1">
            <a href="#" class="text-white" @click.prevent="more(item.id)">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination class="bg-dark" :pagination-obj="this.pagination" @post-page="getData"></Pagination>
  <Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Pagination from '@/components/ProductsPage.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      products: {},
      pagination:{},
      isLoading:false,
      cartsNum:0,
    }
  },
  components: { Navbar, Footer, Pagination,Loading },
  methods:{
    getData(page=1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      })
    },
    more(id) {
      console.log(id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = false;
      this.axios.get(api).then((res) => {
        this.isLoading = true;
        this.$router.push(`/user/product/${id}`);
      })
    },
    addCart(item) {
      const data = {
        product_id: item.id,
        qty: 1,
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.post(api, {data: data}).then((res) => {
        this.isLoading = false;
      })
      this.axios.get(api).then((res) => {
        const carts = res.data.data.carts;
        if ( res.data.success ) {
          let num = 0;
          carts.forEach((i) => {
            num += i.qty;
            this.cartsNum = num;
          })
        }
      })
    },
  },
  mounted() {
    this.getData();
    if( !this.cartsNum ) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        const carts = res.data.data.carts;
        let num = 0;
        carts.forEach((i) => {
          num += i.qty;
          this.cartsNum = num;
        })
      })
    }
  }
};
</script>