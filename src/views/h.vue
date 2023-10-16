<template>
  <div class="main">
    <div class="left">
      <el-col>
        <!-- <h5>此处可以修改列表名</h5> -->

        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>html5补充</span>
            </template>

            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in list1"
                :key="index"
                @click="showmd(item)"
                :index="item"
                >{{ item }}</el-menu-item
              >

              <!-- <el-menu-item>选项33</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>其他</span>
            </template>

            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in list"
                :key="index"
                @click="showmd(item)"
                :index="item"
              >
                {{ item }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>js笔记</span>
            </template>

            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in list2"
                :key="index"
                @click="showmd(item)"
                :index="item"
              >
                {{ item }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>es6</span>
            </template>

            <el-menu-item-group>
              <el-menu-item
                v-for="(item, index) in list3"
                :key="index"
                @click="showmd(item)"
                :index="item"
              >
                {{ item }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="con">
      <component :is="cname" class="markdown-body"> </component>
    </div>
  </div>
</template>

<script>


//该方法 中文路径转化为 英文路径，并作为组件名使用
import { pinyin } from "pinyin-pro";
function topy(str) {
  return pinyin(str, { type: "array", toneType: "none" }).join("");
}

const requireComponents = require.context("../node/其他", false, /\.md/).keys();
let list = [];
tolist(requireComponents, list);

const h5 = require.context("../node/html5补充", false, /\.md/).keys();
let list1 = [];
tolist(h5, list1);

const jsbiji = require.context("../node/js笔记", false, /\.md/).keys();
let list2 = [];
tolist(jsbiji, list2);


const es6 = require.context("../node/es6", false, /\.md/).keys();
let list3 = [];

tolist(es6, list3);

function tolist(requireComponents, list) {
  requireComponents.forEach((item) => {
    //正则匹配文件名
    let reg = /^\.\/(?<name>.+)\.md$/;
    let res = item.match(reg);

    //文件名存入数组
    list.push(res[1]);

    //查看文件名转化后的英文名
    let py = topy(res[1]);
    console.log(py);
  });
}

export default {
  methods: {
    showmd(item) {
      this.cname = topy(item);
    },
  },
  data() {
    return {
      str: "./node/同步异步.md",
      cname: "cssgridbuju",
      list: list,
      list1: list1,
      list2: list2,
      list1: list1,
       list3: list3,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  div {
    flex-grow: 1;
  }
  .left {
    width: 30%;
    margin-top: 70px;
    // background: red;
  }
  .con {
    width: 60%;
    // background: rgb(38, 0, 255);
    margin-left: 50px;
    margin-top: 70px;
    // padding-left: 70px;
    padding-bottom: 70px;
  }
}
.el-menu-item {
  min-width: 50px;
}
</style>