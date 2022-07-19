<template>
  <div class="jumbotron">
    <img src="../img/b1.jpg" alt="" width="100%" />
    <div style="margin: 20px 45% 20px">—— 品牌大事记 ——</div>
    <img src="../img/b2.jpg" alt="" width="100%" />

    <!-- 轮播图 -->
    <!-- 展会活动 -->
    <div style="margin: 20px 45% 20px">—— 展会活动 ——</div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style="margin-top: 20px"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../img/b3.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/b4.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
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

    <!-- 创新技术 -->
    <div style="margin: 20px 45% 20px">—— 创新技术 ——</div>
    <div
      id="carousel"
      class="carousel slide"
      data-ride="carousel"
      style="margin-top: 20px"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../img/b5.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/b6.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/b7.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/b8.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../img/b9.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        type="button"
        data-target="#carousel"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a
        class="carousel-control-next"
        type="button"
        data-target="#carousel"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style>
</style>