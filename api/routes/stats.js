var express = require('express');
var router = express.Router();
const Stats = require('../models/stats');
const Players = require('../models/players');

/**
 * GET stats for a given player.
 * Example request: /Steven Adams.
 */
router.get('/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const nameRegex = new RegExp(name);
    let player = await Players.findOne({ Player: { $regex: nameRegex } }).exec();
    const rank = player.Rk;
    let posts = await Stats.findOne({ Rk: rank }).exec();
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;