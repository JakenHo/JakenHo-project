<template>
  <div class="footer-box">
    <div style="margin: 10px 30px">
      <h6>商品清单</h6>
      <div
        @mouseenter="changeColor(index)"
        :class="{ row: true, cur: currentIndex === index }"
        @mouseleave="leaveColor"
      >
        <div class="col box">
          <img src="../img/phone.png" alt="" />
        </div>
        <div class="col-4 box">
          <h5>{{ shopCarList.title }}</h5>
        </div>
        <div class="col box" style="color: gray">
          <h5>￥{{ shopCarList.price }}</h5>
        </div>
        <div class="col box">
          <div class="btn">
            <button @click="losePrice">-</button
            ><span style="color: black">{{ phoneNum }}</span
            ><button @click="addPrice">+</button>
          </div>
        </div>
        <div class="col box">
          <h5>￥{{ countPrice }}</h5>
        </div>
        <div class="col box">
          <a href="#">Х</a>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: ["shopCarList", "index"],
  data() {
    return {
      phoneNum: 1,
      countPrice: this.shopCarList.price,
      currentIndex: -1,
    };
  },
  methods: {
    addPrice() {
      this.countPrice += this.shopCarList.price;
    },
    losePrice() {
      if (this.countPrice > this.shopCarList.price)
        this.countPrice -= this.shopCarList.price;
    },
    changeColor(index) {
      this.currentIndex = index;
    },
    leaveColor() {
      this.currentIndex = -1;
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
        this.$bus.$emit("getItemPrice", this.shopCarList.id, newValue);
      },
    },
  },
  mounted() {
    this.$set(this.shopCarList, "countPrice", this.countPrice);
  },
};
</script>

<style scope>
.cur {
  background: white;
}
.top-box {
  width: 1100px;
  height: 140px;
}

.top-body-box {
  width: 1200px;
  height: 1408px;
}

.top-box ul {
  list-style-type: none;
  width: 1200px;
  margin-top: 20px;
  float: left;
}

.top-box ul li {
  text-align: center;
  height: 60px;
  float: left;
  width: 260px;
  margin-top: 40px;
}

.top-box ul li img {
  width: 220px;
}

.footer-box {
  width: 1200px;
  /* height: 690px; */
  margin-top: 20px;
}

.footer-box .row .box {
  margin-top: 10px;
}

.footer-box .row .box .btn {
  border: solid 1px;
  color: gainsboro;
  width: 110px;
  text-align: center;
}
.footer-box .row .box .btn button {
  width: 30px;
  background-color: white;
  border: 0px;
}

.footer-box .row a {
  text-decoration: none;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
}

.footer-box button {
  width: 160px;
}

.font-color a {
  color: black;
}
</style>