<template>
  <!-- usercart  cart是總表 -->
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="item in getData" :key="item.id">
              <td style="width: 200px;align='center'">
                <div style="height: 100px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
              </td>
              <td style="vertical-align: middle;"><a href="#" class="text-dark">{{ item.title }}</a></td>
              <td style="vertical-align: middle;">
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
              </td>
              <td style="vertical-align:middle">
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="addCart(item.id,1)"
                    :disabled="this.status.loadingItem === item.id">
                    <div v-if="this.status.loadingItem === item.id" class="spinner-border spinner-border-sm text-dark"
                      role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in carts.carts">
                <tr>
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCart(item.id)">
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    {{item.product.category}}
                    <div class="text-success" v-if="this.carts.total != this.carts.final_total">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input type="number" class="form-control" min=1 v-model.number="item.qty"
                        @change="updateQty(item)" :disabled=" this.status.loadingItem !== '' ">
                      <div class="input-group-text">/{{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small class="text-success">折扣價：{{ $filters.currency(item.final_total)}}</small>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(this.carts.total) }}</td>
              </tr>
              <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(this.carts.final_total) }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="this.couponCode">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Form action="" v-slot="{ errors,values,validate }" @submit="onSubmit">
          <label for="name">姓名</label>
          <Field type="text" id="name" name="name" rules="required|min:3" v-model="this.orderData.user.name">
          </Field>
          <br>
          <ErrorMessage name="name"></ErrorMessage><br>
          <label for="email">電子信箱</label>
          <Field name="email" type="email" rules="required|email" id="email" v-model="this.orderData.user.email">
          </Field>
          <br>
          <ErrorMessage name="email"></ErrorMessage><br>
          <label for="tel">手機號碼</label>
          <Field type="tel" name="tel" v-model="this.orderData.user.tel" rules="required|min:10"></Field><br>
          <ErrorMessage name="tel"></ErrorMessage><br>
          <label for="addr">地址</label>
          <Field id="addr" name="address" v-model="this.orderData.user.address" rules="required" /> <br>
          <ErrorMessage name="address"></ErrorMessage><br>
          <label for="story">留言</label>
          <textarea name="message" id="story" cols="30" rows="10" v-model="this.orderData.message"
            rules="required">
            </textarea>
          <ErrorMessage name="message"></ErrorMessage><br>
          <button>發送</button>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
export default {
  data() {
    return {
      getData:{},
      status:{
        loadingItem: '',
      },
      carts:{},
      couponCode:'',
      orderData:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:'',
        },
        message:'',
      }
    }
  },
  components:{
    Field, Form, ErrorMessage
  },
  methods:{
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.$router.push(`/user/product/${id}`);
      })
    },
    addCart(id,qty) {
      this.status.loadingItem = id;
      const cartData = {
        product_id : id,
        qty : qty
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.post(api, { data: cartData }).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
        this.getCarts();
      })
    },
    addCouponCode() {
      console.log(this.couponCode);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.axios.post(api, {data:{code:this.couponCode}}).then((res) => {
        // console.log(res);
        this.getCarts();
      })
    },
    getCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.carts = res.data.data;
      })
    },
    deleteCart(id) {
      console.log(id);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.axios.delete(api).then((res) => {
        this.getCarts();
      })
    },
    updateQty(item) {
      const updateData = {
        product_id: item.product_id,
        qty: item.qty,
      }
      this.status.loadingItem = item.id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.axios.put(api, {data:updateData}).then((res) => {
        this.status.loadingItem = '';
        this.getCarts();
      })
    },
    getProductAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        // console.log(res.data.products);
        this.getData = res.data.products;
      });
    },
    onSubmit() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.axios.post(api, {data:this.orderData }).then((res) => {
        console.log(res);
        this.getCarts();
        let id = res.data.orderId;
        this.$router.push(`/user/checkout/${id}`);
        console.log('sub');
      })
    }
  },
  mounted() {
    // 取得商品列表_all
    this.getProductAll();
    // 取得購物車列表
    this.getCarts();
  },
}
</script>