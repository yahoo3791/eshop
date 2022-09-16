<template>
<loading v-model:active="isLoading" />
<div class="bg-dark">
  <div class="container text-white pt-3">
    <div class="row">
      <div class="col-12" >
          <nav aria-label="breadcrumb" class="fixed-top m-2 m-md-4" style="top:5px;">
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
    <div class="row pt-md-5 mt-5 d-flex flex-column-reverse flex-md-row align-items-center">
      <div class="col-12 col-md-4 offset-md-1">
        <div class="product_content">
          <div class="product_title">
            <h1 class="product_title_h1 text-2xl font-bold
            tracking-wider mb-4">{{product.title}}</h1>
          </div>
          <div class="product_description">
            <p class="leading-8 tracking-normal product-description">{{product.description}}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 offset-md-2">
        <div class="product_pic position-relative my-3">
          <img :src="product.imageUrl" class="w-100 h-100" alt="productImage">
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-12 col-md-6 offset-md-1">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" style="border-radius:0">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="tracking-wide accordion-button"
              type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                書本內容
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body leading-7">
                {{product.content}}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="tracking-wide accordion-button collapsed"
              type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                購物說明
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body leading-7">
                <p>退換貨說明<br>
                  請注意！請務必詳閱商品說明並再次確認確有購買該項商品之需求及意願時始下單購買，有任何疑問並請先聯繫客服詢問：<br>
                  辦理退換貨時，商品必須是完整包裝(請注意保持商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性，切勿缺漏任何配件或損毀原廠外盒)</p>
                <!-- 原文自博客來 -->
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="tracking-wide accordion-button collapsed rounded-0"
              type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                專人服務
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse rounded-0"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body leading-7">
                辦公室地址:台北市信義區市府路101號<br>
                客服電話:(02)1010101<br>
                客服時間:週一至週五,上午07:00~下午17:00<br>
                Email:MgzOfficer010@gmail.com<br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="row pb-5">
        <div class="col-12 text-end mb-5">
          <div class="product_price">
            <del>原價{{product.origin_price}}$/{{product.unit}}</del>
            <p class="font-semibold text-2xl text-red">特價{{product.price}}$/{{product.unit}}</p>
          </div>
        </div>
        <div class="col-6 d-flex">
          <div class="numInput d-flex align-items-center">
            <a @click.prevent="min()"
              class="cursor-pointer d-block prev text-center text-decoration-none">-</a>
            <div class="counter">
              <input v-model="this.num" type="text" min="1"
              class="rounded-0 bg-dark text-center text-white h-100">
            </div>
            <a @click.prevent="add()"
            class="cursor-pointer next text-center text-decoration-none">+</a>
          </div>
        </div>
        <div class="col-6 text-end">
          <w-button @click.prevent="addCart(product.id)"
          class="text-black px-3 py-md-3 px-md-4  px-lg-5 w-100" lg
            bg-color="white" tile style="max-width:300px">加入購物車</w-button>
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

export default {
  data() {
    return {
      product: {},
      num: 1,
      isLoading: false,
    };
  },
  components: { Loading, Navbar, Footer },
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
