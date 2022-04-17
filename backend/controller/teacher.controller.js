const teacher=require('../model/teacher.model');
const express=require('express');
const app=express();
const router=express.Router();

router.get('',async(req,res)=>{
    const Teacher= await teacher.find().lean().exec();
    console.log("In the teacher");
    return res.send(Teacher);
})
router.post('',async(req,res)=>{
    let teach=teacher.create(req.body);
    res.send("Data added succesfuly");

})


module.exports=router;