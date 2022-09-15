<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">警告刪除後無法復原</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          確定要刪除<span class="text-red">{{ this.delete.title }}</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="deleteItem()">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modalmixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
    };
  },
  props: ['delete'],
  methods: {
    deleteItem() {
      this.$emit('deleteItem');
    },
  },
  mixins: [Modalmixin],
};
</script>
