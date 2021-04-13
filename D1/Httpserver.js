const http = require('http');
//const msg = "Server is working properly"

const server = http.createServer((req, res) => {
     res.write("Server is working properly.....")
     res.end()
    console.log("server created")
})

server.listen(3000, ()=> {
    console.log("Server is listening at 3000....")
})