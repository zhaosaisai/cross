// function ajax(path) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', path, true)
//         xhr.send(null)
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == 4 && xhr.status == 200) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.response)
//             }
//         }
//     })
// }

// ajax('http://127.0.0.1:8089/packages')
const Axios = axios
const baseUrl = 'http://127.0.0.1:8089/'

// axios.get(`${baseUrl}packages`).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.error(err.message)
// })

// jsonp解决跨域

// function handle(data) {
//     console.log(data)
// }

// function jsonp(path) {
//     const script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = path
//     document.body.appendChild(script)
// }

// jsonp(`${baseUrl}packages?callback=handle`)

// post方法的时候会出现跨域，利用cors来解决
axios.post(`${baseUrl}posts`, {
    name: 'zhaosaisai',
    age: 24
}).then(data => {
    console.log(data)
})