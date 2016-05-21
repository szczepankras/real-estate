/**
 * @author Szczepan
 * Created on 21.05.2016.
 */
module.exports = {
    context: __dirname + "\\content",
    entry: "./index.js",
    output: {
        path: __dirname + "\\content",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: "style!css" },
            {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff" },
            {test: /\.ttf$/,  loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.eot$/,  loader: "file" },
            {test: /\.html$/, loader: 'html', exclude: /node_modules/},
            {test: /\.svg$/,  loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};