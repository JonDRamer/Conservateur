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
      .then(users => res.json(users[0]))
      .catch(err => next(err));
  })
  .delete((req, res) => {
    knex('users')
      .del()
      .where('id', req.params.user_id)
      .returning('*')
      .then(users => res.send(`${users[0].first_name} ${users[0].last_name} was successfully deleted`))
      .catch(err => next(err));
  });

module.exports = router;
