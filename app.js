import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import './routes/posts.js';

const app = express();

const postsRoute = router;

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, () => 
    console.log('Connected to DB!')
);

app.listen(5000);