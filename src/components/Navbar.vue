<template>
  <div class="contanier position-absolute top-0 w-100 bg-transparent"
    style="background-color:transparent; z-index: 20;">
    <div class="header d-flex justify-content-around">
      <div class="logo ">
        <router-link to="/"><h1>Logo</h1></router-link>
      </div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">about</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">cart</router-link>
        </li>
      </ul>
      <div class="login">
        <router-link to="/login">登入</router-link>
      </div>
    </div>
  </div>
</template>
<!-- 製作往下滑動時footer變色+變高度 其他東西也要變小 -->
<script>
export default {
}
</script>