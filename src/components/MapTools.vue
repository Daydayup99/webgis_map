<template>
  <div class="maptools-view">
    <span class="maptools-item" @click="handleMapToolsitemClick" id="xzqh">行政区导航丨</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="maptree">目录树管理丨</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="distance">距离测量丨</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="area">面积测量丨</span>
    <span class="maptools-item" @click="handleMapToolsitemClick" id="clear">清屏</span>
  </div>
</template>

<script>
export default {
    name: 'MapTools',
    methods: {
        //绑定点击事件是为了控制目录树弹窗面板的显示和隐藏
        handleMapToolsitemClick(e) {
            console.log(e.target.id);
            switch (e.target.id) {
                case 'xzqh':
                    break;
                case 'maptree':
                    this.open();
                    break;
                case 'distance':
                    break;
                case 'area':
                    break;
                case 'clear':
                    break;
                default:
                    break;
            }
        },
        open() {
            let currentVisible = this.$store.getters._getDefaultMapTreeVisible;
            this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
        },
    },
};
</script>

<style>
.maptools-view {
    position: absolute;
    padding: 0 15px;
    height: 30px;
    top: 20px;
    right: 15px;
    background-color: #fff;
}
.maptools-item {
    line-height: 30px;
    margin-left: 15px;
    color: #000;
    cursor: pointer; /*鼠标放上去会有小手样式*/
}
.maptools-item:first-child {
    margin-left: 0;
}
</style>

