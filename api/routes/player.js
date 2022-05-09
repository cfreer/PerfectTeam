var express = require('express');
var router = express.Router();

/**
 * GET player listing.
 * Can add a rank to query just one player.
 * Example request: ?Rk=1.
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    const players = req.db.Player;
    // checks to see if the user added a player id
    if (Object.keys(req.query).length !== 0) {
      const rank = req.query.Rk;
      posts = await players.findOne({ Rk: rank }).exec();
    } else {
      posts = await players.find();
    }
    console.log(players);
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;