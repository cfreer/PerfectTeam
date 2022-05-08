var express = require('express');
var router = express.Router();

/* GET player listing.
Can add an id to query just one player. Example request: ?_id=6274db2d67b2ba8ad69487dd.*/
router.get('/', async (req, res) => {
  try {
    let posts;
    const players = req.db.Player;
    // checks to see if the user added a player id
    if (Object.keys(req.query).length !== 0) {
      const playerId = req.query._id;
      posts = await players.findById(playerId);
    } else {
      posts = await players.find();
    }
    console.log(players);
    res.json(posts);
  } catch (err) {
    res.json({ status: 'error', error: err});
  }
});

module.exports = router;