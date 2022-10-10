<template>
  <div :class="{'hideNavbar': scrollNavbar}" class="container-fluid fixed-top bg-dark"
    style="z-index:10000;">
    <div :class="{'hideSubNavbar':scrollNavbar,'top50px':smallNavbar }"
      class="d-block d-md-none navbar-overlay position-absolute
      start-0 w-100 bg-dark tracking-wider">
        <div :class="{'d-none': togglerOverlay }"
        class="text-lg navbar-nav
        text-white text-center pt-3 pb-4 w-75 mx-auto tracking-wider">
          <router-link to="/"
            class="nav-link py-3 animated fadeInDown"
            style="animation-duration: .5s;">首頁HOME
          </router-link>
          <router-link to="/user/products"
            class="nav-link py-3 animated fadeInDown"
            style="animation-duration: 1s;">商品PRODUCTS
          </router-link>
          <router-link to="/user/carts"
            class="nav-link py-3 animated fadeInDown"
            style="animation-duration: 1.5s;">
            <div class="d-inline-block position-relative">購物車CART
              <span :class="{'d-none': cartsNum == 0 }"
                class="d-inline-block navbar-badge navbar-badge-sm animated
                position-absolute">{{cartsNum}}
              </span>
            </div>
          </router-link>
          <router-link to="/user/favorite"
          class="nav-link d-lg-none py-3 animated fadeInDown"
          style="animation-duration: 2s;">
            <div class="d-inline-block position-relative">收藏FAVORITE
              <span :class="{'d-none': favoriteData.length == 0 }"
                class="d-inline-block navbar-badge navbar-badge-sm
                animated position-absolute">{{favoriteData.length}}
              </span>
            </div>
          </router-link>
          <router-link to="/user/checkOrder"
            class="nav-link d-lg-none py-3 animated fadeInDown border-0"
            style="animation-duration: 2.5s;">
            <div class="d-inline-block position-relative">查詢訂單CHECK ORDER</div>
          </router-link>
        </div>
    </div>
    <div class="d-flex align-items-center">
      <a href="#" class="d-block">
        <img class="navbar-logo"
        :class="{ 'smallNavbar' : smallNavbar}"
        src="@/assets/pic/logo.png" alt="Logo">
      </a>
      <div @click="openOverlay"
      @keydown="openOverlay"
        class="d-block d-md-none navbar-sm text-white ms-auto">
        <div class="navbar-icon" style="width:40px;height:40px">
          <span class="d-block" ref="navbarSpan1"></span>
          <span class="d-block" ref="navbarSpan2"></span>
          <span class="d-block" ref="navbarSpan3"></span>
        </div>
      </div>
      <div class="navbar-md d-none d-md-flex ms-auto tracking-wider text-lg">
        <router-link to="/" class="nav-link px-3 py-3">首頁</router-link>
        <router-link to="/user/products" class="nav-link px-3 py-3">商品
        </router-link>
        <router-link to="/user/carts" class="nav-link px-3 py-3 position-relative">
          <i class="bi bi-cart-fill me-1 position-relative" style="font-size:1em">
            <span
              :class="{'d-none': cartsNum == 0 }"
              ref="cartsNum"
              class="d-block position-absolute navbar-badge navbar-badge-md
              animated">{{cartsNum}}
            </span>
          </i>
        </router-link>
        <router-link to="/user/favorite" class="nav-link px-3 py-3 position-relative">
          <i class="bi bi-heart-fill me-1 position-relative" style="font-size:1em">
            <span
              :class="{'d-none': favoriteData.length == 0 }"
              ref="fav"
              class="d-block position-absolute navbar-badge navbar-badge-md
              animated">{{favoriteData.length}}
            </span>
          </i>
        </router-link>
        <router-link to="/user/checkOrder" class="nav-link px-3 py-3 position-relative">
          <i class="bi bi-clipboard-check me-1" style="font-size:1em"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      togglerOverlay: true,
      lastScrollTop: 0,
      scrollNavbar: false,
      cartsNum: 0,
      cartsData: {},
      smallNavbar: false,
      favoriteData: [],
    };
  },
  methods: {
    openOverlay() {
      if (this.togglerOverlay === true) {
        this.togglerOverlay = false;
        this.$refs.navbarSpan1.classList.add('rotate45');
        this.$refs.navbarSpan2.classList.add('rotate-none');
        this.$refs.navbarSpan3.classList.add('rotate-45');
      } else {
        this.togglerOverlay = true;
        this.$refs.navbarSpan1.classList.remove('rotate45');
        this.$refs.navbarSpan2.classList.remove('rotate-none');
        this.$refs.navbarSpan3.classList.remove('rotate-45');
      }
    },
    scrollHandling() {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset
      || document.body.scrollTop;
      if (document.body.clientWidth >= 768) {
        if (scrollTop >= this.lastScrollTop) {
          // 讀取下面時
          this.scrollNavbar = true;
        } else {
          // 讀取上面時
          this.scrollNavbar = false;
        }
        this.lastScrollTop = scrollTop;
      } else if (document.body.clientWidth <= 768) {
        if (scrollTop >= 50) {
          this.smallNavbar = true;
        } else {
          this.smallNavbar = false;
        }
      }
    },
    getCarts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        this.cartsData = res.data.data.carts;
        const { carts } = res.data.data;
        let num = 0;
        carts.forEach((i) => {
          num += i.qty;
        });
        this.cartsNum = num;
      });
    },
    updateFav() {
      this.favoriteData = JSON.parse(localStorage.getItem('fav')) || [];
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandling);
    this.getCarts();
    emitter.on('updateNum', () => {
      this.updateFav();
    });
    emitter.on('updateCartsNum', () => {
      this.getCarts();
    });
    this.updateFav();
  },
};
</script>
