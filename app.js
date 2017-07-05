"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const artistsRouter = require('./routes/artists');
const collectorsRouter = require('./routes/collectors');
const curatorsRouter = require('./routes/curators');
const consultationsRouter = require('./routes/consultations');
const usersRouter = require('./routes/users');
const paintingsRouter = require('./routes/paintings');
const port = process.ENV || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.get('/', (req, res) => {
  res.render('statics/home');
})

// app.use('/artists', artistsRouter);
// app.use('/collectors', collectorsRouter);
// app.use('/curators', curatorsRouter);
// app.use('/consultations', consultationsRouter);
// app.use('/users', usersRouter);
// app.use('/paintings', paintingsRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
