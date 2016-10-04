var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.tsx',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    ],
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "ts-loader"
                ]
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        inline: true
    }
};