const http = require('http')

const server = http.createServer((req,res) =>{
    console.log(req)
    //process.exit()
    if(req.url === '/'){
        res.write("<h1>Hello everybody</h1>")
        res.end()
    }
    if(req.url === '/about'){
        res.write("<h1>Hello, it is about</h1>")
        res.end()
    }
})

server.listen(3000)