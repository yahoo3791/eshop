<template>
  <Navbar/>
  <div class="bg-dark">
    <div class="container-fluid pb-5">
      <div class="row">
        <div class="col-12 gx-0">
            <div class="contact-bg bg-dark position-relative top-0 start-0 w-100 px-2 pt-2 pt-md-3" style="height:60vh">
              <nav aria-label="breadcrumb" style="padding-top:70px">
                <ol class="breadcrumb p-2 breadcrumb-style tracking-wider">
                  <li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">首頁</a></li>
                  <li class="breadcrumb-item breadcrumb-item-none">聯絡方式Contact</li>
                </ol>
              </nav>
              <h2 class="position-absolute start-50 top-50 translate-middle">Contact Us</h2>
            </div>
        </div>
        <div class="col-12 text-white">
          <div class="row">
            <div class="col-12 col-md-6">
              <h1>公司聯絡資訊</h1>
              <p>注意客服時間</p>
              <h4 class="py-5">信箱email:</h4>
              <p>MgzOfficer010@gmail.com</p>
              <h4 class="py-5">電話phone:</h4>
              <p>(02)1010101</p>
              <h4 class="py-5">地址address:</h4>
              <p>台北市信義區市府路101號</p>
              <h4 class="py-5">客服時間:</h4>
              <p>週一至週五,上午7:00~下午17:00</p>
            </div>
            <div class="col-12 col-md-6">
              <h1>留下您的聯絡資訊與問題</h1>
              <p>建議提供方便聯絡時段</p>
              <label for="">名字name</label><br>
              <input id="" name="" type="text"><br>
              <label for="">信箱email</label><br>
              <input id="" name="" type="text"><br>
              <label for="">手機phone</label><br>
              <input type="text"><br>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
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