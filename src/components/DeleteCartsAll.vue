<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-sm" style="margin:30vh auto;">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">清除購物車</h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body tracking-wide text-lg">
          刪除全部後無法恢復
        </div>
        <div class="modal-footer">
          <w-button class="text-white px-3 py-md-2 px-md-3 py-lg-2 px-lg-4" lg bg-color="grey" tile
            data-bs-dismiss="modal">
            取消
          </w-button>
          <w-button class="text-white px-3 py-md-2 px-md-3 py-lg-2 px-lg-4"
          lg bg-color="dark" tile @click="this.$emit('checkDeleteAll')">
            確定刪除
          </w-button>
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
};
</script>
