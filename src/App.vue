<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Navbar from '../src/components/Navbar.vue';
import Footer from '../src/components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
}
}
</script>
<style lang="scss">
@import '@/assets/scss/all.scss';
</style>
