<template>
  <loading :active="isLoading"></loading>
  <Navbar :carts-num="this.cartsNum"></Navbar>
  <div class="bg-dark">
    <div class="container-fluid mt-5 pt-5">
      <div class="row">
        <div class="col-12">
          <ul @click.prevent="productsFilter($event)"
            class="d-flex justify-content-center position-relative p-0 products-fs">
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
            <w-image :src="item.imageUrl" class="w-100 h-100" alt="" />
            <h3 class="product_h3 position-absolute start-0 top-0">
              {{ item.title }}</h3>
            <h3 class="position-absolute bottom-0 end-0 text-end"><del style="color:red;">{{ item.origin_price
            }}$</del><br>
              特價{{ item.price }}$</h3>
          </div>
          <div class="text-end mt-1 col-12 ">
            <a href="#" @click.prevent="addCart(item)"
              class="text-decoration-none py-2 fs-6 w-50 text-center d-inline-block text-white border">
              加入購物車
            </a>
            <a href="#" @click.prevent="more(item.id)"
              class="text-decoration-none py-2 fs-6 w-50 text-center d-inline-block text-white border">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      products: {},
      isLoading: false,
      cartsNum: 0,
      bannerUrl: require('@/assets/pic/productBg.jpg'),
    }
  },
  components: { Navbar, Footer, Loading },
  methods: {
    getData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.products = res.data.products;
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
      this.axios.post(api, { data: data }).then((res) => {
        this.isLoading = false;
      })
      this.axios.get(api).then((res) => {
        const carts = res.data.data.carts;
        if (res.data.success) {
          let num = 0;
          carts.forEach((i) => {
            num += i.qty;
            this.cartsNum = num;
          })
        }
      })
    },
    productsFilter(e) {
      let clickText = e.target.text;
      console.log(clickText);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        let getProducts = res.data.products;
        let data = [];
        console.log(data);
        getProducts.filter(function (item) {
          if (clickText === item.category) {
            data.push(item)
          } else if (clickText === '全部雜誌') {
            data = getProducts;
          } else {
            return;
          }
        })
        if (data.length === 0) {
          return
        }
        this.products = data;
      })
    }
  },
  watch: {
    cartsNum: {
      handler :function() {
        console.log('123');
      },
      immediate: true,
    }
  },
  mounted() {
    this.getData();
    if (!this.cartsNum) {
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
