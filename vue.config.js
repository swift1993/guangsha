const webpack = require('webpack')

module.exports = {
    publicPath:'./',
    lintOnSave:true,
    outputDir:process.env.outputDir,
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    }
}