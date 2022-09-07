<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light position-relative top-0 start-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/pic/logo.png" style="height:50px" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="filter:invert(0);"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-center">
          <a class="nav-link text-dark" aria-current="page" href="#"
            @click.prevent="this.$router.push('/dashboard/backproducts')">產品</a>
          <a class="nav-link text-dark" href="#" @click.prevent="this.$router.push('/dashboard/order')">訂單</a>
          <a class="nav-link text-dark" href="#" @click.prevent="this.$router.push('/dashboard/coupon')">優惠卷</a>
          <a class="nav-link text-dark" href="#" @click.prevent="this.$router.push('/login')">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
}
</script>