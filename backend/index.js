//http://127.0.0.1:3000/login.html

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.PORT || 3000;
const User = require('./User.js')

app.use(express.static('../frontend'))

app.get('/', (req,res)=>{
    res.send();
    // console.log(res);
})

app.post('/register',async (req,res)=>{
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
    });

    return res.status(200).json(user);
})

app.listen(port, ()=>{
    mongoose.connect(process.env.DB_URI, ()=>{
        console.log('DB Connected Successfully');
    });
    console.log(`Server is listening on port ${port}...`);
})