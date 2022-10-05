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
  <div class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-12 text-white py-3 text-center">
          <h1>付款成功以下是您的訂單資訊</h1>
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
