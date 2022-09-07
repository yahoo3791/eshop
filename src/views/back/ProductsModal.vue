<template>
  <div class="container">
    <loading v-model:active="isLoading" />
    <div class="modal fade" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input v-model="data.imageUrl" type="text" class="form-control"
                  id="image" name="image" placeholder="請輸入圖片連結">
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label">或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input ref="fileInput" @change="uploadFile"
                  type="file" id="customFile" class="form-control">
                </div>
                <img class="img-fluid" alt="">
                <div class="mt-5">
                  <div>
                    <button class="btn btn-outline-primary btn-sm d-block w-100">
                      新增圖片
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input v-model="data.title" type="text"
                  class="form-control" id="title" placeholder="請輸入標題">
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input v-model="data.category" type="text"
                    class="form-control" id="category" placeholder="請輸入分類">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input v-model="data.unit" type="text"
                    class="form-control" id="unit" placeholder="請輸入單位">
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input v-model="data.origin_price"
                    type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input v-model="data.price" type="number"
                    class="form-control" id="price" placeholder="請輸入售價">
                  </div>
                </div>
                <hr>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea v-model="data.description" type="text"
                  class="form-control" id="description"
                    placeholder="請輸入產品描述"></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea v-model="data.content" type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容"></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input v-model="data.is_enabled" class="form-check-input"
                    type="checkbox" :true-value="1"
                      :false-value="0" id="is_enabled" name="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary" @click="add">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modalmixin from '@/mixins/modalMixin';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.data = this.product;
    },
  },
  components: {
    Loading,
  },
  data() {
    return {
      modal: {},
      data: {},
      isLoading: false,
    };
  },
  methods: {
    add() {
      this.$emit('add', this.data);
      console.log(this.data);
    },
    uploadFile() {
      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.isLoading = true;
      this.axios.post(url, formData).then((res) => {
        this.isLoading = false;
        console.log(res.data);
        if (res.data.success) {
          this.data.imageUrl = res.data.imageUrl;
        }
      });
    },
  },
  mixins: [Modalmixin],
};
</script>
