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

  })
router.route('/:collector_id')
  .get((req, res, next) => {

  })
  .patch((req, res, next) => {

  })
  .delete((req, res, next) => {

  })

module.exports = router;
