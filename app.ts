import express from 'express';
import mongoose from 'mongoose';  // Import mongoose for MongoDB connection
import appRouter from './apiRoutes/appRoutes';
import userRouter from './apiRoutes/userRoutes';
import apiMiddle from './middlewares/apiMiddle';

const app: express.Application = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(apiMiddle);

// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/ts1')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red">Hello Baby</h1>`);
});

app.use('/app', appRouter);
app.use('/users', userRouter);

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
