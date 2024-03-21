const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

// Configure Passport local strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
      if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
      return done(null, user);
    });
  }
));

// Function to authenticate user using Passport
function authenticateUser(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json({ message: info.message }); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.json({ message: 'Authentication successful.', user });
    });
  })(req, res, next);
}

module.exports = {
  authenticateUser
};
