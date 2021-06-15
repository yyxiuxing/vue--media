<template>
  <div class="home">
    <Head />
    <section class="warp-box">
      <div class="side">
        <div class="warp-box-head">Features & Advantages</div>
        <ul class="content-box">
          <li class="content">
            <img class="content-img" src="@/assets/tu1.png" alt="" />
            <div class="dec-box">
              <div class="dec-title">Rich brands</div>
              <div class="dec-detail">
                It is our goal to provide premium collectibles in a great variety
                for our clients with just one app.Even if it is a hot brand or
                product we can assign the quantity according to the sales of each
                distributor,In terms of price ,we are laso also competitive.
              </div>
            </div>
          </li>
          <li class="content">
            <img class="content-img" src="@/assets/tu2.png" alt="" />
            <div class="dec-box">
              <div class="dec-title">Global Logistics</div>
              <div class="dec-detail">
                Wherever you are, we have the right logistics solution for you.our
                professional logistics solutions cover every part of supply chain
                for warehousing and transportation service, Together with the
                support from our business partners,we are confident to serve you
                with various transport need.
              </div>
            </div>
          </li>
          <li class="content">
            <img class="content-img" src="@/assets/tu3.png" alt="" />
            <div class="dec-box">
              <div class="dec-title">Transaction Security</div>
              <div class="dec-detail">
                As a platform that works with thousands of studios and has a large
                number of distributors,We support various payment methods, such as
                WeChat, Alipay, domestic transfer, overseas transfer, etc.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="premium-box">
      <div class="side">
        <div class="warp-box-head2">Premium Works Publis</div>
        <ul class="premium-list">
          <li class="premium-item check">
            <img src="@/assets/Works-1.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-2.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-3.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-4.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-5.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-6.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <img src="@/assets/Works-7.png" alt="" class="premium-item-pic">
          </li>
          <li class="premium-item">
            <span class="premium-num">20000+</span>
            <span class="premium-desc">premium works published</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="reputable-brands-box">
      <div class="side">
        <div class="warp-box-head2 warp-box-head3">Reputable Brands Cooperated</div>
        <ul class="premium-list">
          <li class="reputable-brands-item">
            <img src="@/assets/1.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/2.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/3.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/4.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/5.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/6.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/7.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/8.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/9.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/10.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <img src="@/assets/11.png" alt="" class="reputable-brands-item-pic">
          </li>
          <li class="reputable-brands-item">
            <span class="premium-num reputable-num">1000+</span>
            <span class="premium-desc reputable-desc">Reputable Brands Cooperated</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="countries-box">
      <div class="side">
        <div class="warp-box-head2 warp-box-head3">Countries Arrived</div>
        <img src="@/assets/map.png" alt="" class="countries-pic">
      </div>
    </section>
    <section class="present-box">
      <div class="side present-layout">
        <div class="present-left">
          At present we have the first strategic partners in Vietnam, Malaysia, Philippines and Australia,No matter which country you are in, welcome to join us to bring the excellent works to your country !
        </div>
        <div class="present-right">
          <span class="present-right-top">10+</span>
          <span class="present-right-bottom">countries arrived</span>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/head.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Head,
    Footer
  },
};
</script>
<style scoped>
.warp-box {
  width: 100%;
  min-width: 1300px;
  background: #ffffff;
  overflow: hidden;
}
.warp-box-head {
  height: 138px;
  line-height: 138px;
  font-size: 48px;
  margin-top: 20px;
  font-weight: bold;
  color: #111111;
  text-align: center;
}
.content {
  width: 400px;
}
.content-img {
  height: 300px;
}
.content-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dec-box {
  height: 300px;
  text-align: center;
  overflow: hidden;
}
.dec-title {
  height: 38px;
  font-size: 32px;
  line-height: 38px;
  margin-top: 40px;
  font-weight: bold;
  color: #e14d48;
}
.dec-detail {
  margin-top: 20px;
  font-size: 20px;
  color: #111111;
}
.premium-box{
  width: 100%;
  min-width: 1300px;
  background: #111111;
  padding-bottom: 32px;
  overflow: hidden;
}
.warp-box-head2{
  height: 178px;
  line-height: 178px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.warp-box-head3{
  color: #111;
}
.premium-list{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.premium-item{
  width: 290px;
  height: 164px;
  margin-bottom: 48px;
}
.premium-item.check{
  box-shadow:0 0 15px #EB3F32;
}
.premium-num{
  display: block;
  font-size: 80px;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 96px;
  margin-top: 18px;
}
.premium-num.reputable-num{
  font-size: 60px;
  font-weight: bold;
  color: #E14D48;
  line-height: 72px;
}
.premium-desc{
  display: block;
  font-size: 20px;
  color: #FFFFFF;
  line-height: 24px;
  text-align: right;
  padding-right: 24px;
  margin-top: 8px;
}
.premium-desc.reputable-desc{
  font-size: 14px;
  color: #E14D48;
  padding-right: 3px;
  line-height: 17px;
}
.reputable-brands-box{
  width: 100%;
  min-width: 1300px;
  padding-bottom: 20px;
}
.reputable-brands-item{
  width: 196px;
  height: 130px;
  margin-bottom: 40px;
}
.countries-box{
  width: 100%;
  min-width: 1300px;
  background: rgba(225, 77, 72, 0.03);
  padding-bottom: 20px;
}
.countries-pic{
  height: 738px;
}
.present-box{
  width: 100%;
  min-width: 1300px;
  height: 228px;
  background: #E14D48;
}
.present-layout{
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.present-left{
  width: 960px;
  height: 100%;
  font-size: 32px;
  color: #FFFFFF;
  line-height: 38px;
  display: flex;
  align-items: center;
}
.present-right{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.present-right-top{
  font-size: 88px;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 106px;
}
.present-right-bottom{
  font-size: 24px;
  color: #FFFFFF;
  line-height: 29px;
  margin-top: 8px;
}
/* 手机端的样式 */
@media screen and (max-width: 768px) and (min-width: 0px) {

}

</style>
