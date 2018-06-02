const Koa = require('koa')
const path = require('path')

module.exports = (router, port, isServer = true, middlewares = []) => {
    const app = new Koa()
    if (Array.isArray(isServer)) {
        middlewares = isServer
        isServer = true
    }
    // 使用中间件
    middlewares.forEach(middleware => app.use(middleware))

    !isServer && app.use(require('koa-static')(path.resolve(__dirname, './statics')));

    app.use(router.routes()).use(router.allowedMethods()).listen(port, () => {
        console.log(`${isServer ? 'server' : 'client'} is running on ${port}`)
    })
}