<template>
  <Navbar />
  <div class="bg-dark"  style="padding-top:100px;">
    <div class="container py-2 py-md-5">
      <div class="row text-white flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6">
          <div class="d-flex justify-content-between align-items-center pb-3 mb-3" style="border-bottom: 1px solid #404040;">
            <h1 class="mb-0 text-center tracking-widest font-bold text-xl">訂購人資訊</h1>
          </div>
          <Form action="" @submit="submit">
            <div class="py-3 position-relative">
              <label ref="formName" class="d-block formData-label
              tracking-wide text-sm" for="name">*聯絡人姓名</label>
              <Field id="name" v-model="this.formData.user.name" name="姓名" rules="required"
              type="text" class="carts-input w-100 p-2 border-0 border-bottom text-white" placeholder="請輸入姓名">
            </Field>
              <br>
              <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="姓名"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <label for="gendor" class="tracking-wide text-sm">性別</label><br>
              <w-radio class="ps-2" color="white" value="male" name="gendor" v-model="gendor">
                <p class="text-white">男</p>
              </w-radio>
              <w-radio class="ps-3" color="white" value="female" name="gendor" v-model="gendor">
                <p class="text-white">女</p>
              </w-radio>
            </div>
            <div class="py-3 position-relative">
              <label ref="formEmail" class="d-block formData-label 
              tracking-widest text-sm" for="email">
              *聯絡人信箱</label>
              <Field id="email" v-model="formData.user.email" name="信箱"
              rules="required|email" type="email" class="carts-input w-100 p-2
              border-0 border-bottom text-white" placeholder="請輸入電子信箱"></Field>
              <br>
              <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="信箱"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <label ref="formPhone" class="d-block formData-label  tracking-widest text-sm"
              for="phone">*聯絡人手機</label>
              <Field id="phone" v-model="formData.user.tel" name="手機" rules="required"
              type="tel" class="carts-input w-100 p-2 border-0 border-bottom text-white"
              placeholder="請輸入手機號碼">
            </Field>
              <br>
              <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="手機"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <label ref="formAddress" class="d-block formData-label 
              tracking-widest text-sm" for="adress">*收件人地址</label>
              <Field id="address" v-model="formData.user.address" name="地址" rules="required"
              type="address" class="carts-input w-100 p-2 border-0 border-bottom text-white"
              placeholder="請輸入完整地址">
            </Field>
              <br>
              <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="地址"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <label ref="formMessage" class="ps-2 d-block formData-label
              tracking-wide text-sm" for="adress">備註<span
                  class="text-sm tracking-wide opacity-75"></span></label>
              <input id="message" v-model="formData.message" name="留言"
              class="carts-input w-100 p-2 border-0 border-bottom text-white" maxlength="100"
              placeholder="留下疑問或需求">
            </div>
            <div class="py-3 position-relative">
              <label for="" class="d-block text-sm">*付款方式</label>
              <select name="payment" id="payment" class="carts-input
              text-white w-100 border-0 border-bottom p-2 text-center text-sm"
              style="text-align-last:center">
                <option value="信用卡" name="payment">信用卡</option>
                <option value="超商取貨付款" name="payment">超商取貨付款</option>
              </select>
            </div>
            <div class="text-end mb-5 mt-3 d-block d-md-none">
              <w-flex class="align-center tracking-wide">
                <w-checkbox class="ms-auto mb-3" color="grey" v-model="selection1">
                  <p class="text-white">我已確認資料無誤</p>
                </w-checkbox>
              </w-flex>
              <w-button type="submit"
              class="text-black px-3 py-md-3 px-md-4 py-lg-3 px-lg-5" lg bg-color="white"
              tile>前往結帳</w-button>
            </div>
          </Form>
        </div>
        <div class="col-12 col-md-5 offset-md-1">
          <h4 class="text-base tracking-wide">商品資訊</h4>
          <div class="payCart-item border-bottom d-flex py-3" v-for="item in cartsData.carts">
            <img :src="item.product.imageUrl" class="d-block" style="max-width: 100px;" alt="cartImage">
            <div class="text-sm d-flex flex-column justify-content-between ps-3">
              <p>{{item.product.title}}</p>
              <p>{{item.product.category}}類</p>
              <p><i class="bi bi-x"></i>{{item.qty}}</p>
              <p>{{item.total}}<i class="bi bi-currency-dollar"></i></p>
            </div>
          </div>
          <div class="text-white text-end tracking-widest font-semibold text-base">
            <div :class="{'d-none': coupon}">總價{{cartsData.total}}<i class="bi bi-currency-dollar"></i></div>
            <div class=""><del :class="{'d-none' : !coupon}"
              style="text-decoration-color: red;">總價{{cartsData.total}}$</del></div>
            <div class="col-12 pt-2 pb-3 text-white text-end tracking-widest font-semibold text-base">
              <p :class="{'d-none' : !coupon }">折扣價:{{Math.round($filters.currency(cartsData.final_total))}}$</p>
            </div>
          </div>
          <div class="input-group mb-5 input-group-sm ms-auto w-100" style="">
            <input type="text" ref="codeValue" v-model="codeValue" class="form-control tracking-widest border-0 rounded-0"
              placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button @click="useCoupon()" class="btn btn-outline-secondary
                tracking-widest rounded-0" type="button" :disabled="coupon">
                套用優惠碼
              </button>
            </div>
          </div>
          <div class="text-end mb-5 d-none d-md-block">
            <w-flex class="align-center tracking-wide">
              <w-checkbox class="ms-auto mb-3" color="grey" v-model="selection1">
                <p class="text-white">我已確認資料無誤</p>
              </w-checkbox>
            </w-flex>
            <w-button type="submit" @click="submit()" class="text-black px-3 py-md-3 px-md-4 py-lg-3 px-lg-5"
            lg bg-color="white" tile>付款
            </w-button>
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
import { Field, Form, ErrorMessage } from 'vee-validate';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  data() {
    return {
      cartsData:{},
      selection1: false,
      formData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      codeValue: '',
      coupon: false,
      gendor: '',
    };
  },
  components: {
    Navbar, Footer, Loading, Field, Form, ErrorMessage,
  },
  methods: {
    submit() {
      // 欄位勾選 ｏｋ
      if (  this.selection1 === false ) {
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
          icon: 'info',
          title: '確認資訊完成後<br>記得勾選確認欄位 <i class="bi bi-emoji-smile-fill"></i>',
        });
        return;
      }
      if ( this.gendor != true ) {
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
          icon: 'info',
          title: '請填寫性別欄位 <i class="bi bi-emoji-smile-fill"></i>',
        });
        return;
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios.post(api, { data: this.formData }).then((res) => {
        console.log(res);
        const { orderId } = res.data;
        if (res.data.success) {
          this.$router.push(`/user/checkout/${orderId}`);
        } else {
          console.log('error');
        }
      });
    },
    getData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        this.cartsData = res.data.data;
      })
    },
    useCoupon() {
      const codeData = {
        code: this.codeValue,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.axios.post(api, { data: codeData }).then((res) => {
        this.getData();
        if (res.data.success) {
          this.coupon = true;
          this.$refs.codeValue.disabled = true;
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
            title: '使用優惠卷成功',
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
            title: '使用優惠卷異常',
          });
        }
      });
    },
  },
  mounted() {
    this.getData();
  }
};
</script>
