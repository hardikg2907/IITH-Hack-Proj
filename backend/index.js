//http://127.0.0.1:3000/login.html

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.PORT || 3000;
const User = require('./User.js')

app.use(express.static('../frontend'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login.html', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    await User.findOne({ username: `${username}` }
    )
        .then(user => {
            if (password === user.password) {
                console.log('User found')
                res.redirect('/index.html');
                return
            }
            // console.log('Incorrect password.');
            res.send('Incorrect password')
        })
        .catch(err=>{
            // console.log('User not found');
            res.send('User not found');
            return
        })
})

app.post('/register.html', async (req, res) => {
    // console.log(req.body);

    if(await User.findOne({username: `${req.body.username}`}))
    {
        console.log('Username Taken');
        return;
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    await user.save();

    return res.status(200).send('Successful registeration!');
})

app.listen(port, async () => {
    mongoose.connect(process.env.DB_URI, () => {
        console.log('DB Connected Successfully');
    });
    console.log(`Server is listening on port ${port}...`);
})