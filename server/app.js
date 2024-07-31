var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./models/user');
const passport = require('passport');
const cors = require('cors')

var app = express();

app.use(cors({
  origin:"http://localhost:5173"
}))

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "syncronous"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());


app.use(express.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
const port=3000
try {
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
} catch (error) {
    
}


module.exports = app;
