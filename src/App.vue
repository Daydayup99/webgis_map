<template>
  <div id="app">
    <el-container class="outpanel">
      <el-header class="sys-header">一张图项目系统</el-header>
      <el-container class="contpanel">
        <el-aside width="200px" class="sys-menu">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="true"
            active-text-color="bule"
          >
            <el-menu-item index="1">
              <i class="el-icon-monitor"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-picture"></i>
              <span slot="title">一张图</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main class="cont">
          <Mapview/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Mapview from './components/common/Mapview';

export default {
    name: 'App',
    components: {
        Mapview,
    },
};
</script>

<style>
html,
body,
#app {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
}
.outpanel,
.contpanel {
    height: 100%;
}
.sys-header {
    background-color: #303133;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}
.sys-menu {
    background-color: #545c64;
    width: 64px !important;
}
.cont {
    padding: 5px !important;
}
.el-menu-vertical-demo {
    width: 200px;
    min-height: 200px;
    background-color: #545c64 !important;
}
</style>

