//http://127.0.0.1:3000/login.html

const express = require('express');
const app = express();  
const port = 3000;

app.use(express.static('../frontend'))

app.get('/', (req,res)=>{
    // res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
})