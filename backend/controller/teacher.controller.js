const teacher=require('../model/teacher.model');
const express=require('express');

const app=express();
const router=express.Router();

router.get('/sorting',async(req,res)=>{
    let page=req.query.page;
    const Teacher= await teacher.find().skip((page-1)*5).limit(5).lean().exec();
    console.log("In the teacher",req.query);
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