<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <!-- 轮播图 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://fms.res.meizu.com/dms/2021/11/30/3f6dc44d-3497-41f7-8b3f-8c774c144a3c.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/11/30/a51abaa5-a17d-4b8d-8303-bd1247ae2181.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/12/10/33a19697-f2fb-4b9a-8447-a2a90bcc6fa9.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/11/11/8ae581f0-09ba-4909-9fb9-0ee58839815a.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/11/12/b94ab074-a580-4748-8055-243ee155cee1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/11/30/2e5fe26c-17be-425e-b896-b2aec7b05a42.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://fms.res.meizu.com/dms/2021/12/09/dc9d60a7-f02a-4df4-82f2-4604da0674ec.jpg"
            class="d-block w-100"
            alt="..."
          />
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

    <div
      class="row"
      style="margin: 50px 0 50px 80px; height: 100px; line-height: 60px"
    >
      <div class="col">
        <a href="#"><img src="../img/1.png" alt="" /></a>
        <h6>注册产品</h6>
      </div>
      <div class="col">
        <a href="#"><img src="../img/2.png" alt="" /></a>
        <h6>真伪查询</h6>
      </div>
      <div class="col">
        <a href="#"><img src="../img/3.png" alt="" /></a>
        <h6>维修查询</h6>
      </div>
      <div class="col">
        <a href="#"><img src="../img/4.png" alt="" /></a>
        <h6>查询支付</h6>
      </div>
      <div class="col">
        <a href="#"><img src="../img/5.png" alt="" /></a>
        <h6>自助服务</h6>
      </div>
      <div class="col">
        <a href="#"><img src="../img/6.png" alt="" /></a>
        <h6>以旧换新</h6>
      </div>
    </div>
    <!-- 商品展示栏 -->
    <div class="row img-pos">
      <div
        class="col"
        style="background-color: #388ded; height: 160px; margin-right: 10px"
      >
        <a href="#">
          <img src="../img/寄送.png" alt="" />
          <h5>寄送快修</h5>
        </a>
      </div>
      <div
        class="col"
        style="background-color: #48bf6c; height: 160px; margin-right: 10px"
      >
        <a href="#">
          <img src="../img/预约.png" alt="" />
          <h5>预约维修</h5>
        </a>
      </div>
      <div
        class="col"
        style="background-color: #f6af2a; height: 160px; margin-right: 10px"
      >
        <a href="#">
          <img src="../img/上门.png" alt="" />
          <h5>上门维修</h5>
        </a>
      </div>
      <div
        class="col"
        style="background-color: #3ec0d1; height: 160px; margin-right: 10px"
      >
        <a href="#">
          <img src="../img/魅族.png" alt="" />
          <h5>售后服务</h5>
        </a>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3" style="margin-top: 20px">
      <div class="col mb-4">
        <div class="card">
          <img src="../img/phone1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">热销手机</h5>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="../img/phone2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Lipro</h5>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="../img/watch.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">智能配件</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
};
</script>

<style scope>
.img-pos {
  margin: 0 0 50px 10px;
  line-height: 100px;
}

.img-pos img {
  margin-left: 36%;
}

.img-pos h5 {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 32%;
}

.img-pos a {
  text-decoration: none;
}

.row .col .card img {
  width: 184px;
  height: 182px;
  margin: 16% 0 16% 36%;
}

.row .col .card h5 {
  text-align: center;
}
</style>