import http, { Server } from 'http';
import os from 'os';
import fs from 'fs';
import path from 'path';

const port = 4000;
const host = '127.0.0.1';

const server : Server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    let osData = {
        totalMemory : os.totalmem(),
        freeMemory : os.freemem(),
        homedir : os.homedir(),
        computerName : os.hostname()
    };

    fs.readFile(path.join(__dirname , 'data' , 'notes.txt'),'utf-8',(err,result) => {
        if(err){
            throw err;
        }
        fs.writeFile(path.join(__dirname , 'data','data.txt'),result,(err)=>{
            if(err) throw err;
            res.end(`Success`);
        })
        // res.end(`${result}`)
    });
    // res.end(`${JSON.stringify(osData)}`);
    // res.end('<h3>welcome to node js rest api with ts</h3>');
});

server.listen(port,host, () => {
    console.log(`server is listening on port number http://${host}:${port}`)
})