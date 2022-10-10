<template>
  <div class="container">
    <form @submit.prevent="signIn()" class="row d-flex justify-content-center align-items-center"
    style="height:100vh">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal text-center">
            <router-link to="/">
              <img src="@/assets/pic/logo.png" alt="logo">
            </router-link>
        </h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-onl d-block">
            <input
              v-model="this.user.username"
              type="email"
              id="inputEmail"
              class="rounded-pill form-control loginInput"
              name="inputEmail"
              placeholder="Email" required />
          </label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only d-block">
            <input
              v-model="this.user.password"
              type="password"
              name="inputPassword"
              id="inputPassword"
              class="rounded-pill form-control loginInput"
              placeholder="Password" required />
          </label>
        </div>
        <div class="text-end mt-4">
          <a href="#" class="loginBtn btn btn-md btn-block rounded-pill border"
            type="submit">返回首頁</a>
          <button class="loginBtn btn btn-md btn-block rounded-pill border"
          type="submit">後台登入<i class="bi bi-box-arrow-in-right"></i></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.axios.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard/backproducts');
          }
        });
    },
  },
};
</script>
