"use strict";

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.route('/')
  .post((req, res, next) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: 'conservator.mailer@gmail.com',
        pass: '`rUtvB4"hW'
      }
    });

    // setup email data with unicode symbols
    let collectorMailOptions = {
      from: '"Conservateur" <conservator.mailer@gmail.com>',
      to: `${req.body.email}`,
      subject: 'Consultation Confirmation',
      text: `Congratulations on your decision to build an original collection!  Your curator will be in touch shortly to chat. \n\n<b>Order Details:</b> \n\n<b>Name:</b> ${req.body.name} \n<b>Email:</b> ${req.body.email} \n<b>City:</b> ${req.body.city} \n<b>State:</b> ${req.body.state} \n<b>Style:</b> ${req.body.style} \n<b>Space:</b> ${req.body.space} \n<b>Budget:</b> ${req.body.budget} \n<b>Timeline:</b> ${req.body.timeline}`, // plain text body
      html: `Congratulations on your decision to build an original collection!  Your curator will be in touch shortly to chat. <br><br><b>Order Details:</b> <br><br><b>Name:</b> ${req.body.name} <br><b>Email:</b> ${req.body.email} <br><b>City:</b> ${req.body.city} <br><b>State:</b> ${req.body.state} <br><b>Style:</b> ${req.body.style} <br><b>Space:</b> ${req.body.space} <br><b>Budget:</b> ${req.body.budget} <br><b>Timeline:</b> ${req.body.timeline}` // html body
    };

    let curatorMailOptions = {
      from: '"Conservateur" <conservator.mailer@gmail.com>',
      to: `sample.curator@gmail.com`,
      subject: 'Consultation Notification',
      text: `A collector just booked a consultation!  Please reach out to them shortly to gather additional information about their piece. \n\n<b>Order Details:</b> \n\n<b>Name:</b> ${req.body.name} \n<b>Email:</b> ${req.body.email} \n<b>City:</b> ${req.body.city} \n<b>State:</b> ${req.body.state} \n<b>Style:</b> ${req.body.style} \n<b>Space:</b> ${req.body.space} \n<b>Budget:</b> ${req.body.budget} \n<b>Timeline:</b> ${req.body.timeline}`, // plain text body
      html: `A collector just booked a consultation!  Please reach out to them shortly to gather additional information about their piece. <br><br><b>Order Details:</b> <br><br><b>Name:</b> ${req.body.name} <br><b>Email:</b> ${req.body.email} <br><b>City:</b> ${req.body.city} <br><b>State:</b> ${req.body.state} <br><b>Style:</b> ${req.body.style} <br><b>Space:</b> ${req.body.space} <br><b>Budget:</b> ${req.body.budget} <br><b>Timeline:</b> ${req.body.timeline}` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(collectorMailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send(info.response);
    });

    transporter.sendMail(curatorMailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send(info.response);
    });
  });

router.route('/question')
  .post((req, res, next) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      auth: {
        user: 'conservator.mailer@gmail.com',
        pass: '`rUtvB4"hW'
      }
    });

    let curatorMailOptions = {
      from: `${req.body.email}`,
      to: `sample.curator@gmail.com`,
      subject: 'A Customer Would Like To Ask You A Question',
      text: `${req.body.name} would like to ask you a question. \n\n<b>Question Details:</b>  \n\n<b>Email:</b> ${req.body.email} \n<b>Question:</b> ${req.body.question}`, // plain text body
      html: `${req.body.name} would like to ask you a question. <br><br><b>Question Details:</b> <br><br><b>Name:</b> ${req.body.name} <br><b>Email:</b> ${req.body.email} <br><b>Question:</b> ${req.body.question}` // html body
    };

    transporter.sendMail(curatorMailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send(info.response);
    });

    let questionMailOptions = {
      from: '"Conservateur" <conservator.mailer@gmail.com>',
      to: `${req.body.email}`,
      subject: 'Thank You For Your Question',
      text: `Thank you for considering Conservateur as a place to build your art collection.  We have received your question and a curator will be in touch with you shortly!  Have a great day!`, // plain text body
      html: `Thank you for considering Conservateur as a place to build your art collection.  We have received your question and a curator will be in touch with you shortly!  Have a great day!` // html body
    };

    transporter.sendMail(questionMailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.send(info.response);
    });
  });


module.exports = router;
