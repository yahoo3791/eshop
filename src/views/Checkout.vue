<template>
  <loading v-model:active="isLoading">
    <div class="loadingio-spinner-radio-bjzn3vobwwl">
      <div class="ldio-ng7hhmket9">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <div class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-white py-3 text-center">
          <h1>CHECKOUT</h1>
        </div>
        <div class="timeline col-12 d-flex align-items-center"  style="padding-top:15px">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
            fill="white" class="bi bi-1-circle-fill"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283
                4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
            </svg>
          </div>
          <w-progress class="d-block w-50" model-value="100" color="white"></w-progress>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
            fill="white" class="bi bi-2-circle-fill"
              viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646
                6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313
                1.236 0 .697-.469 1.23-.902 1.705l-2.971
                3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763
                1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758
                0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
            </svg>
          </div>
          <w-progress class="d-block w-50" model-value="100" color="white"></w-progress>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
            fill="white" class="bi bi-3-circle"
              viewBox="0 0 16 16">
              <path
                d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237
                0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348
                1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012
                2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482
                1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277
                2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68
                1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-white">
      <div class="row">
        <div class="col-12 text-center my-5">
          <p class="text-red">確認您的訂單資訊，<br class="d-md-none">請勿離開頁面，離開將導致訂單取消</p>
        </div>
        <div class="col-12 col-md-8 mx-auto">
          <h3 class="text-center">訂購人資料</h3>
          <p>訂單編號:{{details.create_at}} <span v-if="this.details.create_at">----訂單成立成功</span></p>
          <div class="col-12 bg-white text-dark p-2 p-md-5 mb-5 d-flex
          justify-content-center shadow">
            <p class="tracking-wide leading-7">姓名: {{userData.name}}<br>
            電話: {{userData.tel}}<br>
            信箱: {{userData.email}}<br>
            地址: {{userData.address}}<br></p>
          </div>
          <div class="col-12 bg-white text-dark p-md-5 my-3 shadow">
            <h3 class="text-center">商品資訊</h3>
            <div class="order-item border-bottom d-flex flex-column align-items-center
            flex-md-row justify-content-center py-5"
            v-for="item in details.products" :key="item.id">
              <p><img :src="item.product.imageUrl"
                alt="product-image" class="w-100" style="max-width:200px"></p>
              <p class="tracking-wide leading-7 ps-1 ps-lg-5">書名: {{item.product.title}}<br>
              類別: {{item.product.category}}<br>
              原價: {{item.product.origin_price}}$<br>
              優惠價: {{item.product.price}}$<br>
              數量: {{item.qty}}/{{item.product.unit}}</p>
            </div>
          </div>
          <div class="col-12 bg-white text-dark px-2 py-1 my-5 shadow">
            <h3 class="text-center">付款資訊</h3>
            <div class="" v-for="item,k in details.products" :key="item.k">
              <p v-if="!item.coupon == 0">已使用優惠卷，折扣{{ item.total - item.final_total }}$</p>
            </div>
            <p>付款金額: {{details.total}}$</p>
            <p v-if="details.is_paid === true">已付款完成</p>
            <p v-else-if="details.is_paid === false">尚未付款</p>
          </div>
          <div class="col-12">
            <w-flex class="align-center tracking-wide">
              <w-checkbox class="ms-auto" color="grey" v-model="section">
                <p class="text-white">我已閱讀並明瞭<a href="#" class="text-white">「網站使用條款」</a>、<a href="#" class="text-white">「隱私權政策」</a>、<a href="#" class="text-white">「免責聲明」</a>同意接受該等條款規定，並願遵守網站規範。</p>
              </w-checkbox>
            </w-flex>
          </div>
          <div class="col-12 pt-2 pb-5 text-end my-5">
              <w-button @click="cancelOrder" class="me-4 text-black px-3 py-md-3
              px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>取消</w-button>
              <w-button v-if="this.section === true" @click="payOrder" class="text-black px-3 py-md-3 px-md-4
              py-lg-4 px-lg-5" lg bg-color="white" tile>付款</w-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  data() {
    return {
      details: {},
      userData: {},
      isLoading: false,
      section: false,
    };
  },
  components: { Loading },
  methods: {
    payOrder() {
      const { orderId } = this.$route.params;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${orderId}`;
      this.isLoading = true;
      this.axios.post(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '付款成功，五秒後返回首頁',
            showConfirmButton: false,
            timer: 5000,
          });
          setTimeout(() => {
            this.$router.push('/');
          }, 5000);
        } else {
          Swal.fire({
            icon: 'error',
            title: '付款失敗',
            text: '請聯絡我們客服人員',
            footer: '辦公室地址:台北市信義區市府路101號,客服電話:(02)1010101,客服時間:週一至週五上午07:00~下午17:00,Email:MgzOfficer010@gmail.com',
          });
        }
      });
    },
    cancelOrder() {
      Swal.fire({
        title: '是否要取消訂單',
        text: '確認後無法恢復',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確認',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '取消成功，五秒後返回首頁',
            showConfirmButton: false,
            timer: 5000,
          });
          setTimeout(() => {
            this.$router.push('/');
          }, 5000);
        }
      });
    },
  },
  mounted() {
    const { orderId } = this.$route.params;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${orderId}`;
    this.isLoading = true;
    this.axios.get(api).then((res) => {
      this.isLoading = false;
      this.details = res.data.order;
      this.userData = res.data.order.user;
    });
  },
};
</script>
