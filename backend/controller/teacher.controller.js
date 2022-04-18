const teacher=require('../model/teacher.model');
const express=require('express');

const app=express();
const router=express.Router();

router.get('/sorting',async(req,res)=>{
    const Teacher= await teacher.find().lean().exec();
    // console.log("In the teacher",req.query.srt);
    let result=req.query.srt;
    if(result=='asc'){
        Teacher.sort((a,b)=>{
            return a.age-b.age;
        })
        return res.send(Teacher);
    }
    if(result=='dsc'){
        console.log("In the descending",result);
        Teacher.sort((a,b)=>{
            return b.age-a.age;
        })
        return res.send(Teacher);
    }
        return res.send(Teacher);
    
})
router.post('',async(req,res)=>{
    let teach=teacher.create(req.body);
    res.send("Data added succesfuly");

})


module.exports=router;