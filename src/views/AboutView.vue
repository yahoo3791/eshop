<template>
  <Navbar />
  <div class="bg-dark">
    <div class="container-fluid pt-utility">
      <div class="row">
        <div class="col-12 col-md-9 mx-auto p-0">
          <div class="position-relative">
            <img src="@/assets/pic/banner/aboutBanner.png" class="w-100 productBanner"
              style="object-fit: cover; border-radius:5px" alt="關於我們圖片">
            <div class="position-absolute top-50 translate-middle-y"
            style="right:20%">
              <h2>關於我們</h2>
            </div>
          </div>
        </div>
        <div class="col-12">
          時間軸 起承轉合
        </div>
      </div>
    </div>
    <div :class="{ 'scrollIconMoveIn':!scrollIcon  }"
    ref="scrollTop" class="scrollTop-container position-fixed text-center
      bottom-0 end-0 cursor-pointer">
      <div @click.prevent="scrollToTop" @keydown="scrollToTop"
        class="scrollTop-btn d-block m-1 rounded-circle text-white m-2 m-md-3">
        <i class="bi-arrow-bar-up fs-5"></i>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar, Footer,
  },
};
</script>
