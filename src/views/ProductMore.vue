<template>
<loading v-model:active="isLoading" />
  <div class="container">
    <div class="row">
      <div class="col-6">
        <router-link to="/user/products" class="text-black">
          返回
        </router-link>
      </div>
      <div class="col-6 text-end">
        <p>{{ product.category }}類</p>
      </div>
    </div>
    <div class="row pt-md-5 mt-5 d-flex flex-column-reverse flex-md-row">
      <div class="col-12 col-md-4 offset-md-1">
        <div class="product_content">
          <div class="product_title">
            <h1 class="product_title_h1">{{product.title}}</h1>
          </div>
          <div class="product_description">
            <p>{{product.description}}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 offset-md-2">
        <div class="product_pic position-relative">
          <img :src="product.imageUrl" class="w-100 h-100" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-end">
        <div class="product_price">
          <del>原價{{product.origin_price}}$/{{product.unit}}</del>
          <p class="fs-4" style="color:red">特價{{product.price}}$/{{product.unit}}</p>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <div class="numInput d-flex">
          <a @click.prevent="min()" class="d-block prev text-center text-decoration-none text-black">-</a>
          <div class="counter">
            <input v-model="this.num" type="text" class="text-center" style="width:40px">
          </div>
          <a @click.prevent="add()" class="next text-center text-decoration-none text-black">+</a>
        </div>
      </div>
      <div class="col-12 text-end mt-2">
        <a @click.prevent="addCart(product.id)" href="#" class="cartIcon text-black text-decoration-none py-2 px-1" style="border:1px solid black">加入購物車<i class="bi bi-cart-plus fs-2"></i></a>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-12">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                書本內容
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <!-- content -->
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                購物說明
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <p>退換貨說明<br>
                  請注意！下列商品購買後博客來不提供10天的猶豫期，請務必詳閱商品說明並再次確認確有購買該項商品之需求及意願時始下單購買，有任何疑問並請先聯繫博客來客服詢問：<br>
                  1.易於腐敗、保存期限較短或解約時即將逾期。<br>
                  2.客製化之商品。<br>
                  3.報紙、期刊或雜誌。<br>
                  4.經消費者拆封之影音商品或電腦軟體。<br>
                  5.下載版軟體、資訊及電子書。<br>
                  6.涉及個人衛生，並經消費者拆封之商品，如：內衣褲、刮鬍刀…等。<br>
                  7.藝文展覽票券、藝文表演票券。<br>
                  非屬上列品項之商品均享有到貨十天的猶豫期﹝含例假日﹞。退回之商品必須於猶豫期內寄回。
                  辦理退換貨時，商品必須是全新狀態與完整包裝(請注意保持商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性，切勿缺漏任何配件或損毀原廠外盒)。退回商品無法回復原狀者，恐將影響退貨權益或需負擔部分費用。
                  訂購本商品前請務必詳閱商品退換貨原則。</p>
                <!-- 原文自博客來 -->
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                專人服務
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                辦公室地址:台北市信義區市府路101號<br>
                客服電話:(02)1010101<br>
                客服時間:週一至週五,上午07:00~下午17:00<br>
                Email:MgzOfficer010@gmail.com<br>
              </div>
            </div>
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
        product:{},
        num:1,
        isLoading:false,
      }
    },
    components:{ Loading },
    methods: {
      getData() {
        const id = this.$route.params.productId;
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
        this.isLoading = true;
        this.axios.get(api).then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
        })
      },
      addCart(id) {
        const cartData = {
          product_id: id,
          qty : this.num,
        }
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        this.isLoading = true;
        this.axios.post(api, {data: cartData}).then((res) => {
          this.isLoading = false;
          console.log(res);
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
