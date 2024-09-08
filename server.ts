import http, { Server } from 'http';
import os from 'os';
import fs from 'fs';
import path from 'path';
import {StringUtil} from './Utils/StringUtil';
import { MathUtil } from './Utils/MathUtil';

const port = 4000;
const host = '127.0.0.1';

// const server : Server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     // res.setHeader('Content-Type','text/html');
//     res.setHeader('Content-Type','application/json');
//     // let osData = {
//     //     totalMemory : os.totalmem(),
//     //     freeMemory : os.freemem(),
//     //     homedir : os.homedir(),
//     //     computerName : os.hostname()
//     // };

//     // fs.readFile(path.join(__dirname , 'data' , 'notes.txt'),'utf-8',(err,result) => {
//     //     if(err){
//     //         throw err;
//     //     }
//     //     fs.writeFile(path.join(__dirname , 'data','data.txt'),result,(err)=>{
//     //         if(err) throw err;
//     //         res.end(`Success`);
//     //     })
//     //     // res.end(`${result}`)
//     // });

//     // fs.readFile(path.join(__dirname,'data','employees.json'),'utf-8',(err,result)=>{
//     //     if(err) throw err;
//     //     res.end(result);
//     // });
    
//     // res.end(`${StringUtil.printTriangle('shreyshah')}`);

//     // res.end(`${MathUtil.printTable(10)}`);



//     // res.end(`${JSON.stringify(osData)}`);
//     // res.end('<h3>welcome to node js rest api with ts</h3>');
// });

const server: Server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    let url:string | undefined = req.url;
    let method:string | undefined = req.method;
    let result : string = '';
    if(url === '/' && method==='GET'){
        result = '<h3>Hello World</h3>';
    }
    else if(url ==='/home' && method==='GET'){
        result = '<h3>Welcome to home page</h3>';
    }
    else{
        result = '<h3>This page is not defined</h3>';
    }
    res.end(result);
})

server.listen(port,host, () => {
    console.log(`server is listening on port number http://${host}:${port}`)
})