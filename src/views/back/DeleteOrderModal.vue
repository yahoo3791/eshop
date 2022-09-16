<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger"
          id="exampleModalLabel">確認是否刪除(刪除後無法恢復)</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          購買時間:{{this.deleteData.create_at}} <br>
          訂單編號:{{this.deleteData.id}} <br>
          <h5>購買款項</h5>
          <div class="" v-for="item in this.deleteData.products">
            {{item.product.title}} <br>
            {{item.qty}} / {{item.product.unit}} <br>
          </div>
          {{this.deleteData.total}}$
          <h5>顧客資訊</h5>
          <div class="" v-for="item in this.deleteData.user">
            {{item}}
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"
          data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-danger"
          @click="checkDelete()">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {};
  },
  methods: {
    checkDelete() {
      this.$emit('deleteItem');
    },
  },
  props: ['deleteData'],
  mixins: [modalMixin],
};
</script>
