const express=require('express');
const userControl=require('../controller/usercontrol');

const userRoute=express.Router();

userRoute.post('/signup',userControl.SignUp);
userRoute.get('/signin',userControl.SignIn);

module.exports=userRoute;