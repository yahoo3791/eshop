<template>
  <footer class="footer bg-dark text-center text-white position-relative bottom-0 w-100 pb-4">
    <div class="container p-md-5">
      <div class="row">
        <div class="col-12 col-md-6 text-start d-flex flex-column justify-content-between py-2 my-5">
            <div class="row py-md-0">
              <div class="col-6 col-md-12">
                <router-link to="/user/faq" class="footer-active-hover d-inline-block text-decoration-none py-2 px-1 px-md-3 tracking-wide">
                  常見問題FAQ
                </router-link>
              </div>
              <div class="col-6 col-md-12">
                <router-link to="/user/companyContact" class="footer-active-hover d-inline-block text-decoration-none py-2 px-1 px-md-3 tracking-wide">聯絡方式Contact</router-link>
              </div>
              <div class="col-6 col-md-12">
                <a href="https://medium.com/" target="_blank" rel="noreferrer noopenner" class="footer-active-hover d-inline-block text-decoration-none py-2 px-1 px-md-3 tracking-wide">部落格blog</a>
              </div>
              <div class="col-6 col-md-12">
                <router-link to="/login" class="footer-active-hover d-inline-block text-decoration-none py-2 px-1 px-md-3 tracking-wide py-md-4">
                  後台管理<i class="bi bi-person-fill"></i>
                </router-link>
              </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
          <Form @submit="onSubmit" class="position-relative form-outline form-white my-5">
          <label class="footer-color font-medium tracking-widest text-base d-block pb-3" for="subscription">SUBSCRIBE</label>
            <div class="sub d-flex flex-wrap justify-content-center">
              <Field v-model="subMail" type="email" name="信箱" id="subscription" rules="email"
                class="sub-input d-inline-block bg-dark rounded-0 tracking-widest" placeholder="EMAIL" />
              <button type="submit" class="sub-btn d-inline-block text-black tracking-wide">
                <i class="bi bi-envelope footer-envelope"></i></button>
              <ErrorMessage name="信箱" style="color:orangered"></ErrorMessage>
            </div>
          </Form>
          <div class="follow my-5">
            <p class="footer-color font-medium tracking-wide pb-2 text-base">FOLLOW US</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopenner" class="footer-active-hover ins me-lg-2"><i class="bi bi-instagram"></i>
              <p class="ps-2 d-inline-block tracking-wider">Instagram</p>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopenner" class="footer-active-hover meta">
              <i class="bi bi-facebook"></i>  
              <p class="ps-2 d-inline-block tracking-wider">Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright opacity-50 tracking-wider pb-5">
      Copyright © 2022 Mgz. All rights reserved.<br>
      <span class="footer-color copyright-span">(作品練習用途無商業行為)</span>
    </div>
  </footer>
</template>

<script>
import { Field, Form, ErrorMessage, defineRule, } from 'vee-validate';
  export default {
    data() {
      return {
        subMail: '',
      }
    },
  components: { Field, Form, ErrorMessage, defineRule, },
    methods:{
      onSubmit() { },
    }
  }
</script>