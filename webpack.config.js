module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules=true",
                options: {
                    modules: true,
                },
            },
        ],
    },
};