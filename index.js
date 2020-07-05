const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3034;
const harveynuxt = require('./route/harveynuxt/index.js');
const cal = require('./route/cal/index.js');
const happy = require('./route/happy/index.js');
require('dotenv').config({
   path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.listen(port);

app.use('/harveynuxt', harveynuxt);
app.use('/cal', cal);
app.use('/happy', happy);