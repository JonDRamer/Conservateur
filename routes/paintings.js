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
  .get((req, res, next) => {
    knex('paintings')
      .where('id', req.params.painting_id)
      .first()
      .then(painting => res.json(painting))
      .catch(err => next(err));
  })
  .patch((req, res, next) => {
    knex('paintings')
      .update(req.body)
      .where('id', req.params.painting_id)
      .returning('*')
      .then(paintings => res.json(paintings[0]))
      .catch(err => next(err));
  })

module.exports = router;;
