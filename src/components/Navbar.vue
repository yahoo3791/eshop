<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top py-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="navbar-logo" src="@/assets/pic/logo.png" alt="">
      </a>
      <a href="" class="d-inline-block d-md-none ms-auto" style="color:gray">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3"
          viewBox="0 0 16 16">
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <w-badge class="mb-4" v-model="cartsNum" bg-color="error" overlap>
        </w-badge>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center py-3 w-75 mx-auto">
          <router-link to="/user/products" class="nav-link py-2">產品</router-link>
          <router-link to="/user/carts" class="nav-link py-2">購物車</router-link>
          <router-link to="/about" class="nav-link active py-2"
             aria-current="page">關於Mgz</router-link>
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
  props: ['cartsNum'],
};
</script>