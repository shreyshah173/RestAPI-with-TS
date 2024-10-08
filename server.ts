import http, { Server } from 'http';
import os from 'os';
import fs from 'fs';
import path from 'path';
import {StringUtil} from './Utils/StringUtil';
import { MathUtil } from './Utils/MathUtil';
import { ApiRoutes } from './apiRoutes/apiRoutes';

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
    res.setHeader('Content-Type','application/json');

    // ApiRoutes.mapRoutes(req,res);
    try{
        if ( req.url ==='/users' && req.method==='POST'){
            let body:any = '';
            req.on('data' , (chunk) => {
                body += chunk;
            }).on('end' , () => {
                let formatData = JSON.parse(body);
                // res.end(`${JSON.stringify(formatData)}`);
                if(formatData.name==='shrey' && formatData.password==='shrey'){
                    res.end(`successful login`);
                }
                else{
                    res.end(`Please enter correct password`);
                }
            })
        }
    }
    catch{
        throw Error
    }

})

server.listen(port,host, () => {
    console.log(`server is listening on port number http://${host}:${port}`)
})