module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3232
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}