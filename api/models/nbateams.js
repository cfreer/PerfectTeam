const mongoose = require('mongoose');

const nbateamSchema = new mongoose.Schema({
  teamId: Number,
  teamName: String,
  Conf: String,
  Div: String,
  W: Number,
  L: Number,
  WL:String,
  MOV: String,
  ORtg: String,
  DRtg: String,
  NRtg: String,
})

module.exports = mongoose.model('nbateams', nbateamSchema);