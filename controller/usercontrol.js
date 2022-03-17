const UserM = require('../model/usermodel');

exports.SignUp = (request, response) => {
    let a = request.body.name;
    let b = request.body.email;
    let c = request.body.password;

    UserM.create({ name: a, email: b, password: c }).then(result => {
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: 'Failed to save data' });
    })
}
exports.SignIn = (request, response) => {
    let b = request.body.email;
    let c = request.body.password;

    UserM.findOne({ email: b, password: c }).then(result => {
        if (result) {
            return response.status(201).json(result);
        }
        else{
            return response.status(500).json({ error: 'Not a valid user' });
        }
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: 'Not Getting result' });
    })
}