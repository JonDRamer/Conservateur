"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('collectors')
      .then(collectors => res.json(collectors))
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
        knex('collectors')
          .insert({
            bio: req.body.bio,
            user_id: users[0].id
          })
          .returning('*', users)
          .then(collectors => res.json(`${users[0].first_name}'s Bio: ${collectors[0].bio} was successfully added to the collectors table.`))
      })
      .catch(err => next(err));
  })
router.route('/:collector_id')
  .get((req, res, next) => {
    knex('collectors')
      .where('id', req.params.collector_id)
      .first()
      .then(collector => res.json(collector))
      .catch(err => next(err));
  })
  .patch((req, res, next) => {

  })
  .delete((req, res, next) => {

  })

module.exports = router;
