import Vue from 'vue';
import VueRouter from 'vue-router';
import DataVisual from './../pages/DataVisual';
import OneMap from './../pages/OneMap';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(() => {
    });
};//解决vue-router路由重复点击报错




Vue.use(VueRouter);




export default new VueRouter({
    routes: [
        {
            path: '/',
            component: DataVisual,
        },
        {
            path: '/OneMap',
            component: OneMap,
        }
    ],

});



