const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config({
   path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});
const port = process.env.PORT || 3033;
const auth = require('./route/auth/index.js');
const community = require('./route/community/index.js');
const notify = require('./route/notify/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.listen(port);

app.use('/auth', auth);
app.use('/community', community);
app.use('/notify', notify);
app.use((req, res) => {
   res.send('<h1>hello world~</h1>');
});