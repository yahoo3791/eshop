<template>
  <Navbar />
  <div class="banner position-relative">
    <img src="@/assets/pic/pexels-daria-shevtsova-737108.jpg" class="w-100" style="object-fit:cover;height: 100vh;"
      alt="">
    <div class="position-absolute overflow-hidden" style="bottom:-65px; width: 100%; height: 250px;
      background-color: #212529; transform: skewY(-2deg);">
      <div class="div2"></div>
    </div>
  </div>
  <div class="bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
        </div>
        <div class="col">
          <ul class="d-flex justify-content-center position-relative">
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">全部雜誌</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">時尚</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">藝術</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">旅遊</a></li>
            <li class="px-1 px-md-3"><a class="text-white text-decoration-none" href="">汽車</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container" style="">
      產品分類的navbar
      商品的item > 點擊後進入更詳細商品說明
      footer
      找地方放購物車icon

      <div class="row gx-0 gx-md-5 text-white" style="padding-top:100px;padding-bottom:100px">
        <div class="col-12 col-md-6 col-xl-4 px-5 py-5">
          <div class="product_item text-white position-relative">
            <img src="@/assets/pic/pic01.jpg" class="w-100 h-100" alt="">
            <h3 class="product_h3 position-absolute start-0 top-0">
              時尚雜誌</h3>
            <h3 class="position-absolute bottom-0 end-0"><del style="color:red;">1000$</del><br>new price</h3>
            <a href="#" class="product_more position-absolute d-inline-block bg-white text-center"><i
                class="bi bi-cart-plus"></i></a>
          </div>
          <div class="text-end">
            <a href="#" class="text-white">查看更多</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 px-5 py-5">
          <div class="product_item text-white position-relative">
            <img src="@/assets/pic/pic01.jpg" class="w-100 h-100" alt="">
            <h3 class="product_h3 position-absolute start-0 top-0">
              時尚雜誌</h3>
            <h3 class="position-absolute bottom-0 end-0"><del style="color:red;">1000$</del><br>new price</h3>
            <a href="#" class="product_more position-absolute d-inline-block bg-white text-center"><i
                class="bi bi-cart-plus"></i></a>
          </div>
          <div class="text-end">
            <a href="#" class="text-white">查看更多</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 px-5 py-5">
          <div class="product_item text-white position-relative">
            <img src="@/assets/pic/pic01.jpg" class="w-100 h-100" alt="">
            <h3 class="product_h3 position-absolute start-0 top-0">
              時尚雜誌</h3>
            <h3 class="position-absolute bottom-0 end-0"><del style="color:red;">1000$</del><br>new price</h3>
            <a href="#" class="product_more position-absolute d-inline-block bg-white text-center"><i
                class="bi bi-cart-plus"></i></a>
          </div>
          <div class="text-end">
            <a href="#" class="text-white">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Navbar, Footer },
};
</script>
