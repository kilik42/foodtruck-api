import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
const localStrategy = require('passport').Strategy;



import config from './config';
import routes from './routes';


let app = express();
app.server = http.createServer(app);

//middleware
// parse application/json

app.use(bodyParser.json({
  limit: config.bodyLimit
}));


//passport config
app.use(passport.initialize());
let Account = require('/model/account');
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
Account.authenticate()

));

passport.serializeUser(Account.serializeUser());
passport.deserilizeUser(Account.deserilizeUser());

//api routes v1
app.use('/v1', routes);

app.server.lisen(config.port);
console.log(`started on port ${app.server.address().port}`);


export default app;
