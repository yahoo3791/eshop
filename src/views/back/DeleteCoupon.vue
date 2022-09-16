<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{this.deleteItem.title}}</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          確定要刪除<span class="text-red">{{this.deleteItem.code}}</span>優惠碼<br>
          刪除後無法復原
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary"
          data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary"
          @click="deleteCoupon">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin],
  mounted() {
  },
  methods: {
    deleteCoupon() {
      this.$emit('deleteCoupon', this.deleteItem.id);
    },
  },
  props: ['deleteItem'],
};
</script>
