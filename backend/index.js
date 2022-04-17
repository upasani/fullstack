const express=require('express');

const cors = require('cors')
require("dotenv").config();
const app=express();

const connect=require('./config/db');
const auth= require("./controller/auth.controller");
const teacher=require('./controller/teacher.controller');

app.use(express.json());
app.use(cors());
app.use("", auth);

app.use("", auth);
app.use('/get-teacher',teacher);
app.use('/add-teacher',teacher);

app.get('/',(req,res)=>{
    return res.send("In the port 5050");
})



app.listen(8080,async ()=>{
    try{
         await connect();
         console.log('listening on the port 8080');
    }catch(err){
        console.log(err.message);
    }

})