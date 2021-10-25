const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: './',
        compress: true,
        port: (process.env.PORT || 8000),
        allowedHosts: [
            'localhost:9000'
        ],
        // stats: 'errors-only',
        // clientLogLevel: 'error',
    },
});