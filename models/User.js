// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: String,
  password: String,
});

// Add a method to the schema for password validation
userSchema.methods.validPassword = function(password) {
  // Implement password validation logic here
  return this.password === password; // For demonstration purposes, compare passwords directly
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
