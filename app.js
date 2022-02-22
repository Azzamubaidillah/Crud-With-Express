import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(express.json());

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

app.get('/users', (_,res) => {
    res.json(users);
});

app.delete('/delete', (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(
        u => u.username === username && u.password === password
    );
    console.log(existingUser);

    if (!existingUser) {
        res.statusCode(401).json({ errorStatus: "Credentials did not match" });
    }

    users.splice(users.indexOf(existingUser), 1);
    res.json(users);

})

//connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, () => 
    console.log('Connected to DB!')
);

app.listen(5000);