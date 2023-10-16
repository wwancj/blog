<template>
  <div class="content">
    <div class="navcon">
      <nav>
        <div style="font-size: 40px">wancj</div>

        
        <div class="nav_1">
          <router-link to="/content/h" tag="div">
             网站首页
          </router-link>
         
          </div>
        <div class="nav_1">文章专栏</div>
        <div class="nav_1">归档</div>
        <div class="nav_1">资源共享</div>
        <div class="nav_1">点点滴滴</div>
        <div class="nav_1">关于本站</div>
        <div class="nav_1">登录/注册</div>
      </nav>
    </div>

    
   


   <router-view>

    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  background-image: url("../assets/img/download.png");
  min-height: 103vh;
}
.navcon {
  background-color: #393d49;
  color: #ffffff;
  height: 80px;
  line-height: 80px;
}
nav {
  display: flex;
  flex-wrap: nowrap;
  width: 70%;
  margin: 0 auto;

  div {
    flex-grow: 1;
  }
}

@keyframes nav {
  0% {
    width: 0%;
    transform: translateX(50%) translateY(-4px);
  }
  100% {
    width: 100%;
    transform: translateX(0) translateY(-4px);
  }
}
.nav_1:hover::after {
  transform: translateY(-4px);
  animation: nav 0.4s;
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: red;
}

.nav_1{
  text-align: center;
}

</style>

