"use strict";

const express = require('express')
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('artists')
      .then(artists => res.json(artists))
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    knex('users')
      .insert({
        email: req.body.email,
        password_digest: req.body.password_digest,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        artist: req.body.artist,
        collector: req.body.collector,
        curator: req.body.curator
      })
      .returning('*')
      .then((users) => {
        knex('artists')
          .insert({
            bio: req.body.bio,
            user_id: users[0].id
          })
          .returning('*', users)
          .then(artists => res.json(`${users[0].first_name} ${users[0].last_name}'s bio: ${artists[0].bio} was successfully added to the artist's table.`))
          .catch(err => next(err));
      })
  })

router.route('/:artist_id')
  .get((req, res, next) => {
    knex('artists')
      .where('id', req.params.artist_id)
      .first()
      .then(artist => res.json(artist))
      .catch(err => next(err));
  })
  .patch((req, res, next) => {
    knex('artists')
      .update(req.body)
      .where('id', req.params.artist_id)
      .returning('*')
      .then(artists => res.json(artists[0]))
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    knex('artists')
      .del()
      .where('id', req.params.artist_id)
      .returning('*')
      .then((artists) => {
        knex('users')
          .where('id', artists[0].user_id)
          .first()
          .then(user => res.json(`${user.first_name} ${user.last_name}'s artist bio was successfully deleted.`));
      })
      .catch(err => next(err));
  });



module.exports = router;
