var express = require('express');
var router = express.Router();

/**
 * GET stats.
 * Can add a name to query just one player's stats.
 * Example request: ?name="Steven Adams".
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    const stats = req.db.Stats;
    // checks to see if the user added a player name
    if (Object.keys(req.query).length !== 0) {
      const players = req.db.Player;
      const fullName = req.query.name;
      const nameRegex = new RegExp(fullName);
      const player = await players.findOne({ name: { $regex: nameRegex } }).exec();
      const rank = player.Rk;
      posts = await stats.findOne({ Rk: rank }).exec();
    } else {
      posts = await stats.find();
    }
    console.log(stats);
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;