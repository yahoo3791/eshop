<template>
  <div class="container" style="margin-top:100px">
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
            <td>{{item.create_at}}</td>
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
                <button class="btn btn-outline-primary btn-sm">檢視</button>
                <button class="btn btn-outline-danger btn-sm">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data:{},
      pagination:{},
    }
  },
  created() {
    const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`;
    this.axios.get(api).then((res) => {
      console.log(res);
      this.data = res.data.orders;
      this.pagination = res.pagination;
    })
  }
}
</script>