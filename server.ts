import http, { Server } from 'http';
const port = 4000;
const host = '127.0.0.1';

const server : Server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h3>welcome to node js rest api with ts</h3>');
});

server.listen(port,host, () => {
    console.log(`server is listening on port number http://${host}:${port}`)
})