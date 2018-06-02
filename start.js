const { spawn } = require('child_process')
const path = require('path')

const log = console.log.bind(console)
const streams = [
    spawn('node', [path.resolve(__dirname, './clients/index.js')]),
    spawn('node', [path.resolve(__dirname, './servers/index.js')])
]

// 启动程序
streams.forEach((stream, index) => {
     const flag = index === 0 ? 'Client' : 'Server'

    stream.stdout.on('data', (data) => {
        log(`${flag} Success`)
        log(data.toString());
    })

    stream.stderr.on('data', (data) => {
        log(`${flag} Error`)
        log(data.toString())
    })
})