<template>
  <Navbar />
  <div class="banner position-fixed top-0 w-100 h-100 bg-dark" style="background:fixed;z-index:-1">
  </div>
  <div class="container-fulid">
    <div class="row">
      <div class="col-12">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"
          style="margin-top:80px">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1500">
              <img src="@/assets/pic/banner.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="1500">
              <img src="@/assets/pic/banner.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="1500">
              <img src="@/assets/pic/banner.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container overflow-hidden w-100 my-5">
    <div class="row text-white align-items-center">
      <div class="col-12 col-md-6">
        <div class="mx-auto" style="width:200px">
          <img src="@/assets/pic/homeArt01.png" class="h-100 w-100" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6 d-inline-block text-center">
        Mgz是全球龍頭雜誌零售商<br>紙本雜誌背後的辛酸與挑戰<br>現代諸多原因導致大環境閱讀方式改變<br>不再需要紙張閱讀.
        通路迅速萎縮<br>許多雜誌品牌紛紛轉型網路書籍而Mgz也是提供網路平台的業者</div>
    </div>
    <div class="row">
      <div class="col-12 text-center text-white my-5">
        <h3 class="">聯繫我們</h3>
        <div class="information text-white opacity-75 mt-5 fs-3">
        <p>辦公室地址:台北市信義區市府路101號<br>
          客服電話:<a href="tel:+886-2-1010101" class="text-white">(02)1010101</a><br>
          客服時間:週一至週五,上午07:00~下午17:00<br>
          Email:<a href="mailto:MgzOfficer010@gmail.com" class="text-white">MgzOfficer010@gmail.com</a><br>
        </p>
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
  methods: {
  },
  created() {
  },
  mounted() {
  },
  components: { Navbar, Footer },
};
</script>
