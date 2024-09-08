import express from 'express';
import apiMiddle from '../middlewares/apiMiddle';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';

const userRouter : express.Router = express.Router();

userRouter.get('/' ,apiMiddle, (req,res) => {
    res.send('/users/ - path');
})


userRouter.post('/login',
    [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:5}).withMessage('Password should be atleast 5 characters long')

    ] ,async (req:express.Request,res:express.Response)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

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