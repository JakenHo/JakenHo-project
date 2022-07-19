<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <!-- 轮播图设计 -->
        <div class="carousel-item active">
          <img src="../img/1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/4.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/5.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/6.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/7.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/8.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <!-- 轮播图按钮 -->
      <a
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
    <!-- 首页介绍图展示 -->
    <div class="row">
      <div class="col-sm-6 footer">
        <img
          src="https://oss.static.nubia.cn/active/618e0d7c7b39c4.jpg"
          alt=""
        />
      </div>
      <div class="col-sm-6 footer">
        <img
          src="https://oss.static.nubia.cn/active/618e0d7c2c8c122.jpg"
          alt=""
        />
      </div>
      <div class="col-sm-6 footer">
        <img
          src="https://oss.static.nubia.cn/active/5e9fad536a1c051.jpg"
          alt=""
        />
      </div>
      <div class="col-sm-6 footer">
        <img
          src="https://oss.static.nubia.cn/active/5ec78d90cc96c21.png"
          alt=""
        />
      </div>
      <div class="col-sm footer">
        <img
          src="https://oss.static.nubia.cn/active/6195fed8809e276.jpg"
          alt=""
        />
      </div>
    </div>
    <!-- 底部产品介绍 -->
    <div class="row row-cols-1 row-cols-md-3" style="margin-top: 20px">
      <div class="col mb-4">
        <div class="card">
          <img src="../img/index-phone1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">产品热评</h5>
            <p class="card-text">[官方活动] 努比亚星空Z约寻“星”计划摄影征集</p>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="../img/index-phone2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">新闻中心</h5>
            <p class="card-text">
              3999元起！高颜值游戏手机腾讯红魔6S Pro正式发布
            </p>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="../img/index-phone3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">视频长廊</h5>
            <p class="card-text">红魔姬mora详解红魔游戏空间</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Floor v-for="list in floorList" :key="list.id" :list="list" /> -->
  </div>
</template>

<script>
export default {
  name: "MyIndex",
  mounted() {
    //获取用户信息在页面展示
    this.$store.dispatch("user/getUserInfo");
  },
};
</script>

<style scope >
.footer img {
  width: 100%;
  height: 200xp;
  margin: 12px 2px 10px 2px;
}
.font-color {
  list-style-type: none;
  width: 100%;
  margin-top: 20px;
  margin-left: 80px;
  margin-bottom: 50px;
}
.font-color a {
  color: black;
  text-decoration: none;
}
.card-text {
  text-align: center;
}
.row .col .card img {
  width: 517px;
  height: 230px;
}
</style>