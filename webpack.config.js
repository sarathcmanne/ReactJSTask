var path =require('path');
module.exports={
	entry: './src/index.jsx',

	output: {		
		path: path.resolve(__dirname,'dist'),
		 publicPath: ('dist'),
		filename: 'appbundle.js'	
	},
	module: {
		rules: [
			{
				test:/\.jsx?$/,
				loaders:'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
	