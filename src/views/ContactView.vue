<template>
  <Navbar/>
  <div class="bg-dark">
    <div class="container-fluid pt-utility pb-5">
      <div class="row">
        <div class="col-12 gx-0">
            <div class="contact-bg bg-dark position-relative
              top-0 start-0 w-100 px-2 pt-2 pt-md-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb p-2 breadcrumb-style tracking-wider">
                  <li class="breadcrumb-item">
                    <a class="text-black text-decoration-none" href="#">首頁</a>
                  </li>
                  <li class="breadcrumb-item breadcrumb-item-none">聯絡方式Contact</li>
                </ol>
              </nav>
            </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 offset-md-1">
            <div class="row">
              <div class="col-12">
                <a href="mailto:mgzofficer@gmail.com"
                class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
                <div class="d-flex align-items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                  <i class="bi bi-envelope text-5xl text-end"
                  style="width:30%"></i>
                  <div class="ps-4">
                    <h3 class="text-base tracking-wider">Email</h3>
                    <p class="text-xs tracking-wide">發送訊息給客服中心</p>
                  </div>
                </div>
                </a>
              </div>
              <div class="col-12">
                <a href="tel:(02)1010101"
                class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
                  <div class="d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="200">
                    <i class="bi bi-telephone text-5xl text-end"
                    style="width:30%"></i>
                    <div class="ps-4">
                      <h3 class="pt-2 pb-1 text-base tracking-wider">撥打電話</h3>
                      <p class="text-xs tracking-wide">(02)1010101<br>週一至週五,上午7:00~下午17:00</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-12">
                <a href="https://goo.gl/maps/115xT6CDWXH6J2kD6" target="_blank" rel="noreferrer noopenner"
                  class="salesServer-item d-block text-decoration-none text-white py-3 my-3">
                  <div class="d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-delay="400">
                    <i class="bi bi-house text-5xl text-end"
                    style="width:30%"></i>
                    <div class="ps-4">
                      <h3 class="pt-2 pb-1 text-base tracking-wider">自行前往</h3>
                      <p class="text-xs tracking-wide">台北市信義區市府路101號</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 offset-md-1">
            <h4 class="text-white border-bottom pb-2 my-5">寄送表單聯絡我們</h4>
            <Form action="" @submit="submit">
              <div class="py-3 position-relative">
                <h3 class="d-block formData-label
                    tracking-wide text-sm text-white">*聯絡人姓名</h3>
                <Field id="name" name="姓名" rules="required" type="text"
                  class="carts-input w-100 p-2 border-0 border-bottom text-white"
                  placeholder="請輸入姓名">
                </Field>
                <br>
                <ErrorMessage style="color:#ff4343"
                  class="ps-2 position-absolute text-xs" name="姓名">
                </ErrorMessage>
              </div>
              <div class="py-3 position-relative">
                <h3 class="tracking-wide text-sm text-white">*性別</h3>
                <w-radio class="ps-2" color="white" value="male" name="gendor">
                  <p class="text-white">男</p>
                </w-radio>
                <w-radio class="ps-3" color="white" value="female" name="gendor">
                  <p class="text-white">女</p>
                </w-radio>
              </div>
              <div class="py-3 position-relative">
                <h3 class="d-block formData-label
                  tracking-widest text-sm text-white" for="email">
                  *聯絡人信箱</h3>
                <Field id="email" name="信箱" rules="required|email"
                  type="email" class="carts-input w-100 p-2
                  border-0 border-bottom text-white"
                  placeholder="請輸入電子信箱">
                </Field>
                <br>
                <ErrorMessage style="color:#ff4343"
                  class="ps-2 position-absolute text-xs" name="信箱">
                </ErrorMessage>
              </div>
              <div class="py-3 position-relative">
                  <h3 class="d-block formData-label
                  tracking-widest text-sm text-white" for="phone">*聯絡人手機</h3>
                  <Field id="phone" name="手機" rules="required" type="tel"
                    class="carts-input w-100 p-2 border-0 border-bottom text-white"
                    placeholder="請輸入手機號碼">
                  </Field>
                <br>
                <ErrorMessage style="color:#ff4343"
                  class="ps-2 position-absolute text-xs" name="手機">
                </ErrorMessage>
              </div>
              <div class="py-3 position-relative">
                <label ref="formMessage" class="d-block formData-label
                  tracking-wide text-sm text-white pb-2" for="adress">*留言區
                  <span class="text-sm tracking-wide opacity-75"></span>
                  <textarea name="" id="" cols="30" rows="10"
                    class="carts-textarea text-white border p-3 tracking-wide w-100"
                    placeholder="留下疑問或需求" maxlength="300">
                  </textarea>
                </label>
              </div>
              <div class="text-end mb-5 mt-3">
                <w-button type="submit"
                  class="text-black px-3 py-md-3 px-md-4 py-lg-3 px-lg-5"
                  lg bg-color="white" tile>寄送
                </w-button>
              </div>
            </Form>
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
  components: { Navbar, Footer },
  methods: {
    submit() {},
  },
};
</script>
