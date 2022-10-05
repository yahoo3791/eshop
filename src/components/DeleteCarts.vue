<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-sm" style="margin:30vh auto;">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">刪除品項</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
            <p class="tracking-wide font-semibold text-lg">{{deleteData.title}}</p>
          <p class="leading-7 tracking-wider">{{deleteNum.qty}}/本</p>
        </div>
        <div class="modal-footer">
          <w-button class="text-white px-3 py-md-2 px-md-3 py-lg-2 px-lg-4" lg bg-color="grey" tile data-bs-dismiss="modal">
            取消
          </w-button>
          <w-button class="text-white px-3 py-md-2 px-md-3 py-lg-2 px-lg-4" lg bg-color="dark" tile
          @click="this.$emit('checkDelete')">
            刪除
          </w-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import modalMixin from '../mixins/modalMixin';
  import emitter from '@/methods/emitter';

  export default {
    data() {
      return {
        modal: {},
        deleteData: {},
        deleteNum: {},
      }
    },
    mixins: [modalMixin],
    mounted() {
      emitter.on('delete-data', (item) => {
        this.deleteData = item.product;
        this.deleteNum = item;
      })
    }
  }
</script>