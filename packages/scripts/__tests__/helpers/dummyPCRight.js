module.exports = {
	appName: 'helloWorld',
	files: [
		{
			entry: {
				foo: './src/index.js',
			},
			name: 'app',
		},
	],
	packageDirPath: 'package',
	packageFiles: ['**/*.js'],
};
