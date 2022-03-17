const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const userRoute=require('./route/userroute');
const adminRoute=require('./route/adminroute');
const DB='mongodb+srv://Faizaankhan:789789@cluster0.xwwye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB).then(result=>{
    console.log('SuccessFull');
}).catch(err=>{
    console.log(err);
});

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/api/user/',userRoute);
app.use('/api/admin/',adminRoute);

app.listen(3000,()=>{
    console.log('Server running');
});