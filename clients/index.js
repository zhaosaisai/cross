const router = new require('koa-router')()
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

const baseServer = require('..')
const resolve = p => path.resolve(__dirname, p)

// 主页面，可以查看jsonp解决跨域的方案
router.get('/', async (ctx, next) => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../index.html'))
})

// 利用document.domain来解决跨域问题
router.get('/domain', async (ctx, next) => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../domain.html'))
})

router.get('/child/domain', async (ctx, next) => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../child.domain.html'))
})

// 利用location.hash进行跨域
router.get('/la', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../la.html'))
})

router.get('/lb', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../lb.html'))
})

router.get('/lc', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../lc.html'))
})

// 利用window.name进行跨域的方案
router.get('/namea', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../namea.html'))
})

router.get('/nameb', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../nameb.html'))
})

router.get('/namec', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../namec.html'))
})

// 利用postMessage来实现跨域解决
router.get('/postMessageA', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../postMessageA.html'))
})

router.get('/postMessageB', async ctx => {
    ctx.type = 'html'
    ctx.body = await readFileAsync(resolve('../postMessageB.html'))
})

baseServer(router, 8088, false)
