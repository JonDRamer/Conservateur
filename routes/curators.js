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


router.route('/:curator_id')



module.exports = router;
