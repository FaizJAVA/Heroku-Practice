const express=require('express');
const adminControl=require('../controller/admincontrol');

const adminRoute=express.Router();

adminRoute.post('/signup',adminControl.SignUp);
adminRoute.get('/signin',adminControl.SignIn);

module.exports=adminRoute;