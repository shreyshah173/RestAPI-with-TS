import express from 'express';

const appRouter:express.Router = express.Router();

appRouter.get('/',(req,res)=>{
    res.send('<h1>This is / path inside express </h1>');
})

export default appRouter;