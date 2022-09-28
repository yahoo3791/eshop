<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">會員登入</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label for="userAccount">帳號</label>
          <input id="userAccount" name="userAccount" type="text"><br>
          <label for="userPassword">密碼</label>
          <input id="userPassword" name="userPassword" type="password">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉close</button>
          <button type="button" class="btn btn-primary">登入login</button>
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
    }
  },
  mixins: [ modalMixin ],
}
</script>