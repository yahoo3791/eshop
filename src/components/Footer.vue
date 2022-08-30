<template>
  <footer class="footer bg-dark text-center text-white position-relative bottom-0 w-100 pb-3">
    <div class="container p-4">
      <div class="row d-flex ">
        <div class="col-12">
          <img src="@/assets/pic/logo2.png" alt="">
        </div>
        <div class="col-2 d-flex align-items-center">
          <a href="https://www.facebook.com/mgzofficial/" target="_blank" class="meta rounded-circle me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-meta"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/mgzofficial/" target="_blank" class="ins rounded-circle"><i
              class="bi bi-instagram"></i></a>
        </div>
        <div class="col-10">
          <Form @submit="onSubmit" v-slot="{errors}" class="position-relative form-outline form-white mb-4 ms-auto" style="width:220px">
            <label class="d-block" for="subscription">訂閱更多流行資訊</label>
            <Field type="email" name="email" rules="email" id="subscription"
              class="subInput d-inline-block text-white ps-1" placeholder="email" />
            <span class="errorMessage position-absolute" style="font-size:10px;top:50px;left:5px;color:red">
              {{ errors.email }}
            </span>
            <button type="submit" class="subBtn">
              <i class="bi bi-box-arrow-right"></i>
            </button>
          </Form>
        </div>
      </div>
    </div>
    <div class="copyright opacity-50" style="font-size:14px">
      Copyright © 2022 MAZ. All rights reserved.
      <span class="opacity-50" style="font-size:8px">(作品練習使用無商業用途)</span>
    </div>
  </footer>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  components:{
    Form, Field, ErrorMessage
  },
  methods:{
    onSubmit() {
    }
  }
}
</script>