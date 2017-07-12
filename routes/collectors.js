"use strict";

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.route('/')
  .post((req, res, next) => {
    console.log(req.body);
    // create reusable transporter object using the
    // default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: 'jramer87@gmail.com',
        pass: 'JrAmEr04301987,01041988,02232013'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Jon Ramer" <jramer87@gmail.com>', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: 'Conservator Consultation Confirmation', // Subject line
      text: `Congratulations on starting your Conservator journey!  Your curator will be in touch shortly to chat. \n\n<b>Order Details:</b> \n\n<b>Name:</b> ${req.body.name} \n<b>Email:</b> ${req.body.email} \n<b>City:</b> ${req.body.city} \n<b>State:</b> ${req.body.state} \n<b>Style:</b> ${req.body.style} \n<b>Space:</b> ${req.body.space} \n<b>Budget:</b> ${req.body.budget} \n<b>Timeline:</b> ${req.body.timeline}`, // plain text body
      html: `Congratulations on starting your Conservator journey!  Your curator will be in touch shortly to chat. <br><br><b>Order Details:</b> <br><br><b>Name:</b> ${req.body.name} <br><b>Email:</b> ${req.body.email} <br><b>City:</b> ${req.body.city} <br><b>State:</b> ${req.body.state} <br><b>Style:</b> ${req.body.style} <br><b>Space:</b> ${req.body.space} <br><b>Budget:</b> ${req.body.budget} <br><b>Timeline:</b> ${req.body.timeline}` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send(info.response);
    });
  });


module.exports = router;
