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

module.exports = router;
