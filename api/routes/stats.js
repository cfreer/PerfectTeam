var express = require('express');
var router = express.Router();

/**
 * GET stats.
 * Can add an id to query just one player's stats.
 * Example request: ?_id=6274db2d67b2ba8ad69487dd.
 */
// TODO: get stats linked with player ids
router.get('/', async (req, res) => {
  try {
    let posts;
    const stats = req.db.Stats;
    // checks to see if the user added a player id
    if (Object.keys(req.query).length !== 0) {
      const playerId = req.query._id;
      posts = await stats.findById(playerId);
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