var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",
                // Skip any files outside of your project's 'src' directory
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /node_modules/,
                // Only run '.js' and '.jsx' files through Babel
                test: /\.jsx?$/,
                // Options to configure Babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader?modules',
                'postcss-loader'
              ]
            },
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    output: {
        filename: 'bundle.js',

        path: path.resolve(__dirname, 'src'),

        publicPath: 'http://localhost:8080/'
        // necessary for HMR to know where to load the hot update chunks
    },
    entry: [
        'react-hot-loader',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js'
    ],
    context: path.resolve(__dirname, 'src'),

    devtool: 'eval',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'src'),
        // match the output path

        publicPath: 'http://localhost:8080/',
        // match the output `publicPath`

        compress: true
  },
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
    ],
    watch: true,
    colors: true,
    progress: true
};
