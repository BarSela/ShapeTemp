const mongoose = require('mongoose');
const bcrypt = require('bcrypt');//Password encryption
const jwt = require('jsonwebtoken');
const User = require('../model/user');

module.exports = {
    signup: (req, res,next) => {
       
            var fullName = req.body.fullName;
            var email = req.body.email;
            var password = req.body.password;
            var passwordRepeat =req.body.passwordRepeat;
        if(password != passwordRepeat){
            var temp = "false";
            return res.render('pages/signUp',{temp:false});
            
        }
        //checks if the email already exists in the databases
        User.find({email}).then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email exists'
                })
            }

            bcrypt.hash(password, 10, (error, hash) => {
                if (error) {
                    return res.status(500).json({
                            error
                    })
                }
                const user = new User({
                    fullName,
                    email,
                    password: hash
                })
                user.save().then((result) => {
                    console.log('new user created');
                    res.redirect('/login');
                    
                        
                }).catch(error => {
                    res.status(500).json({
                        error
                    })
                   
                });
            });
        })
    },
    login: (req, res) => {
        const { email, password } = req.body;
        
        User.find({ email }).then((users) => {
            //If the user list is empty
            if (users.length === 0) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }

            const [ user ] = users;
            
            bcrypt.compare(password, user.password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }

                if (result) {
                    const token = jwt.sign({
                        id: user._id,
                        email: user.email,
                    },
                    'lihi',
                    {   //For how long the user can stay connected
                        expiresIn: "1H" //1 hour
                    });

                    console.log('Auth successful');
                    console.log(token);
                    return res.redirect('/homePage');
                   
                }
                //If the password is incorrect
                res.status(401).json({
                    message: 'Auth failed'
                });
            })
        })
    }
}
