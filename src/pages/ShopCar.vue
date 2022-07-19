<template>
  <div class="container">
    <div class="top-box">
      <div>
        <ul>
          <li>购物车<img src="../img/line.png" alt="" /></li>
          <li>确认订单<img src="../img/line-off.png" alt="" /></li>
          <li>支付订单<img src="../img/line-off.png" alt="" /></li>
          <li>完成支付<img src="../img/line-off.png" alt="" /></li>
        </ul>
        <div>
          <ShopItem
            v-for="(shop, index) in shopCarList"
            :shopCarList="shop"
            :key="shop.id"
            :index="index"
          />
        </div>
        <div style="margin: 40px 30px">
          <div class="row">
            <div class="col box" style="margin-top: 0px">
              <h6>已选择一件商品</h6>
            </div>
            <div class="col-4 box">
              <div class="row" style="margin-top: 20px">
                <div
                  class="col"
                  style="font-size: 10px; color: gray; margin-top: 8px"
                >
                  <span>合计(不含运费)</span>
                </div>
                <div class="col">
                  <h3>￥{{ allCountPrice }}</h3>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div style="margin-left: 80%">
          <button type="button" class="btn btn-light">继续购物</button>
          <button type="button" class="btn btn-danger">去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopItem from "../components/ShopItem";
import { mapActions, mapState } from "vuex";
export default {
  name: "ShopCar",
  components: { ShopItem },
  data() {
    return {
      allCountPrice: 13197,
      // shopCarList: JSON.parse(localStorage.getItem("shopCar")),
    };
  },
  computed: {
    ...mapState("shopCar", ["shopCarList"]),
  },
  methods: {
    ...mapActions("shopCar", { getShopCarDate: "getShopCar" }),
    // ...mapState({
    //   shopCarList: (state) => {
    //     return state.shopCar.shopCarList;
    //   },
    // }),

    //获取商品传回的数据
    getItemPrice(id, price) {
      this.allCountPrice = 0; //将统计的数组归零

      //将数组初始化赋值 不然会出现undefined
      this.shopCarList.forEach((sp) => {
        if (sp.actPrice === undefined) {
          //sp.actPrice是变动的价格，sp.price 是数组的初始价格
          sp.actPrice = sp.price;
        }
      });

      //将父组件传回的id，进行动态数据赋值
      this.shopCarList.forEach((sp) => {
        if (sp.id === id) {
          //price是商品传回来的浮动价格
          sp.actPrice = price;
        }
      });

      //将子组件传回的数据进行累加
      this.shopCarList.forEach((sp) => {
        this.allCountPrice += sp.actPrice;
      });
    },
  },
  mounted() {
    this.getShopCarDate(); //操作shopCar的Actionos
    this.$bus.$on("getItemPrice", this.getItemPrice);
  },
  beforeDestroy() {
    // this.$bus.$off("sentShopCarData");
    this.$bus.$off("getItemPrice");
  },
};
</script>

<style scope>
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
  margin-top: 60px;
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