'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnext = require('postcss-cssnext');

const config = {
    entry: './src/index.js',
    output: {
        path: __dirname+'/build',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&importLoaders=1!postcss-loader",
            },
        ]
    },
    postcss: function () {
        return [cssnext];
    },
};

module.exports = config;
