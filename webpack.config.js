import "babel-core/register";
import path from "path";
import webpack from "webpack";

export var config = {
    context : path.resolve("src"),
    resolve: {
        root: path.resolve(__dirname + "/src"),
        extensions: ["", ".js", ".json"]
    },
    output : {
        path: path.resolve(__dirname + "/build"),
        publicPath : "/build",
        filename: "[name].js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins : [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    watch : true
};