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
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};