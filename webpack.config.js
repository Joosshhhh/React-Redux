// noinspection WebpackConfigHighlighting
module.exports = {
    devtool: 'inline-sourcemap',
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,

                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }

            }
        ]
    }
};
