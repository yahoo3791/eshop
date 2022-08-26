<template>
  <div class="container my-5">
    <form @submit.prevent="signIn()" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="this.user.username" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input v-model="this.user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
  <!-- 登入分用戶端登入和後台登入 <br>
  前台登入給查詢訂單記錄 <br>
  後台登入可以更改商品 -->
</template>

<script>

export default {
  data() {
    return {
      user:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.axios.post(api, this.user)
        .then((res) => {
          console.log(res);
          if ( res.data.success ) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard');
          }
        });
    },
  },
  computed() {

  }
}
</script>