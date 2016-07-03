var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: './src/index.js',
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3737
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-0', 'react']
                }
            },
            {test: /(\.css)$/, loaders: ['style', 'css'],exclude:/node_modules/},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file',exclude:/node_modules/},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000',exclude:/node_modules/},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream',exclude:/node_modules/},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml',exclude:/node_modules/}
        ]
    }
};