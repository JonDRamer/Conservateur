"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res) => {
    knex('users')
      .then(users => res.json(users))
      .catch(err => next(err));
  });

module.exports = router;
