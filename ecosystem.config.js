module.exports = {
	apps: [
		{
			name: "yourbooks-next", // name of the project
			script: "node_modules/next/dist/bin/next",
			args: "start -- -p 3010",
			cwd: "path to your repo", // path to your repo
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "500M",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
