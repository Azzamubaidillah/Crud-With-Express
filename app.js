import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';



const app = express();

app.get('/', (req, res) => {
    const user = req.query.user;

    res.send(user + "!!");
});


//connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, () => 
    console.log('Connected to DB!')
);

app.listen(5000);