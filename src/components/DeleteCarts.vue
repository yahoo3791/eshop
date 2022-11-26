<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-sm" style="margin:30vh auto;">
      <div class="modal-content text-black">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">刪除品項</h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body tracking-widest font-bold text-lg text-center">
          <p class="tracking-wide font-semibold text-lg">{{deleteData.title}}</p>
          <p class="leading-7 tracking-wider">{{deleteNum.qty}}/{{deleteData.unit}}</p>
        </div>
        <div class="modal-footer">
          <w-button class="" bg-color="black" color="white"
          data-bs-dismiss="modal">取消
          </w-button>
          <w-button class="" bg-color="red" color="white"
          @click="this.$emit('checkDelete')">確定刪除
          </w-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/methods/emitter';
import modalMixin from '../mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
      deleteData: {},
      deleteNum: {},
    };
  },
  mixins: [modalMixin],
  mounted() {
    emitter.on('delete-data', (item) => {
      this.deleteData = item.product;
      this.deleteNum = item;
    });
  },
};
</script>
