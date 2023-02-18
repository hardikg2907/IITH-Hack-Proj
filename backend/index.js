//http://127.0.0.1:3000/login.html

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.PORT || 3000;
const User = require('./User.js')

app.use(express.static('../frontend'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/login', (req,res)=>{
    // res.sendFile('C:/Users/hardi/OneDrive/Desktop/IITH hack proj/frontend/login.html');
    // console.log();
    // console.log(res);
})

app.post('/register',async (req,res)=>{
    console.log(req.body);

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    await user.save();

    return res.status(200).json(user);
})

app.listen(port, ()=>{
    mongoose.connect(process.env.DB_URI, ()=>{
        console.log('DB Connected Successfully');
    });
    console.log(`Server is listening on port ${port}...`);
})