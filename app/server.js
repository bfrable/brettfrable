var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "brett@brettfrable.com",
        pass: "lacjdwubpurxgbnq"
    }
});

var sendEmail = function (req,res) {

    var data = req.body;

    smtpTransport.sendMail({
        from: data.from,
        to: 'brett@brettfrable.com',
        subject: data.from + ': ' + data.subject + ' reached out to you via brettfrable.com',
        text: data.name + ' ' + data.message + ' ' + data.phone
    }, function(e, r){
        if (!e) res.send('Sending OK');
        console.log(e);
        console.log(r);
    });
};

app.route('/send').post(sendEmail);