module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	env: {
		production: {
			plugins: ['react-native-paper/babel'],
		},
	},
	plugins: [
		[
			'module-resolver',
			{
				cwd: 'babelrc',
				extensions: ['.ts', '.tsx', '.js', '.json'],
				alias: {
					'@environments': './src/environments',
					'@assets': './src/assets',
					'@pages': './src/pages',
					'@models': './src/shared/models',
					'@shared': './src/shared',
					'@services': './src/shared/services',
					'@styles': './src/shared/styles',
					'@components': './src/shared/components',
					'@routers' : './src/shared/routers',
					'@databases' : './src/shared/databases',
					'@base' : '.'
				}
			}
		],
		'jest-hoist'
	]
};