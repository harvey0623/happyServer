const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config({
   // path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
   path: '.env.dev'
});
const port = process.env.PORT || 3033;
const auth = require('./route/auth/index.js');
const community = require('./route/community/index.js');
const security = require('./route/security/index.js');

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ 
   limit: '50mb'
}));
app.use(cookieParser());
// app.use(cors({
//    origin: 'http://localhost:8080/',
//    credentials: true,
//    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//    allowedHeaders: 'Content-Type,Authorization',
// }));
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

app.use('/auth', auth);
app.use('/community', community);
app.use('/security', security);
app.use((req, res) => {
   res.send('not found');
   res.end();
});