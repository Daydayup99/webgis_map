<template>
  <div id="app">
    <el-container class="outpanel">
      <el-header class="sys-header">一张图系统</el-header>
      <el-container class="contpanel">
        <el-aside width="200px" class="sys-menu">左侧菜单</el-aside>
        <el-main>地图</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
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
    background-color: #409eff;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
}
.sys-menu {
    background-color: #c0c4cc;
}
</style>

