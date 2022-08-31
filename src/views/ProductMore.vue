<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <router-link to="/user/products">
          <i class="bi bi-skip-backward fs-1"></i>
        </router-link>
      </div>
    </div>
    <div class="row pt-5 mt-5">
      <div class="col-4 offset-1">
        <div class="product_content">
          <div class="product_title">
            <h1 class="product_title_h1">{{product.title}}</h1>
          </div>
          <div class="product_description">
            <p>{{product.description}}</p>
          </div>
          <div class="product_price">
            <del>原價{{product.origin_price}}$/{{product.unit}}</del>
            <p class="fs-4" style="color:red">特價{{product.price}}$/{{product.unit}}</p>
          </div>
        </div>
      </div>
      <div class="col-4 offset-2">
        <div class="product_pic position-relative">
          <div class="product_solid position-absolute bg-white"></div>
          <div class="bgTitle">
            <h1 class="bgTitle_h1 position-absolute">TITLE</h1>
          </div>
          <div class="product_content position-absolute bottom-0">
            <p class="product_content_p">{{product.content}}</p>
          </div>
          <img :src="product.imageUrl" class="w-100 h-100" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 d-flex">
        <div class="numInput d-flex">
          <button @click="min()" class="d-block prev text-center">-</button>
          <div class="counter">
            <input v-model="this.num" type="text" class="text-center" style="width:40px">
          </div>
          <button @click="add()" class="next text-center">+</button>
        </div>
        <a href="d-inline-block" class="ms-5 cartIcon"><i class="bi bi-cart-plus fs-3"></i></a>
      </div>
      <div class="col-6 text-end">
        {{ product.category }}類
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        product:{},
        num:1,
      }
    },
    methods: {
      getData() {
        const id = this.$route.params.productId;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
        this.axios.get(api).then((res) => {
          this.product = res.data.product;
          console.log(this.product);
        })
      },
      add() {
        this.num ++
      },
      min() {
        this.num -- 
      },
    },
    created() {
      this.getData();
    },
    mounted() {
    }
  }
</script>
