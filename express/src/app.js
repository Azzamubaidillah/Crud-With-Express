import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import router from './routes/routes.js';

const Router = router;
const app = express();

//middleware
// app.use(express.json());
app.use('/books', Router);

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, () => 
    console.log('Connected to DB!')
);

app.listen(5000);