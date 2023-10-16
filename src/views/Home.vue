<template>
  <div id="app">
    <div
      id="main"
      style="width: 100vw; height: 100vh; color: #fff; overflow: hidden; text-align: center"
    >
      <div class="kz" @click="drawer = true" type="primary">
        MENU
        <div>
          <i class="el-icon-s-fold" style="font-size: 25px"></i>
        </div>
        <!-- 抽屉   -->
      </div>
      <div style="font-size: 70px; margin-top: 250px; text-align: center">WCJ的个人博客</div>
      <div style="margin-top: 30px; text-align: center">————愿,盛开,永不凋零</div>
      <div class="acon">
        <div class="alink" v-for="(item, index) in item" :key="index" @click="link_to(item.href)">
          <img :src="item.img" alt="" />
          <div style="color: red;margin-top: 10px;">{{ item.name }}</div>
        </div>
      </div>
      <i class="el-icon-caret-bottom" style="" @click="tocontent"></i>
    </div>
    <!-- <div id="nav" class="markdown-body " style=""> -->

    <!-- <div>
         <div v-for="(item,index) in list" :key="index" @click="showmd(item)">{{item}}</div>
       </div>

       <component :is="cname" >

       </component> -->

    <!-- </div> -->

    <el-drawer
      :visible.sync="drawer"
      :with-header="true"
      direction="ltr"
      style="z-index: 999"
      size="20%"
    >
    </el-drawer>
  </div>
</template>

<script>
const requireComponents = require.context("../node/html5补充", false, /\.md/).keys();
import { pinyin } from "pinyin-pro";

console.log(pinyin("汉语拼音3", { type: "array", toneType: "none" }).join(""));

function topy(str) {
  return pinyin(str, { type: "array", toneType: "none" }).join("");
}
let list = [];
requireComponents.forEach((item) => {
  let reg = /^\.\/(?<name>.+)\.md$/;
  let res = item.match(reg);
  list.push(res[1]);
  let py = topy(res[1]);
  console.log(py);
});

export default {
  methods: {
    async textmd() {},
    showmd(item) {
      this.cname = topy(item);
    },
    tocontent() {
      //页面跳转
      this.$router.push("./content");
    },
    link_to(dz){
      window.open(dz)
    }
  },
  mounted() {
    // console.log(requireComponents);
  },
  beforeCreate() {},
  data() {
    return {
      str: "./node/同步异步.md",
      cname: "cssgridbuju",
      list: list,
      // mainstyle:`url(./assets/img/main.png)`,
      drawer: false,
      item: [
        {
          name: "音乐项目",
          img: "https://img.88icon.com/upload/jpg/20210524/4d701ad487e28c7ae2c97184064c65e9_67077_800_800.jpg!88con",
          href: "http://wancj.top",
        },
        { name: "智慧农业", img: "https://cn.vuejs.org/images/logo.svg", href: "http://wancj.top/newny" },
        { name: "企业管理系统", img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1bCGOL.img", href: "http://wancj.top/erp" },
        { name: "个人博客", img: "https://cn.vitejs.dev/logo-with-shadow.png", href: "http://wancj.top/bk" },
      ],
    };
  },
  components: {
    // markdown,
    //  " markdown":resolve=>(['./node/同步异步.md'],resolve)
    //  "markdown1": ()=>import("./node/同步异步.md")
    //  "我的"：
  },
};
</script>

<style lang="less">
.acon {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 300px;
  margin-top: 100px;
  img {
    width: 50px;
    height: 50px;
  }
}
.alink {
  // background-color: #fff;
  width: 100px;
  height: 100px;
}
.alink:hover{
  // opacity: 0.8;
  background-color: rgba(118,120,121,.5);
  border-radius: 20px ;
  

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#main {
  width: 1000px;
  background-image: url(../assets/img/11.jpg);
  background-size: cover;
}

@keyframes iconmove {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
.el-icon-caret-bottom {
  // margin-top: 350px;
  font-size: 90px;
  animation: iconmove 1s infinite;

  position: absolute;
  bottom: 100px;
}
.kz {
  position: absolute;
  top: 50px;
  left: 30px;
  width: 80px;
  height: 40px;
  border: aliceblue 1px solid;
  //  line-height: 10px;
  div {
    height: 40px;
    display: inline-block;
    i {
      line-height: 40px;
    }
  }
}
</style>
