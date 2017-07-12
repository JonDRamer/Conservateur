"use strict";

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.route('/')
  .post((req, res, next) => {
    // create reusable transporter object using the default SMTP transport
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
      to: 'jonramer@yahoo.com', // list of receivers
      subject: 'Conservator Consultation Confirmation', // Subject line
      text: 'Congratulations on starting your Conservator journey!  Your curator will be in touch shortly to chat.', // plain text body
      html: '<b>Congratulations on starting your Conservator journey!  Your curator will be in touch shortly to chat.</b>' // html body
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
