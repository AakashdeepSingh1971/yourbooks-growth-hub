module.exports = {
	apps: [
		{
			name: "onepage-yourbooks",
			script: "node_modules/next/dist/bin/next",
			args: "start -p 3010",
			instances: 1,
			autorestart: true,
			max_memory_restart: "500M",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
