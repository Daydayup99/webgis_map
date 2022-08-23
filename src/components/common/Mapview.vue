<template>
  <div id="mapview">
    <div id="basemapToggle"></div>
    <div id="scaleBar"></div>
    <div id="zoom"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.24/init.js',
    css: 'https://js.arcgis.com/4.24/esri/themes/light/main.css',
};

export default {
    name: 'Mapview',
    components: {},

    mounted: function() {
        this._createMapView();
    },
    methods: {
        getDataFn() {
            axios.get('api/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer').then((_d) => {
                console.log(_d);
            });
        }, //解决跨域问题

        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom',
                ],
                options,
            );

            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });

            const map = new Map({
                basemap,
            });
            const mapView = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [109.517985, 18.257637],
            });

            //实例化底图切换控件
            const basemapToggle = new BasemapToggle({
                view: mapView, // 用于访问地图的“街道矢量”底图的视图
                nextBasemap: 'hybrid', //允许切换到“混合”底图,控制下一份底图是什么，hybrid是官网内置的一张图
                container: 'basemapToggle',
            });

            mapView.ui.add(basemapToggle);
            // {position: 'bottom-right',} //position就是控制实例化微件在整个地图上的位置

            //实例化比例尺
            const scaleBar = new ScaleBar({
                view: mapView,
                container: 'scaleBar', //自定义位置
                unit: 'metric',
            });
            mapView.ui.add(scaleBar);

            //实例化底图缩放
            const zoom = new Zoom({
                view: mapView,
                container: 'zoom',
            });
            mapView.ui.add(zoom);

            //去掉右上角的缩放
            mapView.ui.components = [];

            this.$store.commit('_setDefaultMapView', mapView); // vuex存取值

            console.log(mapView);
        },
    },
};
</script>

<style>
#mapview,
.mapview-pannel {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemapToggle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}
#scaleBar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}
#zoom {
    position: absolute;
    right: 20px;
    bottom: 100px;
}
</style>

