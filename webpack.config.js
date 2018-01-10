"use strict";

var webpack = require("webpack");
var path    = require("path");
var FEWP    = require("friendly-errors-webpack-plugin");

var config  = {
    entry: path.resolve(__dirname, "src") + "/index.js",
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "/bundle.js"
    },
    stats: false,
    plugins: [
        new FEWP()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader"
            }
        ]
    }
}

module.exports = config;