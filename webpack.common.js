import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
	entry: "./src/scripts/index.js",
	output: {
		filename: "main.js",
		path: path.resolve("./", "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Production",
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/, 
				use: {
					loader: "babel-loader",
					options: {
					},
				},
			},
		],
	},
};

export default config;
