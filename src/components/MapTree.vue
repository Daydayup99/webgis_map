<template>
  <div class="maptree-pannel" v-show="this.$store.getters._getDefaultMapTreeVisible">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.24/init.js',
    css: 'https://js.arcgis.com/4.24/esri/themes/light/main.css',
};

export default {
    name: 'MapTree',
    components: {},
    data() {
        return {
            data: [
                {
                    label: '暖色系图层',
                    layerid: 'layerid', //先随便取名，在项目中，为项目图层的ID属性值
                    layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer', //接地图服务
                    children: [
                        {
                            label: '二级 1-1',
                            children: [
                                {
                                    label: '三级 1-1-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [
                                {
                                    label: '灰色系图层',
                                    layerid: 'layerid',
                                    layerurl: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer',
                                },
                            ],
                        },
                        {
                            label: '二级 2-2',
                            children: [
                                {
                                    label: '三级 2-2-1',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [
                                {
                                    label: '三级 3-1-1',
                                },
                            ],
                        },
                        {
                            label: '二级 3-2',
                            children: [
                                {
                                    label: '三级 3-2-1',
                                },
                            ],
                        },
                    ],
                },
            ],

            defaultProps: {
                children: 'children',
                label: 'label',
            },
        };
    },

    mounted: function() {},

    methods: {
        async handleNodeClick(data) {
            if (data.layerurl) {
                const view = this.$store.getters._getDefaultMapView;
                const [TileLayer] = await loadModules(['esri/layers/TileLayer'], options);
                //获取当前添加到地图上的图层resultLayer
                const resultLayer = view.map.findLayerById('layerid');
                if (resultLayer) view.map.remove(resultLayer);
                //实例化图层
                const layer = new TileLayer({ url: data.layerurl, id: data.layeridA });
                view.map.add(layer);
            }
        },
    },
};
</script>

<style>
.maptree-pannel {
    position: absolute;
    width: 200px;
    top: 20px;
    left: 15px;
    height: 300px;
    background-color: #fff;
}
</style>

