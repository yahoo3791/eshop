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
  <div class="bg-dark" style="">
    <div class="container text-white">
      <div class="row">
        <div class="col-12 py-3 d-flex align-items-center justify-content-around">
          <img src="@/assets/pic/logo2.png" alt="" style="width:50px">
          <h1>CHECKOUT</h1>
          <i class="bi bi-lock-fill fs-1"></i>
        </div>
        <div class="col-12 text-center">
          <p style="color:red">確認您的訂單資訊，<br>請勿離開頁面，離開將導致訂單取消</p>
        </div>
        <div class="col-12">
          <p>訂單編號:{{details.create_at}} <span v-if="this.details.create_at">----訂單成立成功</span></p>
          <div class="col-12 bg-white text-dark px-2 py-1" style="box-shadow:4px 4px 0px gray">
            <h3 class="text-center"><i class="bi bi-1-circle"></i> 訂購人資料</h3>
            <p>姓名: {{userData.name}}</p>
            <p>電話: {{userData.tel}}</p>
            <p>信箱: {{userData.email}}</p>
            <p>地址: {{userData.address}}</p>
            <p style="font-size:8px;color:orangered">資料填寫錯誤導致配送及抵達延誤,本公司不予負責</p>
          </div>
          <div class="col-12 bg-white text-dark px-2 py-1 my-3" style="box-shadow:4px 4px 0px gray">
            <h3 class="text-center"><i class="bi bi-2-circle"></i> 商品資訊</h3>
            <div class="order-item border-bottom" v-for="item in details.products" :key="item.id">
              <p><img :src="item.product.imageUrl" alt="" style="width:100px"></p>
              <p>書名: {{item.product.title}}</p>
              <p>類別: {{item.product.category}}</p>
              <p>原價: {{item.product.origin_price}}$</p>
              <p>優惠價: {{item.product.price}}$</p>
              <p>數量: {{item.qty}}/{{item.product.unit}}</p>
            </div>
          </div>
          <div class="col-12 bg-white text-dark px-2 py-1 my-3" style="box-shadow:4px 4px 0px gray">
            <h3 class="text-center"><i class="bi bi-3-circle"></i> 付款資訊</h3>
            <div class="" v-for="item in details.products">
              <p v-if="!item.coupon == 0">已使用優惠卷，折扣{{ item.total - item.final_total }}$</p>
            </div>
            <p>付款金額: {{details.total}}$</p>
            <p v-if="details.is_paid === true">已付款完成</p>
            <p v-else-if="details.is_paid === false">尚未付款</p>
          </div>
          <div class="col-12 pt-2 pb-5 text-end">
            <button @click="cancelOrder" class="me-4">取消</button>
            <button @click="payOrder">付款</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      details:{},
      userData:{},
      isLoading:false,
    }
  },
  components:{ Loading },
  methods: {
    payOrder() {
      const orderId = this.$route.params.orderId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${orderId}`;
      this.isLoading = true;
      this.axios.post(api).then((res) => {
        this.isLoading = false;
        if ( res.data.success ) {
          alert('付款完成 轉址頁面 還未製作');
        }
      })
    },
    cancelOrder() {
      alert('取消訂單 轉址頁面 未製作');
    }
  },
  mounted() {
    const orderId = this.$route.params.orderId;
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${orderId}`;
    this.isLoading = true;
    this.axios.get(api).then((res) => {
      this.isLoading = false;
      this.details = res.data.order;
      this.userData = res.data.order.user;
      console.log(this.details);
    })
  }
}
</script>
