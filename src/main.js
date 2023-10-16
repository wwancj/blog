import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { pinyin } from 'pinyin-pro';
import 'github-markdown-css'
// import "./assets/rest.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import "./assets/cobalt.css"
Vue.prototype.pinyin=pinyin
Vue.config.productionTip = false;

function topy(str){
  return  pinyin(str, { type: 'array',toneType: 'none' } ).join("")
}




  // 打印结果
// 遍历出每个组件的路径
const requireComponents = require.context('./node/html5补充', false, /\.md/)

 requireComponents.keys().forEach(fileName=>{
    reduct(fileName, requireComponents)
  })


const qita=require.context('./node/其他', false, /\.md/)
qita.keys().forEach(fileName=>{
    reduct(fileName,qita)
  })


  const jsbiji=require.context('./node/js笔记', false, /\.md/)
jsbiji.keys().forEach(fileName=>{
    reduct(fileName,jsbiji)
  })

  
 
  const es6=require.context('./node/es6', false, /\.md/)
es6.keys().forEach(fileName=>{
    reduct(fileName,es6)
  })
 

function reduct(fileName,main){
  // 组件实例
  const reqCom = main(fileName)
  // 截取路径作为组件名
  const reqComName =  topy(fileName.replace(/\.\/(.*)\.md/,'$1'))
 console.log(reqComName);
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
}





new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
