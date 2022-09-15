<template>
  <loading v-model:active="isLoading" />
  <Navbar />
  <div class="bg-dark w-100 h-100 pb-5 overflow-hidden position-relative" style="z-index:1">
    <div class="container" style="padding-top:100px">
      <div class="row">
        <!-- TIMELINE -->
        <div class="timeline col-12 d-flex align-items-center" :class="{ 'd-none': !orderOpen }">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="d-block bi bi-1-circle-fill"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
          </svg>
          <w-progress class="d-block w-50" color="white"></w-progress>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="d-block bi bi-2-circle"
            viewBox="0 0 16 16">
            <path
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
          </svg>
          <w-progress class="d-block w-50" model-value="100" color="grey"></w-progress>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="d-block bi bi-3-circle"
            viewBox="0 0 16 16">
            <path
              d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
          </svg>
        </div>
        <!--  -->
      </div>
    </div>
    <div class="container text-white position-relative" style="padding-top: 100px;z-index: 5;">
      <div class="row">
        <div class="col-12 text-center" :class="{ 'd-none': orderOpen }" style="height:calc( 100vh - 365px )">
          <h1 class="">目前購物車是空的<br>快去逛逛吧！！</h1>
          <router-link to="/user/products" class="text-decoration-none">
            <w-button class="mt-5 text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile>前往商城</w-button>
          </router-link>
        </div>
      </div>
      <div class="row mx-0" :class="{ 'd-none': orderHide }">
        <div class="col-12">
          <h1 class="text-center tracking-widest font-bold text-3xl">購物車</h1>
          <div class="tracking-wide">
            <w-button class="deleteAllCarts text-black px-3 py-md-2 px-md-3 py-lg-3 px-lg-4" lg bg-color="white" tile @click.prevent="deleteCarts">刪除全部
            </w-button>
          </div>
          <div class="">
            <div class="col-12 py-3 my-5" v-for="item,key in cartsData" :key="item.id" style="border-bottom:1px solid #404040">
              <div class="d-flex justify-content-between pb-2 tracking-wide">
                <w-button class="text-black px-3 py-md-2 px-md-3 py-lg-3 px-lg-4" lg bg-color="white" tile @click="open(item,key)">
                  編輯
                </w-button>
                <p>{{item.product.category}}類</p>
              </div>
              <div class="position-absolute text-white py-3 py-md-5" ref="left" style="transform: translateX(-500px);">
                <input :disabled="this.isLoading" ref="updateValue" @change="updateQty(item.id,key)" class="d-block mb-1 mb-md-3" type="number"
                  min="1" style="width:50px" :value="item.qty">
                <a href="" @click.prevent="deleteProduct(item.id)" class="d-block text-decoration-none text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash3 carts-trashIcon" viewBox="0 0 16 16">
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                </a>
              </div>
              <div class="d-flex" ref="right" style="transform:translateX(0px);transition: all .3s;">
                <div class="pic d-inline-block">
                  <img :src="item.product.imageUrl" class="carts-imgSize" alt="">
                </div>
                <div class="d-inline-block ms-3 w-100">
                  <p class="tracking-wide font-semibold text-lg">{{ item.product.title }}</p>
                  <p class="leading-7 tracking-wider">{{ item.product.price }}$/{{ item.product.unit }}</p>
                  <div class="price d-flex justify-content-between">
                    <p class="leading-7 d-block tracking-wider">數量/{{item.qty}}</p>
                    <p class="d-block tracking-wider">{{ item.total }}$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="input-group my-3 input-group-sm ms-auto w-100" style="max-width:500px;">
            <input type="text" ref="codeValue" v-model="codeValue" class="form-control tracking-widest rounded-0" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button @click="useCoupon" class="btn btn-outline-secondary tracking-widest rounded-0" type="button">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 pt-2 pb-3 text-white text-end tracking-widest font-semibold text-base">
          <p>總計{{ this.orderTotal.total }}$</p>
          <p>折扣價{{ this.orderTotal.final_total }}$</p>
        </div>
        <div class="col-12 mb-3">
          <w-flex class="align-center tracking-wide">
            <w-checkbox class="ms-auto" color="grey" v-model="selection1"><p class="text-white">我已確認商品資訊</p></w-checkbox>
          </w-flex>
        </div>
        <div v-if="selection1 === true " class="col-12 text-end">
          <w-button class="text-black px-3 py-md-3 px-md-4 py-lg-4 px-lg-5" lg bg-color="white" tile @click="contactMethod">下一步</w-button>
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
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  data() {
    return {
      cartsData: {},
      isLoading: false,
      orderHide: true,
      orderOpen: false,
      codeValue: '',
      orderTotal: {},
      openDoor: false,
      selection1: false,
    };
  },
  components: { Navbar, Footer, Loading },
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
          this.orderOpen = true;
        }
      });
    },
    deleteProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.axios.delete(api).then((res) => {
        this.isLoading = false;
        this.getData();
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
            title: '刪除品項成功',
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
            title: '更新異常',
          });
        }
      });
    },
    deleteCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.axios.delete(api).then((res) => {
        this.isLoading = false;
        this.getData();
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
            title: '刪除成功',
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
            title: '更新異常',
          });
        }
      });
    },
    updateQty(id, k) {
      let num = Number(this.$refs.updateValue[k].value);
      if (num <= 0 || num >= 50) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'warning',
          title: '請輸入正確數字:等於1小於51'
        })
        this.$refs.updateValue[k].value = 1;
        return;
      }
      const updateData = {
        product_id: id,
        qty: num,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.axios.put(api, { data: updateData }).then((res) => {
        this.isLoading = false;
        this.getData();
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
            title: '更新品項成功',
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
            title: '更新異常',
          });
        }
      });
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
    contactMethod() {
      this.$router.push('/user/contact');
    },
    open(i, k) {
      if (this.openDoor === true) {
        this.$refs.right[k].style.transform = 'translateX(0px)';
        this.$refs.left[k].style.transform = 'translateX(-500px)';
        this.openDoor = false;
      } else if (this.openDoor === false) {
        this.$refs.right[k].style.transform = 'translateX(100px)';
        this.$refs.left[k].style.transform = 'translateX(0px)';
        this.openDoor = true;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
