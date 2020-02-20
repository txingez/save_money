"use strict";

const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/entry.js"],
    devServer: {
        hot: true,
        historyApiFallback: true,
        overlay: true,
        watchOptions: {
            poll: true
        }
    },
    stats: {
        children: false
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: "babel-loader"
            },
            {
                test: /\.s(a|c)ss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]?[hash]"
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            fileName: "index.html",
            template: "index.html",
            inject: true
        }),
        new CopyWebpackPlugin([{ from: "./assets", to: "/dist/assets" }])
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
};