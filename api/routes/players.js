var express = require('express');
var router = express.Router();
const Players = require('../models/players');

/**
 * GET player listing.
 * Can add a name to query just one player.
 * Example request: ?name="Steven Adams".
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    // Checks to see if the user added a player name.
    if (Object.keys(req.query).length !== 0) {
      const name = req.query.name;
      posts = await Players.findOne({ Player: name }).exec();
    } else {
      posts = await Players.find();
    }
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;