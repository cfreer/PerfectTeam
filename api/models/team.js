const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  Players: String,
  Score: Number,
  Salary: Number
})

module.exports = mongoose.model('team', teamSchema);