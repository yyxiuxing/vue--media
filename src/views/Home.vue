<template>
  <div class="home">
    <Head />
    <section class="warp-box side">
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
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/head.vue";

export default {
  name: "Home",
  components: {
    Head,
  },
};
</script>
<style scoped>
.warp-box {
  background: #ffffff;
}
.warp-box-head {
  font-weight: bold;
  color: #111111;
  text-align: center;
}
.content-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dec-box {
  height: 400px;
  text-align: center;
  overflow: hidden;
}
.dec-title {
  font-weight: bold;
  color: #e14d48;
}
.dec-detail {
  color: #111111;
}
@media screen and (max-width: 1930px) and (min-width: 1441px) {
  .warp-box-head {
    height: 183px;
    line-height: 183px;
    font-size: 64px;
    margin-top: 27px;
  }
  .content {
    width: 533.33px;
  }
  .content-img {
    height: 400px;
  }
  .dec-box {
    height: 400px;
    
  }
  .dec-title {
    height: 51px;
    font-size: 43px;
    line-height: 51px;
    margin-top: 53px;
  }
  .dec-detail {
    margin-top: 26.67px;
    font-size: 27px;
  }
}
@media screen and (max-width: 1440px) and (min-width: 1069px) {
  .warp-box-head {
    height: 138px;
    line-height: 138px;
    font-size: 48px;
    margin-top: 20px;
  }
  .content {
    width: 400px;
  }
  .content-img {
    height: 300px;
  }
  .dec-box {
    height: 300px;
  }
  .dec-title {
    height: 38px;
    font-size: 32px;
    line-height: 38px;
    margin-top: 40px;
  }
  .dec-detail {
    margin-top: 20px;
    font-size: 20px;
  }
}
@media screen and (max-width: 1068px) and (min-width: 768px) {
  .warp-box-head {
    height: 103px;
    line-height: 103px;
    font-size: 36px;
    margin-top: 15px;
  }
  .content {
    width: 296.67px;
  }
  .content-img {
    height: 222.5px;
  }
  .dec-box {
    height: 222.5px;
  }
  .dec-title {
    height: 28.18px;
    font-size: 24px;
    line-height: 28.18px;
    margin-top: 29.67px;
  }
  .dec-detail {
    margin-top: 14.83px;
    font-size: 15px;
  }
}
/* 手机端的样式 */
@media screen and (max-width: 767px) and (min-width: 0px) {
  .warp-box-head {
    height: 73px;
    line-height: 73px;
    font-size: 26px;
    margin-top: 11px;
  }
}
</style>
