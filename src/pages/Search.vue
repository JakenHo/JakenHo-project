<template>
  <MyNotepad />
</template>


<script>
import { mapState } from "vuex";
import MyNotepad from "./MyNotepad";
export default {
  name: "Search",
  components: { MyNotepad },
  data() {
    return {
      keyword: "" || undefined, //路由传参params设置了参数可传可不传，所以要添加undefined选项，避免路径错误
    };
  },
  computed: {
    ...mapState("search", ["categoryList", "bannerList", "searchList"]),
  },
  methods: {
    goSearchTwo() {
      //判断params是否存在
      if (this.$route.query) {
        let location = { name: "user", params: { keyword: this.keyword } };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
    //event 获取界面返回的事件
    goSearch(event) {
      //返回点击事件的每一个节点
      let node = event.target;
      //将节点里面的自定义属性结构出来(注意dataset中的变量一定是小写,哪怕你上面定义的是大写)
      let { categoryname, categoryid, category2id, category3id } = node.dataset;
      //判断点击的是不是a标签 一级目录
      if (categoryname) {
        //loction变量用于后期自定义导航路由
        let loction = { name: "user" };
        //导航栏显示的第一个query参数
        let query = { categoryName: categoryname };
        //判断是不是一级目录
        if (categoryid) {
          //将一级目录的Id赋值给变量
          query.categoryId = categoryid;
        } else if (category2id) {
          //将二级目录的Id赋值给变量
          query.category2Id = category2id;
        } else {
          //将三级级目录的Id赋值给变量
          query.category3Id = category3id;
        }
        //判断params是否存在
        if (this.$route.params) {
          loction.params = this.$route.params;
          loction.query = query;
          this.$router.push(loction);
        }
      }
    },
    //自动映射Actions  modules名字   方法名      dispatch方法名
    // ...mapActions("search", { getCategory: "getCategory" }),
  },
  mounted() {},
};
</script>

<style scoped>
.total_right {
  width: 360px;
  height: 300px;
  border: solid 1px black;
}
.total {
  margin-left: 390px;
  width: 360px;
  border: solid 1px black;
}
.c1 {
  margin-left: 10px;
}
.c2 {
  margin-left: 50px;
}
.c3 {
  margin-left: 80px;
}
a {
  text-decoration: none;
  color: rgb(48, 3, 119);
}
.control {
  width: 360px;
}
.input-group-text {
  width: 60px;
  background: skyblue;
}
.type-nav {
  border-bottom: 2px solid #e1251b;
}
</style>