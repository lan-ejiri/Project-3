const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const router = require("express").Router();

const db = require("../../models");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.User.findById(id)
    .then(function (err, user) {
      done(null, user);
    })
    .catch(err => done(err));
});

passport.use(new LocalStrategy({
  usernameField: "email",
},
  function (email, password, done) {
    console.log('passport')
    db.User.findOne({ where: { email: email} })
      .then(user => {
        console.log("USER", user)
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
      .catch(err => done(err));
  }));


module.exports = passport;