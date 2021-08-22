// PM2 Configuration
module.exports = {
	apps: [
		{
			name: "smui_demo",
			script: "serve -s -l 5005 ./dist",
			watch: true,
			autorestart: true,
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
