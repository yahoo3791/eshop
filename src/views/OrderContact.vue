<template>
  <Navbar />
  <div class="bg-dark">
    <div class="container position-relative" style="padding-top:100px;z-index: 1;">
      <div class="row">
        <div class="timeline col-12 d-flex align-items-center">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-1-circle-fill"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
            </svg>
          </div>
          <w-progress class="d-block w-50" model-value="100" color="white"></w-progress>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
            </svg>
          </div>
          <w-progress class="d-block w-50" color="white"></w-progress>
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-3-circle"
              viewBox="0 0 16 16">
              <path
                d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row text-white">
        <div class="col-12 col-md-10 col-lg-6 mx-auto">
          <h3 class="text-center pb-5">訂購人資訊</h3>
          <Form action="" @submit="submit" class="text-center">
            <div class="py-3 position-relative">
              <Field id="name" v-model="this.formData.user.name" name="姓名" rules="required"
              type="text" class="carts-input w-100 p-2">
            </Field>
            <label ref="formName" class="d-block formData-label position-absolute tracking-widest" for="name">*聯絡姓名:<span class="text-sm tracking-wide opacity-75">請輸入中文名字</span></label>
              <br>
              <ErrorMessage style="color:#ff4343" name="姓名"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <Field id="email" v-model="formData.user.email" name="信箱"
              rules="required|email" type="email" class="carts-input w-100 p-2"></Field>
              <label ref="formEmail" class="d-block formData-label position-absolute tracking-widest" for="email">*聯絡信箱:<span class="text-sm tracking-wide opacity-75">ex:example@gamil.com</span></label>
              <br>
              <ErrorMessage style="color:#ff4343" name="信箱"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <Field id="phone" v-model="formData.user.tel" name="手機" rules="required"
              type="tel" class="carts-input w-100 p-2">
            </Field>
            <label ref="formPhone" class="d-block formData-label position-absolute tracking-widest" for="phone">*聯絡手機:<span class="text-sm tracking-wide opacity-75">ex:0912345678</span></label>
              <br>
              <ErrorMessage style="color:#ff4343" name="手機"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <Field id="address" v-model="formData.user.address" name="地址" rules="required"
              type="address" class="carts-input w-100 p-2">
            </Field>
            <label ref="formAddress" class="d-block formData-label position-absolute tracking-widest" for="adress">*收件地址:<span class="text-sm tracking-wide opacity-75">輸入完整地址</span></label>
              <br>
              <ErrorMessage style="color:#ff4343" name="地址"></ErrorMessage>
            </div>
            <div class="py-3 position-relative">
              <input  id="message" v-model="formData.message" name="留言" class="carts-input w-100 p-2" maxlength="100">
              <label ref="formMessage" class="d-block formData-label position-absolute tracking-wide" for="adress">留言<span
                  class="text-sm tracking-wide opacity-75"></span></label>
            </div>
            <div class="text-end px-3 mb-5">
              <w-flex class="align-center tracking-wide">
                <w-checkbox class="ms-auto mb-3" color="grey" v-model="selection1">
                  <p class="text-white">我已確認訂購人資訊</p>
                </w-checkbox>
              </w-flex>
              <w-button v-if="selection1 === true" type="submit" class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>前往結帳</w-button>
            </div>
          </Form>
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

export default {
  data() {
    return {
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
    };
  },
  watch: {
    'formData.user.name': function () {
      if (this.formData.user.name != '') {
        this.$refs.formName.style.top = '-10px';
        this.$refs.formName.style.color = 'white';
      } else {
        this.$refs.formName.removeAttribute('style');
      }
    },
    'formData.user.email': function () {
      if (this.formData.user.email != '') {
        this.$refs.formEmail.style.top = '-10px';
        this.$refs.formEmail.style.color = 'white';
      } else {
        this.$refs.formEmail.removeAttribute('style');
      }
    },
    'formData.user.tel': function () {
      if (this.formData.user.tel != '') {
        this.$refs.formPhone.style.top = '-10px';
        this.$refs.formPhone.style.color = 'white';
      } else {
        this.$refs.formPhone.removeAttribute('style');
      }
    },
    'formData.user.address': function () {
      if (this.formData.user.address != '') {
        this.$refs.formAddress.style.top = '-10px';
        this.$refs.formAddress.style.color = 'white';
      } else {
        this.$refs.formAddress.removeAttribute('style');
      }
    },
    'formData.message': function () {
      if (this.formData.message != '') {
        this.$refs.formMessage.style.top = '-10px';
        this.$refs.formMessage.style.color = 'white';
      } else {
        this.$refs.formMessage.removeAttribute('style');
      }
    },
  },
  components: {
    Navbar, Footer, Loading, Field, Form, ErrorMessage,
  },
  methods: {
    submit() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios.post(api, { data: this.formData }).then((res) => {
        const { orderId } = res.data;
        this.$router.push(`/user/checkout/${orderId}`);
      });
    },
  },
};
</script>
