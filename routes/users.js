"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('users')
      .then(users => res.json(users))
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    knex('users')
      .insert(req.body)
      .returning('id')
      .then((id) => res.json(id))
      .catch(err => next(err));
  });

router.route('/:user_id')
  .patch((req, res) => {
    knex('users')
      .update(req.body)
      .where('id', req.params.user_id)
      .returning('*')
      .then(user => res.send(user[0]))
      .catch(err => next(err));
  });

module.exports = router;;
