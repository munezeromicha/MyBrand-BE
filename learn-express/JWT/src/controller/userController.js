// import express from "express";
import User from '../Models/user.js';
import bcrypt from "bcryptjs";
import generateLogToken from "../utils.js";

const signup = async(req,res)=>{
    let user = await User.findOne({email : req.body.email});
    if (user)
    return res.send("User with given email is existing!");
  
 user= new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
}).save();
res.send(user);
};

const login = async(req,res)=> {
    const user = await User.findOne({email:req.body.email});
    if (user)
    {
        if(bcrypt.compare(req.body.password, user.password))
        {
            res.send(
                {
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email,
                    password:user.password,
                    token:generateLogToken(user),
                }
            )
        }
    }
}

export {
    signup,
    login
}