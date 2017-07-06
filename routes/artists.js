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

router.route('/:artist_id')



module.exports = router;
