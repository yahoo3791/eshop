<template>
  <div class="position-absolute top-0 start-0 w-100">
    <Navbar />
  </div>
  <div class="container-fluid">
    <router-view></router-view>
    <div class="container-fluid mt-3">
      <ToastMessages></ToastMessages>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/BackNavbar.vue';

export default {
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('login');
      }
    });
  },
  components: {
    ToastMessages,
    Navbar
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
