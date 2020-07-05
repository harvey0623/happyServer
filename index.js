const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3034;
const auth = require('./route/auth/index.js');
require('dotenv').config({
   path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.listen(port);

app.use('/auth', auth);