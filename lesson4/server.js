const http = require('http');
const port = 3000;
const hostName = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
    res.writeHead(202, {'Content-Type':'text/plane'})
    res.write('Hello,I am your server');
    res.end();
});

myServer.listen(port,hostName, () => {
    console.log(`my server is running successfully at http://${hostName}:${port}`);
})