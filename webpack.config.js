var path = require('path');
var webpack = require('webpack');

module.exports = {
    cache: true,

    entry: {
        bundle: "./src/js/main"
    },

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    devServer: {
        inline: true,
        colors: true,
        port: 3333
    },

    devtool: "#inline-source-map",

    module: {
        loaders: [
            {
                test: /\.md/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["react-hot", "babel"]
            }
        ]
    }


};