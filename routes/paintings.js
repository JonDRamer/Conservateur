"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('paintings')
      .then(paintings => res.json(paintings))
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    knex('paintings')
      .insert(req.body)
      .returning('*')
      .then(paintings => res.json(paintings[0]))
      .catch(err => next(err));
  })


router.route('/:painting_id')

module.exports = router;
