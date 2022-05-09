var express = require('express');
var router = express.Router();

/**
 * GET player listing.
 * Can add a name to query just one player.
 * Example request: ?name="Steven Adams".
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    const players = req.db.Player;
    // checks to see if the user added a player name
    if (Object.keys(req.query).length !== 0) {
      const fullName = req.query.name;
      const nameRegex = new RegExp(fullName);
      posts = await players.findOne({ name: { $regex: nameRegex } }).exec();
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