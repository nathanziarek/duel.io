module.exports = {
    entry: "./index.js",
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