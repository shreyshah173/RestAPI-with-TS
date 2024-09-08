import express from 'express';

let apiMiddle = (req:express.Request,res:express.Response,next:express.NextFunction) => {
    let url = req.url;
    let method = req.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result = `[${url}] - [${method}] - [${date}] - [${time}]`;
    console.log(result);

    next();
}

export default apiMiddle;