import express from 'express';
import apiMiddle from '../middlewares/apiMiddle';
import bcrypt from 'bcryptjs';

const userRouter : express.Router = express.Router();

userRouter.get('/' ,apiMiddle, (req,res) => {
    res.send('/users/ - path');
})


userRouter.post('/login', async (req,res)=>{
    let formData = req.body;
    try{
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(formData.password, salt);

        console.log("hash", hash);
        res.status(200).json({
            msg : "form data is recieved here",
            formData : formData,
            hasedPassword : hash
        })

        // if(formData.email && formData.password){
        //     res.status(200).json({
        //         msg : "form data is recieved here",
        //         formData : formData
        //     })
        // }else{
        //     res.status(400).json({
        //         msg : "form data is not recieved here",
        //         formData : formData
        //     })
        // }
    }
    catch(err){
        console.log("error", err);
    }
    // res.status(200).json({
    //     msg : "form data is recieved here",
    //     formData : formData
    // })
})




export default userRouter;