var Users = require('../Models/users'),
crypto = require('crypto'),
codes = require('../codes');

function sha256(data) {
    return crypto.createHash("sha256").update(data).digest("base64");
}

function create_users(req, res) {
    var User = new Users();
    var Params = req.body;

    var name = Params.name;
    var surname = Params.surname;
    var phone = Params.phone;
    var email = Params.email;
    var password = Params.password;
    var type = 1;
    var status = 1;


    if(name == "" || !name) {
        res.status(200).send({response:codes.getCode("1001")});
    }else if(surname == "" || !surname) {
        res.status(200).send({response:codes.getCode("1002")});
    }else if(phone == "" || !phone) {
        res.status(200).send({response:codes.getCode("1003")});
    }else if(email == "" || !email) {
        res.status(200).send({response:codes.getCode("1004")});
    }else if(password == "" || !password) {
        res.status(200).send({response:codes.getCode("1005")});
    }else if(type != 1 || status != 1){
        res.status(200).send({response:codes.getCode("1007")});
    }else{
        Users.findOne({email: email}, (err, user) => {
            if(err) {
                res.status(500).send({response:codes.getCode(00)});
            }else{
                if(!user) {
                    User.name = name;
                    User.surname = surname;
                    User.phone = phone;
                    User.email = email;
                    var pass_crypt = sha256(password);
                    User.password = pass_crypt;
                    User.status = status;
                    User.type = type;
                    User.save((err, users) => {
                        if(err) {
                            res.status(200).send({response:codes.getCode(00)});
                        }else{
                            res.status(200).send({user:users});
                            //res.status(200).send(codes.getCode("1000"));
                        }
                    });
                }else{
                    res.status(200).send({response:codes.getCode("1008")});
                }
            }
        });
    }

}

function users_list(req, res) {
  Users.find((err, users) => {
      if(users) {
          res.status(200).send({users:users});
      }else{
        res.status(200).send({response:codes.getCode("2002")});
      }
  });
}

module.exports = {
    create_users,
    users_list
}
