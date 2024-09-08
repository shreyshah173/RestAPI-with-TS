import express from 'express';
import apiMiddle from '../middlewares/apiMiddle';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
import User from '../models/userModel';  // Import the User model

const userRouter: express.Router = express.Router();

userRouter.get('/', apiMiddle, (req, res) => {
    res.send('/users/ - path');
});

userRouter.post('/signup',
    [
        body('email').isEmail().withMessage('Email is not valid'),
        body('password').isLength({ min: 5 }).withMessage('Password should be at least 5 characters long')
    ],
    async (req: express.Request, res: express.Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create a new user
            user = new User({
                email,
                password: hashedPassword,
            });

            // Save the user to the database
            await user.save();

            res.status(201).json({
                msg: 'User registered successfully',
                user: {
                    email: user.email,
                    id: user._id,
                }
            });
        } catch (err: any) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);


userRouter.post('/login',
    [
        body('email').isEmail().withMessage('Email is not valid'),
        body('password').isLength({ min: 5 }).withMessage('Password should be at least 5 characters long')
    ],
    async (req: express.Request, res: express.Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create a new user
            user = new User({
                email,
                password: hashedPassword,
            });

            // Save the user to the database
            await user.save();

            res.status(201).json({
                msg: 'User registered successfully',
                user: {
                    email: user.email,
                    id: user._id,
                }
            });
        } catch (err: any) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

export default userRouter;
