"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.route('/');
router.route('/:painting_id');

module.exports = router;
