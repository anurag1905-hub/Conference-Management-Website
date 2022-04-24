const User = require('../models/user');

module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('back');
    }
    else{
        return res.render('login');
    }
}

module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('back');
    }
    else{
        return res.render('signUp');
    }
}

module.exports.conferences = function(req,res){
    return res.render('conference',{
        profileUser:req.user
    });
}

module.exports.create = function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }

        if(!user){
            User.create(req.body,function(err){
            if(err){
                console.log('error in creating user while signing up',err);
                return;
            }
            return res.redirect('/users/signup');
            });
        }
        else{
        return res.redirect('/users/login');
        }
    });
}

module.exports.createSession = function(req,res){
    return res.redirect('/users/home');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/users/login');
}

module.exports.profile = async function(req,res){
    let user = await User.findById(req.user.id);
    if(!user){
        return res.redirect('/users/home');
    }
    else{
        return res.render('profile',{
            profileUser:user
        });
    }
}

module.exports.settings = async function(req,res){
    let user = await User.findById(req.user.id);
    if(!user){
        return res.redirect('/users/home');
    }
    else{
        var flag = user.gender==="Male";
        return res.render('setting',{
            profileUser:user,
            flag:flag
        });
    }
}

module.exports.updateLoginInfo = async function(req,res){
    let user = await User.findById(req.user._id);
    if(!user){
        return res.redirect('back');
    }
    else{
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();
        return res.redirect('back');
    }
}

module.exports.updateAccountInfo = function(req,res){
    console.log(req.body);
    return res.redirect('back');
}