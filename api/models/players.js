const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  Rk: Number,
  Player: String,
  age: Number,
  WS: String,
  salary: String,
  projSalary: String,
  playerTeam: String
});

module.exports = mongoose.model('players', playerSchema);