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

app.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    await User.findOne({ username: `${username}` }
        // if(err)
        // {
        //     console.log('Not found user');
        //     return;
        // }
        // if(password === user.password)
        // {
        //     console.log('User found');
        //     return;
        // }
    )
        .then(user => {
            if (password === user.password) {
                console.log('User found')
                return
            }
            // else {
            //     console.log('User not found.')
            //     return
            // }
        })
        .catch(err=>{
            console.log('error');
            return
        })
})

app.post('/register', async (req, res) => {
    console.log(req.body);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    await user.save();

    return res.status(200).json(user);
})

app.listen(port, () => {
    mongoose.connect(process.env.DB_URI, () => {
        console.log('DB Connected Successfully');
    });
    console.log(`Server is listening on port ${port}...`);
})