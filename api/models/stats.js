const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  Rk: Number,
  MP: Number,
  FT: Number,
  ORB: Number,
  DRB: Number,
  AST: Number,
  STL: Number,
  BLK: Number,
  TOV: Number,
  PF: Number,
  PTS: Number
})

module.exports = mongoose.model('stats', statsSchema);