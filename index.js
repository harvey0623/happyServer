const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config({
   path: '.env.dev'
});
const port = process.env.PORT || 3033;
const auth = require('./route/auth/index.js');
const community = require('./route/community/index.js');
const security = require('./route/security/index.js');

app.listen(port);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ 
   limit: '50mb'
}));

app.use(cors());
// app.use(cors({
//    origin: 'http://localhost:8080',
//    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//    credentials: true
// }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/community', community);
app.use('/security', security);
app.use((req, res) => {
   res.write('<h1>hello happy server</h1>');
   res.end();
});