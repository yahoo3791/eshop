<template>
  <Navbar />
  <div class="banner position-fixed top-0 w-100" style="background:fixed;height:100vh;z-index:-1">
    <img src="../assets/pic/pexels-daria-shevtsova-737108.jpg" class="w-100 h-100" alt="">
    <div class="mask position-absolute top-0 start-0 w-100 h-100" style="background:rgba(0,0,0,0.6)"></div>
  </div>
  <div class="container overflow-hidden w-100">
    <div class="row">
      <div class="col-12 text-white text-center " style="margin-top:200px">
        <p class="about1" style="margin-bottom:300px;border-left:2px solid white;">
          品牌發展與事跡<br>紙本雜誌背後的辛酸與挑戰<br>是閱聽眾與編輯之間的兩難<br>現代諸多原因導致大環境閱讀方式改變<br>不再需要紙張閱讀</p>
        <p class="about2" style="margin-bottom:300px;border-left:2px solid white;"></p>
        <p class="about3" style="margin-bottom:300px;border-left:2px solid white;">通路迅速萎縮<br>許多雜誌品牌紛紛轉型網路書籍</p>
        <p class="about4" style="margin-bottom:300px;border-left:2px solid white;">反之也有重新定義雜誌書籍的書商<br>不再是單純是本雜誌</p>
        <p class="about5" style="margin-bottom:300px;border-left:2px solid white;">讓已逐漸成為歷史回憶、<br>變成像黑膠唱片的藝術品</p>
        <p class="about6" style="margin-bottom:300px;border-left:2px solid white;">然而MGZ零售商提供網路平台<br>提供他們販售不抽佣金
          <br>變成像黑膠唱片的藝術品<br>就為了把回憶留存到最後一刻...
          2020/02/02...
        </p>
        <p style="margin-bottom:150px">我們是全球龍頭雜誌零售商</p>
        <p style="margin-bottom:150px">我們創立於1949年，</p>
        <p style="margin-bottom:150px">從傳統店面轉型為電商平台，</p>
        <p style="margin-bottom:150px">至今已不是為了銷售額，</p>
        <p style="margin-bottom:150px">存在著的是另一種回憶。</p>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  methods: {
    scrollAnimation() {
      gsap.to('.about1', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about1', start: '50', scrub: 2 } });
      gsap.to('.about2', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about2', start: 'top center', scrub: 2 } });
      gsap.to('.about3', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about3', start: 'top center', scrub: 2 } });
      gsap.to('.about4', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about4', start: 'top center', scrub: 2 } });
      gsap.to('.about5', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about5', start: 'top center', scrub: 2 } });
      gsap.to('.about6', { x: 2000, duration: 1, scrollTrigger: { trigger: '.about6', start: '0', scrub: 2 } });
    },
  },
  created() {
  },
  mounted() {
    this.scrollAnimation();
  },
  components: { Navbar, Footer },
};
</script>
