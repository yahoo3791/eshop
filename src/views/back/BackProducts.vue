<template>
  <div class="container" style="margin-top:100px;margin-bottom:100px">
    <loading v-model:active="isLoading" />
    <div class="row">
      <div class="col-12">
        <div class="text-end">
          <button @click="openModal(true)" type="button" class="btn" style="border:1px solid black"
            data-bs-target="#exampleModal">
            新增一個項目
          </button>
        </div>
      </div>
      <div class="col-12">
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="200">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in this.Data" :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-right">
                {{ $filters.currency(item.origin_price)}}
              </td>
              <td class="text-right">
                {{item.price}}
              </td>
              <td>
                <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
                <span class="text-success" v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 position-fixed bottom-0 start-0">
        <pagination :pages="Pagination" @update-page="getData"></pagination>
      </div>
    </div>
  </div>
  <productModal ref="productModal" :product="tempProduct" @add="UpdateData"></productModal>
  <deleteModal ref="deleteModal" :delete="deleteItem" @delete-item="deleteProduct"></deleteModal>
</template>

<script>
import Loading from 'vue-loading-overlay';
import productModal from './ProductsModal.vue';
import deleteModal from './DeleteModal.vue';
import 'vue-loading-overlay/dist/vue-loading.css';
import pagination from '../back/Pagination.vue';
import Navbar from '../../components/BackNavbar.vue';

export default {
  data() {
    return {
      Data: {},
      tempProduct: {},
      isNew: false,
      deleteItem: {},
      isLoading: false,
      Pagination: {},
    };
  },
  components: {
    productModal,
    deleteModal,
    Loading,
    pagination,
},
  inject: ['emitter'],
  methods: {
    getData( page=1 ) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.axios.get(api).then((res) => {
        this.isLoading = false;
        this.Data = res.data.products;
        this.Pagination = res.data.pagination;
      });
    },
    UpdateData(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      // 傳送
      this.isLoading = true;
      this.axios[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false;
        this.$refs.productModal.modalHide();
        this.tempProduct = {};
        if (res.data.success) {
          this.getData();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join('、'),
          });
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.$refs.productModal.modalShow();
      this.isNew = isNew;
    },
    openDeleteModal(item) {
      this.$refs.deleteModal.modalShow();
      this.deleteItem = item;
    },
    deleteProduct() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.deleteItem.id}`;
      this.isLoading = false;
      this.axios.delete(api).then((res) => {
        this.$refs.deleteModal.modalHide();
        if (res.data.success) {
          this.getData();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除失敗',
            content: res.data.message.join('、'),
          });
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
