var express = require('express');
var router = express.Router();

/**
 * GET stats.
 * Can add a rank to query just one player's stats.
 * Example request: ?Rk=1.
 */
// TODO: get stats linked with player ids
router.get('/', async (req, res) => {
  try {
    let posts;
    const stats = req.db.Stats;
    // checks to see if the user added a player id
    if (Object.keys(req.query).length !== 0) {
      const rank = req.query.Rk;
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