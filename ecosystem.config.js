// PM2 Configuration
module.exports = {
	apps: [
		{
			name: "smui_demo",
			script: "serve ./dist -l 5005 --no-port-switching",
			watch: true,
			autorestart: true,
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
