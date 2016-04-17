'use strict';

const webpack = require('webpack');
const fs = require('fs');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const colors = JSON.parse(fs.readFileSync('./config/colors.json', 'utf8'));

const IS_PROD = process.env.NODE_ENV === 'production';
const IS_DEV = !IS_PROD;

let webpackPlugins = [
    new HtmlPlugin({
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
    new CopyPlugin([
        {from: './src/static', to: './'},
    ]),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': IS_DEV ? JSON.stringify('development') : JSON.stringify('production'),
        }
    }),
];

if (IS_DEV) {
    webpackPlugins.push(
        new OpenBrowserPlugin({
            url: 'http://localhost:3000',
        })
    );
}

const config = {
    entry: './src/index.js',
    output: {
        path: './build',
        filename: 'bundle.js',
    },
    plugins: webpackPlugins,
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
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
