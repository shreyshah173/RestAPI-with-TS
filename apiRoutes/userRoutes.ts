import express from 'express';
import apiMiddle from '../middlewares/apiMiddle';

const userRouter : express.Router = express.Router();

userRouter.get('/' ,apiMiddle, (req,res) => {
    res.send('/users/ - path');
})


userRouter.post('/login',(req,res)=>{
    let formData = req.body;
    res.status(200).json({
        msg : "form data is recieved here",
        formData : formData
    })
})


export default userRouter;