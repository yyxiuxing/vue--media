<template>
  <div class="banner-bg">
    <div class="head-box side">
      <ul class="head-nav">
        <li class="head-nav-icon">
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng45db1181188c260b408a80d168cbc8eeba45187d6668dcc8824821166660dea7"
          />" alt="">
          <span>MonYa</span>
        </li>
        <li class="head-nav-btn">
          <span class="hot">Home</span>
          <span>About us</span>
        </li>
        <li class="head-nav-contact">Contact us</li>
      </ul>
      <div class="head-content">
        Mengya is an e-commerce wholesale platform focusing on Chinese GK and
        statues, Serving distributors from all over the world.
      </div>
      <div class="head-bottom-btn">Contact us</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.banner-bg {
  width: 100%;
  min-width: 1300px;
  height: 600px;
  background: url("../assets/banner.png") no-repeat center/cover;
}
.head-box{
  position: relative;
  width: 100%;
  height: 100%;
}
.head-nav {
  height: 80px;
  position: relative;
}
.head-nav-icon {
  width: 130px;
  height: 48px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
}
.head-nav-icon > img {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
}
.head-nav-icon > span {
  font-size: 20px;
  font-family: DFWaWaTC-W5;
  color: #ffffff;
  line-height: 48px;
  position: absolute;
  right: 0;
}
.head-nav-btn {
  height: 48px;
  line-height: 48px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 250px;
}
.head-nav-btn > span {
  margin-left: 40px;
  font-size: 20px;
  color: #ffffff;
  opacity: 0.65;
}
.head-nav-btn > span:nth-child(1) {
  margin-left: 0;
}
.head-nav-btn > span.hot {
  font-weight: 600;
  opacity: 1;
}
.head-nav-contact {
  width: 144px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 48px;
}
.head-content {
  width: 640px;
  top: 160px;
  font-size: 40px;
  line-height: 48px;
  position: absolute;
  left:10px;
  color: #ffffff;
  text-align: left;
}
.head-bottom-btn {
  width: 246px;
  height: 58px;
  background: #e14d48;
  box-shadow: 0px 2px 6px 0px rgba(149, 31, 27, 0.6);
  border-radius: 29px;
  position: absolute;
  left:10px;
  bottom:148px;
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  line-height: 58px;
  text-shadow: 0px 0px 2px rgba(225, 77, 72, 0.4);
}
/* 手机端的样式 */
@media screen and (max-width: 768px) and (min-width: 0px){
  
}



</style>
