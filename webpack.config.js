'use strict';

const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const colors = JSON.parse(fs.readFileSync('./config/colors.json', 'utf8'));

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PROD;

const config = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html',
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
            },
        }),
        new CopyWebpackPlugin([
            {from: './src/CNAME'},
            {from: './src/favicons', to: './favicons'},
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': IS_DEV ? JSON.stringify('development') : JSON.stringify('production'),
            }
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
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
    postcss: function () {
        return [
            postcssImport,
            cssnext({
                features: {
                    customProperties: {
                        variables: colors,
                    },
                },
            }),
        ];
    },
    devtool: IS_DEV ? '#inline-source-map' : undefined,
};

module.exports = config;
