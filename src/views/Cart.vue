<template>
  <loading v-model:active="isLoading" />
  <Navbar />
  <div class="bg-dark w-100 h-100">
    <div class="container text-white" style="padding-top: 100px;position: relative;z-index: 5;">
      <div class="row">
        <div :class="{ 'd-none': orderOpen }" class="col-12 text-center" style="height:calc( 100vh - 365px )">
          <h1 class="">目前購物車是空的
            <br>
            快去逛逛吧！！
          </h1>
          <router-link to="/user/products">
              <w-button class="px-5 py-3 ma1 mt-5 text-black" tile bg-color="white" color="yellow-light2">前往商城
            </w-button>
          </router-link>
        </div>
      </div>
      <div class="row mx-0" :class="{ 'd-none': orderHide }">
        <div class="col-12">
          <h1 class="text-center">購物車
          </h1>
          <div class="row">
            <div class="col-12 text-end">
              <a @click.prevent="deleteCarts" href="" class="text-white">刪除全部</a>
            </div>
            <div v-for="item in cartsData" :key="item.id"
              class="col-12 d-flex justify-content-between align-items-center pb-2 pt-4"
              style="border-bottom:1px solid white">
              <div class="box d-flex align-items-center">
                <img :src="item.product.imageUrl" class="carts-imgSize" alt="">
                <div class="content px-2">
                  <h1 class="fs-6">{{ item.product.title }}</h1>
                  <p class="fs-6" style="color:#ff4343">{{ item.product.price }}$/{{ item.product.unit }}</p>
                </div>
              </div>
              <div class="box text-end d-flex flex-column justify-content-between align-items-end h-75">
                <input :disabled="this.isLoading" ref="updateValue" @change="updateQty(item.id)" class="d-block"
                  type="number" min="1" style="width:50px" :value="item.qty">
                <h2 class="fs-6 mb-0">{{ item.total }}$</h2>
                <a href="" @click.prevent="deleteProduct(item.id)" class="d-block text-decoration-none text-white"
                  style="height:20px"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash3 carts-trashIcon" viewBox="0 0 16 16">
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group my-3 input-group-sm ms-auto w-100" style="max-width:500px;">
            <input type="text" ref="codeValue" v-model="codeValue" class="form-control" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button @click="useCoupon" class="btn btn-outline-secondary" type="button">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 pt-2 pb-3 text-white text-end">
          <p>總計{{ this.orderTotal.total }}$</p>
          <p>折扣價{{ this.orderTotal.final_total }}$</p>
        </div>
        <div class="col-12 text-center">
          <h3>訂購人資訊</h3>
          <Form action="" @submit="submit">
            <div class=" col-12 pb-3 pt-3">
              <label for="name">姓名:</label>
              <Field id="name" v-model="this.formData.user.name" name="姓名" placeholder="請填寫中文姓名" rules="required"
                type="text" class="ms-2 carts-input" style="border: none;">
              </Field>
              <br>
              <ErrorMessage style="color:#ff4343" name="姓名"></ErrorMessage>
            </div>
            <div class="col-12 pb-3">
              <label for="email">信箱:</label>
              <Field id="email" v-model="formData.user.email" name="信箱" placeholder="ex:example@gamil.com"
                rules="required|email" type="email" class="ms-2 carts-input" style="border: none;"></Field>
              <br>
              <ErrorMessage style="color:#ff4343" name="信箱"></ErrorMessage>
            </div>
            <div class="col-12 pb-3">
              <label for="phone">手機:</label>
              <Field id="phone" v-model="formData.user.tel" name="手機" placeholder="ex:0912345678" rules="required"
                type="tel" class="ms-2 carts-input" style="border: none;">
              </Field>
              <br>
              <ErrorMessage style="color:#ff4343" name="手機"></ErrorMessage>
            </div>
            <div class="col-12 pb-3">
              <label for="adress">地址:</label>
              <Field id="adress" v-model="formData.user.address" name="地址" placeholder="輸入完整地址" rules="required"
                type="address" class="ms-2 carts-input" style="border: none;">
              </Field>
              <br>
              <ErrorMessage style="color:#ff4343" name="地址"></ErrorMessage>
            </div>
            <div class="col-12 pb-3 text-center">
              <textarea v-model="formData.message" placeholder="留言您的問題" name="" id="" cols="30" rows="10"
                class="carts-textarea"></textarea>
            </div>
            <div class="col-12 text-end px-3 mb-5">
              <button type="submit" class="text-white btn btn-outline-secondary">前往結帳</button>
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
      cartsData: {},
      isLoading: false,
      orderHide: true,
      orderOpen: false,
      codeValue: '',
      orderTotal: {},
      formData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    }
  },
  components: { Navbar, Footer, Loading, Field, Form, ErrorMessage },
  methods: {
    getData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.orderTotal = res.data.data;
        this.cartsData = res.data.data.carts;
        if (this.cartsData.length === 0) {
          this.orderHide = true;
          this.orderOpen = false;
        } else {
          this.orderHide = false;
          this.orderOpen = true
        }
      })
    },
    deleteProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.axios.delete(api).then((res) => {
        this.isLoading = false;
        this.getData();
      })
    },
    deleteCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.axios.delete(api).then((res) => {
        this.isLoading = false;
        this.getData();
      })
    },
    updateQty(id) {
      const updateData = {
        product_id: id,
        qty: Number(this.$refs.updateValue[0].value),
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.axios.put(api, { data: updateData }).then((res) => {
        console.log(res);
        this.getData();
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
          this.$refs.codeValue.disabled = true;
        }
      })
    },
    submit() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios.post(api, { data: this.formData }).then((res) => {
        let orderId = res.data.orderId;
        this.$router.push(`/user/checkout/${orderId}`);
      })
    },
  },
  mounted() {
    this.getData();
  }
};
</script>
