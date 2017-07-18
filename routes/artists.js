"use strict";

const express = require('express')
const router = express.Router();
const knex = require('../db/knex');

router.route('/')
  .get((req, res, next) => {
    knex('artists')
      .then((artists) => res.json(artists))
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    knex('artists')
      .insert({
        name: req.body.name,
        store: req.body.store,
        bio: req.body.bio,
        tags: req.body.tags,
        headshot: req.body.headshot,
        img_url1: req.body.img_url1,
        img_url2: req.body.img_url2,
        img_url3: req.body.img_url3,
        img_url4: req.body.img_url4
      })
      .returning('*')
      .then((artist) => {
        console.log(`${artist[0].name} was successfully added to the system.`);
        res.json(artist);
      })
      .catch(err => next(err));
  });

router.route('/:artist_id')
  .get((req, res, next) => {
    knex('artists')
      .where('id', req.params.artist_id)
      .first()
      .then(artist => res.json(artist))
      .catch(err => next(err));
  })
  .patch((req, res, next) => {
    knex('artists')
      .update(req.body)
      .where('id', req.params.artist_id)
      .returning('*')
      .then(artists => res.json(artists[0]))
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    knex('artists')
      .del()
      .where('id', req.params.artist_id)
      .returning('*')
      .then((artist) => {
        console.log(`${artist[0].name} was successfully deleted`);
        res.json(artist);
      })
      .catch(err => next(err));
  });



module.exports = router;
