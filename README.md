# hidden-nova-auth

## Introduction

hidden-nova-auth is a Node.js library for authentication using Passport with a LocalStrategy. It provides a simple and
secure way to authenticate users in your Node.js applications.

## Installation

To install hidden-nova-auth, you can use npm:

```bash
npm install hidden-nova-auth
```

## Usage

```javascript
const { authenticateUser } = require('hidden-nova-auth');

// Use authenticateUser middleware to authenticate users
app.post('/login', authenticateUser, (req, res) => {
// Authentication successful
  res.json({ message: 'Authentication successful.', user: req.user });
});
```

## Configuration

Make sure you have a `User` model defined in your application that implements the `validPassword` method for password
validation.

```javascript
// Example User model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
});

userSchema.methods.validPassword = function (password) {
// Implement password validation logic here
};

const User = mongoose.model('User', userSchema);
module.exports = User;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
