const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home Page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>404</p>
        <a href="/">Back home</a>
    `)
})

server.listen(5000)