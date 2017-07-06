"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const usersRouter = require('./routes/users');
const collectorsRouter = require('./routes/collectors');
const artistsRouter = require('./routes/artists');
const curatorsRouter = require('./routes/curators');
const paintingsRouter = require('./routes/paintings');
const authRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const port = process.env.PORT || 3000;

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
  res.send('yo');
})

app.use('/users', usersRouter);
app.use('/collectors', collectorsRouter);
app.use('/artists', artistsRouter);
app.use('/curators', curatorsRouter);
app.use('/paintings', paintingsRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
