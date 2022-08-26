<template>
  <div class="banner position-fixed top-0 w-100" style="background:fixed;height:100vh;z-index:-1">
    <img src="../assets/pic/pexels-daria-shevtsova-737108.jpg" class="w-100 h-100" alt="">
    <div class="mask position-absolute top-0 start-0 w-100 h-100" style="background:rgba(0,0,0,0.6)"></div>
  </div>
  <div class="container overflow-hidden w-100">
    <div class="row">
      <div class="col-12 text-white text-center" style="margin-top:400px">
        <h1 class="about1" style="margin-bottom:300px">我們是全球龍頭雜誌零售商</h1>
        <h1 class="about2" style="margin-bottom:300px">我們創立於1949年，</h1>
        <h1 class="about3" style="margin-bottom:300px">從傳統店面轉型為電商平台，</h1>
        <h1 class="about4" style="margin-bottom:300px">至今已不是為了銷售額，</h1>
        <h1 class="about5" style="margin-bottom:300px">存在著的是另一種回憶。</h1>
        <h1 class="about6" style="margin-bottom:300px">電商雜誌平台銷量連年冠軍</h1>
        <h1 class="about7" style="margin-bottom:300px">雜誌設計創意獎</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap';

export default {
  methods: {
    scrollAnimation() {
      gsap.to('.about1',{x:2000,duration: 3,scrollTrigger: {trigger: '.about1',start: 'top center',scrub:5}})
      gsap.to('.about2', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about2', start: 'top center', scrub: 10 } })
      gsap.to('.about3', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about3', start: 'top center', scrub: 10 } })
      gsap.to('.about4', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about4', start: 'top center', scrub: 10 } })
      gsap.to('.about5', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about5', start: 'top center', scrub: 10 } })
      gsap.to('.about6', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about6', start: 'top center', scrub: 10 } })
      gsap.to('.about7', { x: 2000, duration: 3, scrollTrigger: { trigger: '.about7', start: 'top center', scrub: 10 } })
    }
  },
  created() {
  },
  mounted: function () {
    this.scrollAnimation();
  }
}
</script>
