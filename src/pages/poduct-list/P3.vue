<template>
  <div>
    <div class="container">
      <div style="margin-top: 20px">
        <a href="../index.html" style="font-size: 15px; color: black">首页</a> /
        <span style="color: gray; font-size: 15px">nubiaZ30pro</span>
        <hr />
      </div>

      <div class="row">
        <div class="col-6">
          <img src="../../img/product-phone.png" alt="" />
        </div>

        <!-- 抬头部分 -->
        <div class="col-6">
          <div style="margin-bottom: 20px">
            <h3>{{ phoneData.title }}</h3>
            <div style="color: red; font-size: 14px; margin-bottom: 20px">
              骁龙888旗舰芯片/120W超级快充/天文影像秒拍星轨<br />
              享12期免息/套装最高立减88元
            </div>
            <h2>¥{{ countPrice }}</h2>
          </div>
          <hr />

          <!-- 活动分栏部分 -->
          <div class="row" style="margin-bottom: 20px">
            <div class="col-2">
              <div style="font-size: 15px; color: gray">
                活&ensp;&ensp;&ensp;动
              </div>
            </div>
            <div class="col-10">
              <div class="col">
                <div class="diy-btn-small">分期</div>
                <span style="font-size: 15px"
                  >享受花呗3期,6期,12期免息分期</span
                >
              </div>
              <div class="col">
                <div class="diy-btn-small">积分</div>
                <span style="font-size: 15px">购买即赠积分，积分可抵现</span>
              </div>
              <div class="col">
                <div class="diy-btn-small">包邮</div>
                <span style="font-size: 15px"
                  >青铜及以下满59、白银满39、黄金及以上包邮</span
                >
              </div>
            </div>
          </div>
          <hr />

          <!-- 地址栏部分 -->
          <div class="row" style="margin-bottom: 20px">
            <div class="col-2">
              <div style="font-size: 15px; color: gray">
                地&ensp;&ensp;&ensp;址
              </div>
            </div>
            <div class="col-10">
              <div class="col">
                <a href="#" style="text-decoration: none; color: black">
                  <img
                    style="width: 20px; height: 24px"
                    src="../../img/定位.png"
                    alt=""
                  />
                  <span style="font-size: 15px">广东省 广州市 荔湾区</span></a
                >
              </div>
            </div>
          </div>
          <hr />

          <!-- 选择颜色 -->
          <div class="row" style="margin-bottom: 20px">
            <div class="col-2">
              <div style="font-size: 15px; color: gray">选择颜色</div>
            </div>
            <div class="col-10" style="margin-bottom: 10px">
              <div class="col">
                <input
                  type="button"
                  class="diy-btn-big diy-btn-big-gray"
                  value="浩瀚黑"
                />
                <input type="button" class="diy-btn-big" value="黑金传奇" />
                <input
                  type="button"
                  class="diy-btn-big diy-btn-big-gray"
                  value="星际银"
                />
              </div>
            </div>

            <!-- 选择版本 -->
            <div class="col-2">
              <div style="font-size: 15px; color: gray">选择版本</div>
            </div>
            <div class="col-10" style="margin-bottom: 20px">
              <div class="col">
                <input
                  type="button"
                  class="diy-btn-big diy-btn-big-gray"
                  value="12GB+256GB"
                />
                <input
                  type="button"
                  class="diy-btn-big diy-btn-big-gray"
                  value="16GB+512GB"
                />
                <input type="button" class="diy-btn-big" value="8GB+256GB" />
              </div>
            </div>

            <!-- 数量 -->
            <div class="col-2">
              <div style="font-size: 15px; color: gray">
                数&ensp;&ensp;&ensp;量
              </div>
            </div>
            <div class="col-10">
              <div class="btn">
                <button @click="losePrice">-</button
                ><span style="color: black">{{ phoneNum }}</span
                ><button @click="addPrice">+</button>
              </div>
            </div>

            <!-- 购物按钮 -->
            <div class="col" style="margin-top: 20px">
              <button
                type="button"
                class="btn btn-secondary"
                style="width: 150px"
              >
                加入购物车
              </button>
              <button type="button" class="btn btn-danger" style="width: 150px">
                继续购买
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div>
      <img src="../../img/pro-1.jpg" alt="" style="width: 100%" />
      <img src="../../img/pro-2.jpg" alt="" style="width: 100%" />
      <video
        src="../../img/演示.mp4"
        autoplay="autoplay"
        controls="controls"
        width="1902px"
      ></video>
      <img src="../../img/pro-3.jpg" alt="" style="width: 100%" />
      <img src="../../img/pro-4.jpg" alt="" style="width: 100%" />
      <img src="../../img/pro-5.jpg" alt="" style="width: 100%" />
      <img src="../../img/pro-6.jpg" alt="" style="width: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "p3",
  data() {
    return {
      phoneData: [],
      phoneNum: 1,
      countPrice: 4399,
    };
  },
  methods: {
    //将App传回的对应数据进行赋值(有了路由传参还使用事件总线的原因是为了刷新页面数据不会消失)
    sentPThreeData3(phoneData) {
      phoneData.forEach((pd) => {
        if (pd.id === "005") {
          this.phoneData = pd;
        }
      });
    },
    sentPThreeData() {
      this.phoneData = this.$route.query.shopCar;
      this.phoneData.forEach((pd) => {
        if (pd.id === "005") {
          this.phoneData = pd;
        }
      });
    },
    addPrice() {
      //增加因数量改变的价格
      this.countPrice += this.phoneData.price;
    },
    losePrice() {
      //减少因数量改变的价格
      if (this.countPrice > this.phoneData.price)
        this.countPrice -= this.phoneData.price;
    },
  },
  watch: {
    deep: true,
    countPrice: {
      handler(newValue, oldValue) {
        if (newValue > oldValue) {
          this.phoneNum++;
        } else {
          this.phoneNum--;
        }
      },
    },
  },
  mounted() {
    //接收App组件的页面数据
    this.$bus.$on("sentPThreeData3", this.sentPThreeData3);
    this.sentPThreeData();
  },
};
</script>

<style scope>
.diy-btn-small {
  border: solid 1px red;
  border-radius: 4px;
  width: 50px;
  height: 20px;
  font-size: 12px;
  color: red;
  text-align: center;
  display: inline-block;
}

.diy-btn-big {
  border: solid 1px red;
  border-radius: 6px;
  width: 130px;
  height: 40px;
  font-size: 14px;
  color: black;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  background-color: white;
}

.diy-btn-big-gray {
  border: solid 1px gray;
  color: gray;
}

.row .btn {
  border: solid 1px;
  color: gainsboro;
  width: 100px;
  text-align: center;
}
.row .btn button {
  width: 30px;
  background-color: white;
  border: 0px;
}
.row .btn a {
  text-decoration: none;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
}
</style>