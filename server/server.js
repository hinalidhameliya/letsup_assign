const { response } = require('express');
const express= require('express');

const server = express();

const database=["Dog","Cat","bear"];


server.get('/about',(req,res)=>{
    res.send('hello i am from india');
})

server.get('/animal',(req,res)=>{
    res.send(database);
})

server.listen(4000,()=>{
    console.log('server in running on port 4000');
})