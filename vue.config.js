module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/farmer-ferry/'
        : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'CRAP'
                return args
            })
    }
}
