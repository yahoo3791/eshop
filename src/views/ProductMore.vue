<template>
<loading v-model:active="isLoading">
  <div class="loadingio-spinner-interwind-il303leqtya">
    <div class="ldio-k17d8xi3rys">
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</loading>
<div class="bg-dark pt-5">
  <Navbar />
  <!-- 麵包削 -->
  <div class="container pt-5">
    <div class="row pb-5">
      <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb py-2 px-1 p-md-2 breadcrumb-style tracking-normal">
              <li class="breadcrumb-item">
                <a class="text-black text-decoration-none" href="#">首頁</a></li>
              <li class="breadcrumb-item breadcrumb-item-none">商品列表</li>
              <li class="breadcrumb-item breadcrumb-item-none"
                aria-current="page">
                {{ product.category }}類
              </li>
              <li class="breadcrumb-item breadcrumb-item-none">內容</li>
              <li class="ms-auto">
              <router-link to="/user/products"
              class="breadcrumb-item-back text-black text-decoration-none"
              data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="前往商品頁">返回</router-link>
              </li>
            </ol>
          </nav>
      </div>
    </div>
  </div>
  <!-- END -->
  <!-- content -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <div class="productmore-pic position-relative cursor-pointer overflow-hidden"
        @click="showSingle"
        @keypress="showSingle">
          <img :src="product.imageUrl" class="w-100 h-100" alt="productImage">
          <div
            class="productmore-search position-absolute bottom-0 end-0 p-2 text-white opacity-75">
            <p class="d-inline-block pe-1 tracking-wide">點擊看更大圖片</p>
            <i class="bi bi-zoom-in fs-3"></i>
          </div>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="product.imageUrl"
          :index="indexRef"
          @hide="onHide">
        </vue-easy-lightbox>
      </div>
      <div class="col-12 col-md-5 d-flex flex-column justify-content-between">
        <div class="">
          <div class="">
            <h1 class="text-2xl font-bold
            tracking-wider my-4 mb-md-4 mt-md-0 text-white text-center">{{product.title}}</h1>
          </div>
          <div class="text-indent2rem">
            <p class="leading-8 tracking-normal text-white">{{product.description}}</p>
            【葷】製作過程中有加酒
            兩種不同比例的巧克力，讓蛋糕體呈現綿密濕潤多層次的巧克力風味，香氣十足也不會感到甜膩，<br>
            一口一口的咀嚼還能咬到真材實料的蔓越莓及香橙果肉，這濃郁巧克力香中又帶點果香酸甜，令人回味無窮！
            ｜特選食材｜Ingredients
            Valrhona100%無糖可可粉
            70%比利時苦甜巧克力
            新鮮牧場蛋
            糖漬橙皮及乾燥糖漬香橙片
            蔓越莓乾
            ｜產品規格｜Spec.
            20x5x6cm/320g± 5g 內容物
            24x11.5x8cm 精裝禮盒及提袋
          </div>
        </div>
        <div class="productmore-item py-5">
          <del class="text-white">原價{{product.origin_price}}$/{{product.unit}}</del>
          <div class="d-flex justify-content-between align-items-center">
            <div class="productmore-price d-inline-block">
              <p class="font-semibold text-2xl text-red">特價{{product.price}}$/{{product.unit}}</p>
            </div>
            <div class="numInput-item d-flex justify-content-end align-items-center">
              <div
              @click.prevent="min()"
              @keypress="min()"
              class="cursor-pointer numInput-prev text-center">-</div>
              <div class="counter border">
                <label for="num" class="d-block h-100">
                  <input id="num" name="num" v-model="this.num" type="text" min="1"
                  class="d-block rounded-0 bg-dark border-0 text-center text-white h-100">
                </label>
              </div>
              <div
              @click.prevent="add()"
              @keydown="add()"
              class="cursor-pointer numInput-next text-center">+</div>
            </div>
          </div>
          <div class="d-flex align-items-center my-5">
            <w-button
              @click.prevent="addCart(product.id, $event)"
              class="offset-btn border border-2 text-white px-3
              py-4 py-md-3 px-md-4 px-lg-5 w-100" lg
              bg-color="transparent" tile>
              <div class="d-none spinner-border spinner-border-sm mx-3 tracking-wide font-medium"
                role="status">
              </div>加入購物車
            </w-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
  <div class="container">
    <div class="row">
      <div class="col">
        ｜運送｜Shipping
        採用黑貓低溫配送，
        週日不做配送配送時間可選擇上午（9:00-13:00)，下午（14:00-18:00)
        ｜最佳賞味期限｜Best Before
        可冷藏保存1週，冷凍保存2週。請見商品標示日期。
        建議放入冷藏前請將蛋糕用保鮮盒密封好，再存放食用前於室溫回溫20-30分鐘風味更佳！開封後請儘速食用完畢。
        ｜訂購注意事項｜Notice
        法絨商品因全程手工新鮮製作，訂單成立後，製作需4-7個工作天，黑貓宅配也需1-2天配送至您指定的地點。故共需5-9天。
        如有大量訂購的需求，訂單成立後，製作需10-15個工作天，黑貓宅配也需1-2天配送至您指定的地點。故共需11-17天。提醒您要提前預留到貨時間。
        年節禮盒因有預購商品，出貨日期會在訂購頁面另行通知。
        若訂單爆量時，我們會另行公告並電話或E-mail通知。
        蛋糕宅配有一定風險，車體運送途中可能造成蛋糕左右位移3~5cm。蛋糕位移、側邊損傷或裝飾掉落、微損，均不在毀壞補償範圍內，風險須自行承擔。
        糕點皆無添加防腐劑，建議天氣炎熱請放置室內涼爽空間或冷藏保存，因無法確認保存情況，商品收到後5天將不接受因糕點變異而退貨。
        無法回收再販售的生鮮商品，不適用消保法7日無條件退貨（行政院消保處2016.12.31公布）
        急單請直接來電洽詢門市人員 07-5527727 ，他們將會與您確認出貨相關事宜。
        餅乾：常溫密封約可保存2週，冷凍密封約可保存2-3個月，回溫即可食用。<br> 🍮 布丁、奶酪：放置冷藏約可保存5天。 <br>
        💡 慕斯：密封冷藏約可保存2-3天，密封冷凍約可保存7-10天，回溫即可食用
      </div>
    </div>
  </div>
  <!-- swiper -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 py-5 text-white">
        <h4 class="pb-2 tracking-wide font-medium text-xl"
        style="border-bottom:1px solid #404040">瀏覽紀錄</h4>
        <div class="swiper-container">
          <swiper
            ref="{swiperRef}"
            :slidesPerView="2"
            :centeredSlides="true"
            :spaceBetween="30"
            :navigation="true"
            :modules="modules"
            class="mySwiper">
            <swiper-slide
            v-for="item,index in productHistory"
            :key="index"
            class="flex-column">
              <div class="mx-auto product-content-container cursor-pointer"
              @click.stop="more(item.id, index)"
              @keydown="more(item.id, index)"
              style="max-width:250px">
                <img :src="item.imageUrl" alt="">
                <h5
                  class="product-content-h5 text-base font-medium tracking-wide py-2">
                  {{ item.title }}
                </h5>
                <p class="product-p">${{ item.price }}</p>
                <div
                :class="{'opacity-75': this.isLoading === true }"
                :disabled="this.isLoading ===true"
                class="d-block mt-2 p-1 text-center
                  tracking-wide font-medium bg-white text-decoration-none text-black"
                  @click.stop="addCart(item.id, $event)"
                  @keydown="addCart(item.id, $event)">
                  <div class="d-none spinner-border spinner-border-sm" role="status">
                  </div>加入購物車
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
</div>
<Footer/>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import '../assets/scss/swiper/productMoreSwiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Pagination, Navigation,
} from 'swiper';
import emitter from '@/methods/emitter';
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref } from 'vue';

