module.exports = {
	apps: [
		{
			name: '3022-pottencia-app',
			script: 'node_modules/next/dist/bin/next',
			args: 'start -p 3022',
			cwd: './',
			exec_mode: 'fork',
			watch: false
		}
	]
}
