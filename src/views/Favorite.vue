<template>
  <Navbar />
  <div class="bg-dark">
    <div class="container-fluid" style="padding-top:100px">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-2 breadcrumb-style tracking-wider">
              <li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">首頁</a></li>
              <li class="breadcrumb-item breadcrumb-item-none">我的收藏</li>
            </ol>
          </nav>
        </div>
        <div class="col-12 col-md-3">
          <div class="px-3 px-md-0 d-flex flex-wrap justify-content-end justify-content-md-center align-items-center mt-3">
            <label for="sort" class="text-white pe-2 pb-md-2 d-inline-block">顯示方法</label>
            <select name="sort" id="sort" class="p-1 d-inline-block" style="max-width:300px">
              <option value="價格排序低到高">價格排序低到高</option>
              <option value="價格排序高到低">價格排序高到低</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-9 text-white">
          <!-- <h1>我的收藏是空的，快去添加喜愛的商品吧！</h1> -->
          <div class="d-flex flex-wrap align-items-center">
            <!-- RWD width sm100px md150px lg200px-->
            <div class="border my-3 mx-auto" style="width:200px"></div>
            <div class="border my-3 mx-auto" style="width:200px"></div>
            <div class="border my-3 mx-auto" style="width:200px"></div>
            <div class="border my-3 mx-auto" style="width:200px"></div>
            <div class="border my-3 mx-auto" style="width:200px"></div>
          </div>
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
  components: { Navbar, Footer }
}
</script>