export default {
  data() {
    return {
      productAll: {},
      product: {},
      num: 1,
      isLoading: false,
      productHistory: [],
    };
  },
  components: {
    Loading, Navbar, Footer, Swiper, SwiperSlide, VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);
    const onShow = () => {
      visibleRef.value = true;
    };
    const showSingle = () => {
      onShow();
    };
    const onHide = () => {
      visibleRef.value = false;
    };
    return {
      modules: [Pagination, Navigation],
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      onHide,
    };
  },
  methods: {
    getData() {
      const id = this.$route.params.productId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.product = res.data.product;
      });
    },
    addCart(id, e) {
      e.target.children[0].classList.remove('d-none');
      if (this.num <= 0 || this.num >= 50) {
        e.target.children[0].classList.add('d-none');
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
          icon: 'warning',
          title: '請輸入正確數字:等於1小於51',
        });
        this.num = 1;
      }
      const cartData = {
        product_id: id,
        qty: Number(this.num),
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.axios.post(api, { data: cartData }).then((res) => {
        this.isLoading = false;
        e.target.children[0].classList.add('d-none');
        if (res.data.success) {
          emitter.emit('updateNum');
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
            title: '成功加入購物車',
          });
          this.num = 1;
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
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
            title: '加入購物車失敗',
          });
        }
      });
    },
    add() {
      this.num += 1;
      if (this.num >= 50) {
        this.num = 50;
      }
    },
    min() {
      this.num -= 1;
      if (this.num <= 0) {
        this.num = 1;
      }
    },
    getDataAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.axios.get(api).then((res) => {
        this.productAll = res.data.products;
        if (res.data.success) {
          this.updateHistory();
        }
      });
    },
    updateHistory() {
      const data = JSON.parse(localStorage.getItem('setHistory')) || [];
      this.productAll.forEach((history) => {
        data.forEach((i) => {
          if (history.id === i) {
            this.productHistory.push(history);
          }
        });
      });
    },
    more(id) {
      this.$router.replace(`/user/product/${id}`);
    },
  },
  mounted() {
    this.getData();
    this.getDataAll();
    setInterval(() => {
      localStorage.removeItem('setHistory');
    }, 3600000);
  },
};
</script>
