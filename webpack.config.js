module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "autoprefixer", "sass"]
            }
        ]
    }
}