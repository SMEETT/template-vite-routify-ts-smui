const preprocess = require("svelte-preprocess");
// import preprocess from "svelte-preprocess";

module.exports = {
	preprocess: [
		preprocess({
			postcss: import("./postcss.config.js"),
			// scss: {
			// 	includePaths: ["themes", "node_modules"],
			// },
		}),
	],
};
