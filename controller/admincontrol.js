const AdminM=require('../model/adminmodel');

exports.SignUp=(request,response)=>{
    let a=request.body.email;
    let b=request.body.password;
    AdminM.create({email:a,password:b}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({error:'Not Saved'});
    });
}

exports.SignIn=(request,response)=>{
    let a=request.body.email;
    let b=request.body.password;
    AdminM.findOne({email:a,password:b}).then(result=>{
        if(result)
        return response.status(200).json(result);
        else
        return response.status(200).json({error:'Not a valid'});
    }).catch(err=>{
        return response.status(500).json({error:'Not find a result'});
    });
}