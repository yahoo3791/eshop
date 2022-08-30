<template>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6">
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in getData.products">
            <td>{{item.product.category}}</td>
            <td>1 / {{item.product.unit}}</td>
            <td class=" text-end">{{item.product.price}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <!-- <td class="text-end">{{this.getData.total}}</td> -->
          </tr>
        </tfoot>
      </table>
      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{this.getData.user.email}}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{this.getData.user.name}}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{this.getData.user.tel}}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{this.getData.user.address}}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="this.getData.is_paid === false">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <button class="btn btn-danger" @click="payOrder">確認付款去</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        getData:{},
      }
    },
    methods:{
      // payOrder() {
      // const id = this.$route.params.orderId;
      //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      //   this.axios.post(api).then((res) => {
      //     console.log(api);
      //     console.log(res);
      //   })
      // }
    },
    created() {
      const id = this.$route.params.orderId;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.axios.get(api).then((res) => {
        this.getData = res.data.order;
      })
    }
  }
</script>