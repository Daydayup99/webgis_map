module.exports = {
    devServer: {
        //配置跨域
        proxy: {
            '/api': {
                //对象：目标的路径等；
                target: 'http://map.geoq.cn/',
                //允许跨域
                changOrigin: true,
                //重写路径
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}//解决跨域问题