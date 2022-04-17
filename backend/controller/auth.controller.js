require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const express=require('express');


const app = express();

const router = express.Router();


const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

router.post("/register", async (req, res) => {
    console.log("In the register")
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user)
            return res.status(400).send({ message: "Please try another email" });

        user = await User.create(req.body);

        const token = newToken(user);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }

})

router.post("/login",async(req,res)=>{
    try {
        console.log("In the login part");
        const user = await User.findOne({ email: req.body.email });

        if (!user)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const match = user.checkPassword(req.body.password);

        if (!match)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        const token = newToken(user);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }

})
module.exports = router;