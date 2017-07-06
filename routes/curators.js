"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('curators')
      .then(curators => res.json(curators))
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
        knex('curators')
          .insert({
            bio: req.body.bio,
            rating: req.body.rating,
            user_id: users[0].id
          })
          .returning('*', users)
          .then(curators => res.json(`${users[0].first_name} ${users[0].last_name}'s bio: ${curators[0].bio} and rating: ${curators[0].rating} were successfully added to the curator's table.`))
          .catch(err => next(err));
      })
  });

router.route('/:curator_id')
  .get((req, res, next) => {
    knex('curators')
      .where('id', req.params.curator_id)
      .first()
      .then(curator => res.json(curator))
      .catch(err => next(err));
  })
  .patch((req, res, next) => {
    knex('curators')
      .update(req.body)
      .where('id', req.params.curator_id)
      .returning('*')
      .then(curators => res.json(curators[0]))
      .catch(err => next(err));
  })



module.exports = router;
