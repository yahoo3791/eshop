<template>
  <loading v-model:active="isLoading" />
  <div class="container-fluid" style="margin-top:100px">
    <div class="text-end">
      <button type="button" class="btn btn-danger" @click="deleteAllModal">刪除全部訂單</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in data" :key="item.id">
          <tr>
            <td>{{ $filters.date(item.create_at)}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td>{{item.total}}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox">
                <label class="form-check-label">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="ChangeModal(item)">檢視</button>
                <button class="btn btn-outline-danger btn-sm" @click="DeleteModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <Pagination :pages="pagination" @updatePage="getData"></Pagination>
  </div>
  <orderModal ref="orderModal" :change-data="changeData"></orderModal>
  <deleteModal ref="deleteModal" :delete-data="deleteData" @delete-item="deleteItem"></deleteModal>
  <deleteOrderAllModal ref="deleteOrderAllModal" @delete-all="deleteAll"></deleteOrderAllModal>

</template>
<script>
import orderModal from '@/views/back/OrderModal.vue';
import Pagination from '@/views/back/Pagination.vue';
import deleteModal from '@/views/back/DeleteOrderModal.vue';
import deleteOrderAllModal from '@/views/back/DeleteOrderAllModal.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      data: {},
      deleteData: {},
      changeData: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    Loading, orderModal, Pagination, deleteModal, deleteOrderAllModal,
  },
  methods: {
    getData(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.axios.get(api).then((res) => {
        this.data = res.data.orders;
        this.pagination = res.data.pagination;
      });
    },
    deleteAllModal() {
      this.$refs.deleteOrderAllModal.modalShow();
    },
    ChangeModal(item) {
      this.changeData = item;
      this.$refs.orderModal.modalShow();
    },
    DeleteModal(item) {
      this.deleteData = item;
      this.$refs.deleteModal.modalShow();
    },
    deleteItem() {
      const { id } = this.deleteData;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.axios.delete(api).then((res) => {
        this.$refs.deleteModal.modalHide();
        this.getData();
      });
    },
    deleteAll() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.axios.delete(api).then((res) => {
        this.$refs.deleteOrderAllModal.modalHide();
        this.getData();
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
