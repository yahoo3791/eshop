<template>
  <div :class="{'hideNavbar': scrollNavbar}" class="container-fluid fixed-top bg-dark"
  style="z-index:10000;">
    <div :class="{'hideSubNavbar':scrollNavbar }"
    class="d-block d-md-none navbar-overlay position-absolute start-0 w-100 bg-dark tracking-wider">
        <div :class="{'d-none': togglerOverlay }" class="text-lg navbar-nav
        text-white text-center pt-3 pb-4 w-75 mx-auto tracking-wider">
          <router-link to="/" class="nav-link py-3 animated fadeInDown">首頁HOME</router-link>
          <router-link to="/user/products" class="nav-link py-3 animated fadeInDown">商品PRODUCTS
          </router-link>
          <router-link to="/user/carts"
          class="nav-link py-3 animated fadeInDown">購物車CART</router-link>
          <router-link to="/login"
          class="nav-link d-lg-none py-3 border-bottom-0 animated fadeInDown">
            後台登入LOGIN</router-link>
        </div>
    </div>
    <div class="d-flex align-items-center">
      <a href="#" class="d-block">
        <img class="navbar-logo" src="@/assets/pic/logo.png" alt="">
      </a>
      <div @click="openOverlay" class="d-block d-md-none navbar-sm text-white ms-auto">
        <div class="navbar-icon" style="width:40px;height:40px">
          <span class="d-block" ref="navbarSpan1"></span>
          <span class="d-block" ref="navbarSpan2"></span>
          <span class="d-block" ref="navbarSpan3"></span>
        </div>
      </div>
      <div class="navbar-md d-none d-md-flex ms-auto tracking-wider">
        <router-link to="/" class="nav-link p-2">首頁HOME</router-link>
        <router-link to="/user/products" class="nav-link p-2">商品PRODUCTS
        </router-link>
        <router-link to="/user/carts" class="nav-link p-2">購物車CART</router-link>
        <router-link to="/login" class="nav-link p-2">後台登入LOGIN</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      togglerOverlay: true,
      lastScrollTop: 0,
      scrollNavbar: false,
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
      if (document.body.clientWidth >= 768) {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset
          || document.body.scrollTop;
        if (scrollTop >= this.lastScrollTop) {
          // 讀取下面時
          this.scrollNavbar = true;
        } else {
          // 讀取上面時
          this.scrollNavbar = false;
        }
        this.lastScrollTop = scrollTop;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandling);
  },
};
</script>
