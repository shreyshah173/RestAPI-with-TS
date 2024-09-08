import express from 'express';
import appRouter from './apiRoutes/appRoutes';
import userRouter from './apiRoutes/userRoutes';
import apiMiddle from './middlewares/apiMiddle';
const app:express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(apiMiddle);

app.get('/',(req,res) => {
    // res.statusCode = 200;
    // res.send({"message":"123456"});

    res.status(200).send(`<h1 style="color:red">Hello Baby</h1>`)
})

app.use('/app',appRouter);
app.use('/users',userRouter);

app.listen(4000,()=>{
    console.log('hello');
});