<template>
  <!-- userProduct product是看更多頁面 使用id -->
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/cart">購物車</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{this.getData.category}}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{this.getData.category}}</h2>
        <div>{{this.getData.content}}</div>
        <div>{{this.getData.description}}</div>
        <img alt="" class="img-fluid mb-3" :src="getData.imageUrl">
      </article>
      <div class="col-4">
        <del class="h6">原價{{this.getData.origin_price}}元</del>
        <div class="h5">現在只要{{this.getData.price}}元</div>
        <hr>
        <button type="button" class="btn btn-outline-danger" @click="addCart(this.getData.id,1)"
          :disabled="this.status.loadingItem === this.getData.id">
          <div v-if="this.status.loadingItem === this.getData.id"
          class="spinner-border spinner-border-sm text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      getData:{},
      addProduct:{},
      status: {
        loadingItem:'',
      }
    }
  },
  methods:{
    addCart(id,qty) {
      this.addProduct.product_id = id;
      this.addProduct.qty = qty;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      this.axios.post(api, {data:this.addProduct}).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
      })
    }
  },
  created() {
    this.id = this.$route.params.productId;
  },
  mounted() {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
    this.axios.get(api).then((res) => {
      this.getData = res.data.product;
    })
  }
}
</script>