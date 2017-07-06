"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcryptjs');


router.route('/register')
  .get((req, res, next) => {
    res.render('auth/register')
  })
  .post((req, res, next) => {
    if (req.body.email.trim() && req.body.password_digest.trim()) {
      const hash = bcrypt.hashSync(req.body.password_digest, 10);
      knex('users')
        .insert({
          email: req.body.email,
          password_digest: hash,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          artist: req.body.artist,
          collector: req.body.collector,
          curator: req.body.curator
        })
        .returning('id')
        .then((id) => {
          return knex('users')
            .where('id', id[0])
            .first()
        })
        .then((user) => {
          req.session.userId = user.id;
          res.json(req.session);
          // res.render('statics/home', {
          //   loggedIn: true
          // });
        })
        .catch(err => next(new Error(err)));
    } else {
      res.render('auth/register', {
        errors: ['Email and password are required']
      });
    }
  });

router.route('/login')
  .get((req, res, next) => {
    res.render('auth/login')
  })
  .post((req, res, next) => {
    knex('users')
      .where('email', req.body.email)
      .first()
      .then((user) => {
        if (user) {
          let matches = bcrypt.compareSync(req.body.password_digest, user.password_digest);
          if (matches) {
            req.session.userId = user.id;
            res.json(req.session);
            // res.render('statics/home', {
            //   loggedIn: true
            // });
          }
        } else {
          res.redirect('/register');
        }
      })
      .catch(err => {
        res.locals.error = err
        res.send(err);
      });
  });

router.route('/logout')
  .get((req, res, next) => {
    req.session = null;
    res.json(req.session);
    // res.redirect('/');
  });


module.exports = router;
