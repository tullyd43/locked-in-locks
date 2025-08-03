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
		new HtmlWebpackPlugin({
			filename: "about-us.html",
			template: "src/about-us.html",
		}),
		new HtmlWebpackPlugin({
			filename: "contact-us.html",
			template: "src/contact-us.html",
		}),
		new HtmlWebpackPlugin({
			filename: "faq.html",
			template: "src/faq.html",
		}),
		new HtmlWebpackPlugin({
			filename: "security-tips.html",
			template: "src/security-tips.html",
		}),
		new HtmlWebpackPlugin({
			filename: "service-areas.html",
			template: "src/service-areas.html",
		}),
		new HtmlWebpackPlugin({
			filename: "services.html",
			template: "src/services.html",
		}),
		new HtmlWebpackPlugin({
			filename: "services/residential-services.html",
			template: "src/services/residential-services.html",
		}),
		new HtmlWebpackPlugin({
			filename: "services/commercial-services.html",
			template: "src/services/commercial-services.html",
		}),
		new HtmlWebpackPlugin({
			filename: "services/automotive-services.html",
			template: "src/services/automotive-services.html",
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
					options: {},
				},
			},
		],
	},
};

export default config;
