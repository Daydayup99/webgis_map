import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const state = {

    _defaultMapView: '',       //默认地图View
    _defaultMapTreeVisible: false,    //地图目录树显示/隐藏
};

const getters = {

    _getDefaultMapView() {
        return state._defaultMapView;
    },
    _getDefaultMapTreeVisible() {
        return state._defaultMapTreeVisible;
    }

};

const mutations = {                      //设置更改store的值

    _setDefaultMapView(state, value) {
        state._defaultMapView = value;
    },
    _setDefaultMapTreeVisible(state, value) {
        state._defaultMapTreeVisible = value;
    }
};

const store = new Vuex.Store({

    state,
    getters,
    mutations,
});


export default store;