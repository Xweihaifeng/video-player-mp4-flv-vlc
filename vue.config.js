module.exports = {
    publicPath: './',
    
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "static",

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)
    indexPath: 'index.html',
    
    // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: false,
    
    devServer: {
        open: true, //---------------------------------------浏览器自动打开页面
        host: "localhost", //--------------------------------如果是真机测试，就使用这个IP
        port: 5555, //---------------------------------------代理端口
        https: false,
        hotOnly: false, //-----------------------------------热更新（webpack已实现了，这里false即可）
        proxy: { //------------------------------------------配置跨域
            '/api': { //-------------------------------------代理api
                target: "http://223.70.215.65:24006", //-----代理服务器api地址
                ws: true, //---------------------------------proxy启用websockets
                changOrigin: true, //------------------------是否跨域
                pathRewrite: { //----------------------------重写路径
                    '^/api': '/'
                }
            }
        }
    },

    chainWebpack: config => {
        config.module
            .rule('swf')
            .test(/\.swf$/)
            .use('url-loader')
            .loader('url-loader')
            .options({limit: 10000})
    }
}
