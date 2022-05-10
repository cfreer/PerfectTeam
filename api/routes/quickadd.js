var express = require('express');
var router = express.Router();

/**
 * GET 12 player for a specific team - quick add feature.
 * Can add a team to query just 12 players.
 * Example request: ?playerTeam=Los Angeles Lakers.
 */
 router.get('/:playerTeam', async (req, res) => {
    try {
      let posts;
      const limit = 12;
      const players = req.db.Player;
      posts = await players.find({playerTeam : req.params.playerTeam}).limit(12);
      res.json(posts);
    } catch (err) {
      res.json({status: 'error', error: err.message});
    }
  });


module.exports = router;