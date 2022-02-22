import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';



const app = express();

app.get('/', (req, res) => {
    const user = req.query.user;

    res.send(user + "!!");
});

const users = [];

app.post('/create_user', (req, res) => {
    const { user } = req.body;

    users.push({ username: user.username, password: user.password });
    
    console.log(users);
    
    res.json({ loggedIn: true, status: "Everything went well" });

});

//connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, () => 
    console.log('Connected to DB!')
);

app.listen(5000);