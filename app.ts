import express from 'express';
import appRouter from './apiRoutes/appRoutes';
const app:express.Application = express();



app.get('/',(req,res) => {
    // res.statusCode = 200;
    // res.send({"message":"123456"});

    res.status(200).send(`<h1 style="color:red">Hello Baby</h1>`)
})

app.use('/app',appRouter);


app.listen(4000,()=>{
    console.log('hello');
});