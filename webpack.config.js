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
                // Only run '.js' and '.jsx' files through Babel
                test: /\.jsx?$/,
                // Options to configure Babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    entry: [
        './src/index.js'
    ],
    plugins: [
        new WebpackNotifierPlugin(),
    ],
    watch: true,
    colors: true,
    progress: true
};
