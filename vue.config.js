const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
		loaderOptions: {
			sass: {
				additionalData: `@import '@/scss/_master.scss';`
			}
		}
	},
	devServer: {
		host: '0.0.0.0'
	}
})
