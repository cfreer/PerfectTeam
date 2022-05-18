var express = require('express');
var router = express.Router();
const Players = require('../models/players');

/**
 * GET 12 player for a specific team - quick add feature.
 * Can add 3 ranks to include these 3 players on the team
 * (used for suggested player feature).
 * Example request: /Los Angeles Lakers?players=14,18,39.
 */
 router.get('/:playerTeam', async (req, res) => {
    try {
      let posts;
      // Checks to see if the user added 3 players.
      if (Object.keys(req.query).length !== 0) {
        const ranks = req.query.players;
        const rankArr = ranks.split(',');
        let players = [];
        for (let i = 0; i < rankArr.length; i++) {
          let rank = rankArr[i];
          let playerJSON = await Players.findOne({ Rk: rank }).exec();
          players.push(playerJSON);
        }
        let team = await Players.find({$and: [{playerTeam: req.params.playerTeam}, {Rk: {$nin: rankArr}}] }).limit(9);
        posts = players.concat(team);
      } else {
        posts = await Players.find({playerTeam : req.params.playerTeam}).limit(12);
      }
      res.json(posts);
    } catch (err) {
      res.json({status: 'error', error: err.message});
    }
  });


module.exports = router;