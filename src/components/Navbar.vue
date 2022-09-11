<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top py-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="navbar-logo" src="@/assets/pic/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center py-3 w-75 mx-auto">
          <router-link to="/" class="nav-link py-2 ">首頁</router-link>
          <router-link to="/user/products" class="nav-link py-2">商品</router-link>
          <router-link to="/user/carts" class="nav-link py-2">購物車</router-link>
          <router-link to="/login" class="nav-link d-lg-none py-2 border-bottom-0">後台登入</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="/login" class="nav-link d-none d-lg-inline-block">後台登入</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
};
</script>