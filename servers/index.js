const router = new require('koa-router')()
const bodyParser = require('koa-bodyparser')
const baseServer = require('..')


router.get('/packages', async ctx => {
    const package = require('../package.json')
    const query = ctx.request.query
    ctx.type = 'script'
    ctx.body = `${query.callback}(${JSON.stringify(package)})`
})

router.options('/posts', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8088')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    ctx.body = ''
})

router.post('/posts', async ctx => {
    console.log(ctx.request.body)
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8088')
    ctx.body = ctx.request.body
})

baseServer(router, 8089, [
    bodyParser()
])
