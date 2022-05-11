const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  Rk: Number,
  Player: String,
  age: Number,
  WS: String,
  salary: String,
  projSalary: String,
  playerTeam: String
  //image: String, //1.png
});

module.exports = mongoose.model('players', playerSchema);