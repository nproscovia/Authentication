
const  mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const  User = mongoose.model("User");

module.exports.Register = function(req, res) {
    
    if(req.body && req.body.username && req.body.password) {

        bcrypt.hash(req.body.password,10,function(err, pass) {

            if(err) {

                res.status(500).json({"message": "please try again later"})
                return

            } 

            const encrypted_password = pass;
            const newUser = {
                username: req.body.username,
                password: encrypted_password,
                name: req.body.name
    
            }

            User.create(newUser, function(err, user) {
                const response = {
                    status: 201,
                    message: user
                };
        
                if (err) {
                    console.log("There is an issue in registration");
                    response.status = 500;
                    response.message = err;
                }
                console.log("Added User: ", user)
    
                res.status(response.status).json(response.message);
            })


        })

    } else {
        res.status(400).json({"message": "Please fill all the fields to continue"})
    }

}

module.exports.Login = function(req, res) {

    if(req.body && req.body.username && req.body.password) {

        User.findOne({username: req.body.username}).exec(function(err, user) {

            const response = {
                status: 200,
                message: user
            };
    
            if (err) {
                console.log("problem Login");
                response.status = 500;
                response.message = err;
            } 
            else if(!user) {

                response.status = 400;
                response.message = "check username or password";

            }
            if(user) {
                       
                bcrypt.compare(req.body.password, user.password,function(err, same) {

                    if(same) {
                          //// first is header,payload, signature, are the parts of the token
                          //{name: user} to return welcome jack. the user.name
                          let token =  jwt.sign({name: user.name}, process.env.PASS_PHRASE, {expiresIn: 3600})
                

                      const myres = {
                          message: "Login sucessful",
                          token: token
                      }

                        res.status(200).json(myres)


                    } else {

                        res.status(400).json({"message": "Username Or Password is incorect"})


                    }

                })

                console.log("the username exists", user)
                 
                return;

            }

            res.status(response.status).json(response.message);

        })

    }
    else {

        res.status(400).json({"message": "Please fill in your username and password to continue"})

    }

}

module.exports.authenticate = function (req, res, next) {
    const userHeader = req.headers.authorization;

    if (userHeader) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        jwt.verify(token, process.env.PASS_PHRASE, function(err, decodedToken) {
            if(err) {
                console.log("Encored error in JWT ", err);
                res.status(401).json({message: "Unauthorized"})
            } else {
                next();
            }
        });
    } else {
        res.status(403).json({message: "Missing Token"})
    }
}