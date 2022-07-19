<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-xl navbar-light">
        <router-link class="navbar-brand" to="/myindex">
          <img src="./img/logo.png" style="width: 200px" alt="" />
        </router-link>
        <!-- <button class="navba-toggler" type="button" data-toggle="collapse" data-tage="#myNav">
                <span class="navbar-toggler-icon"></span>
            </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
                >Z30pro</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{
                        path: '/p1',
                        query: {
                          shopCar: this.shopCar,
                        },
                      }"
                    >
                      <img
                        src="https://oss.static.nubia.cn/active/60a31f5bb512f13.png"
                        alt=""
                      />
                      <p>浩瀚黑</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{
                        path: '/p2',
                        query: {
                          shopCar: this.shopCar,
                        },
                      }"
                    >
                      <img
                        src="https://oss.static.nubia.cn/active/60a31f5bc226689.png"
                        alt=""
                      />
                      <p>星际银</p>
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{
                        path: '/p3',
                        query: {
                          shopCar: this.shopCar,
                        },
                      }"
                    >
                      <img
                        src="https://oss.static.nubia.cn/active/60a31f5bc226689.png"
                        alt=""
                      />
                      <p>黑金传奇</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
                >红魔</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/163514661488.png"
                        alt=""
                      />
                      <p>红魔6S Pro战地迷彩套装</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/163840900628.png"
                        alt=""
                      />
                      <p>红魔6S Pro</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/162210139547.png"
                        alt=""
                      />
                      <p>红魔6R</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/161467918541.png"
                        alt=""
                      />
                      <p>红魔6 Pro</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
                >智能生态</a
              >
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/163564020434.png"
                        alt=""
                      />
                      <p>中兴 AX5400 Pro双频W-iFi</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/163590418688.png"
                        alt=""
                      />
                      <p>红魔飞智G1手柄</p>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img
                        src="https://oss.static.nubia.cn/produc/163297127731.png"
                        alt=""
                      />
                      <p>5000毫安磁吸移动电源</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/brand">品牌</router-link>
            </li>
            <li class="nav-item" style="margin-right: 400px">
              <router-link class="nav-link" to="/service">服务</router-link>
            </li>

            <!-- 用户登录logo -->
            <li class="nav-item" v-if="!userName">
              <router-link class="nav-link" to="/user"
                ><img src="./img/user.png" alt=""
              /></router-link>
            </li>
            <li class="nav-item" v-if="userName">
              <router-link class="nav-link" to="/user"
                ><img style="width: 20px" src="./img/loginUser.jpg" alt=""
              /></router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/shopcar"
                ><img src="./img/shop.jpg" alt=""
              /></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Search"
                ><img src="./img/search.png" alt=""
              /></router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <BottomMsg v-show="$route.meta.show" />
  </div>
</template>

<script>
import axios from "axios";
import pubsub from "pubsub-js";
// import nprogress from "nprogress";
// import "nprogress/nprogress.css";
import BottomMsg from "./components/BottomMsg";

export default {
  name: "App",
  components: { BottomMsg },
  data() {
    return {
      shopCar: JSON.parse(localStorage.getItem("shopCar")),
      students: JSON.parse(localStorage.getItem("students")),
    };
  },
  methods: {
    //添加一个商品对象
    addProduct(productObj) {
      this.shopCar.unshift(productObj);
      localStorage.setItem("shopCar", JSON.stringify(this.shopCar));
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
  mounted() {
    this.$bus.$on("addProduct", this.addProduct);
  },
};
</script>

<style >
.dropdown-menu {
  border-style: none;
}

.dropdown-menu img {
  width: 100px;
}

.dropdown-menu a {
  width: 200px;
  height: 150px;
  font-weight: 100;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0px;
  width: 1000px;
}

.dropdown-menu ul li {
  float: left;
  margin: 3px;
  list-style-type: none;
}
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
</style>