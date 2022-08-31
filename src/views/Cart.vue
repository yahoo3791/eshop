<template>
  <Navbar />
  <div class="bg-dark w-100 h-100">
    <div class="container text-white" style="height:500px;padding-top: 100px;position: relative;z-index: 5;">
      <div class="row mx-0">
        <div class="col-12">
          <div class="sticky-top">
            <table class="table align-middle text-white">
              <thead>
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 110px">數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                  <td>
                    <!-- {{ item.product.category }} -->
                    <div class="text-success">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input type="number" class="form-control" min=1>
                      <div class="input-group-text">/本</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small class="text-success">折扣價：＄</small>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">＄</td>
                </tr>
                <tr>
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">＄</td>
                </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm ms-auto w-100" style="max-width:500px;">
              <input type="text" class="form-control" placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          刪除全部 結帳
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {

    }
  },
  components: { Navbar, Footer },
  methods:{
    getData() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        console.log(res);
      })
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
