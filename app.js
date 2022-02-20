import express from 'express';
import mongoose from 'mongoose';


const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//connect to DB

mongoose.connect(
    'mongodb+srv://azzam_ubaidillah:JqDxIhARU2MmIHLf@cluster0.ryan9.mongodb.net/Cluster0?retryWrites=true&w=majority', () => 
    console.log('Connected to DB!')
);

app.listen(5000);