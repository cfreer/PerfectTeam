var express = require('express');
var router = express.Router();
const Players = require('../models/players');
const Stats = require('../models/stats');

/**
 * GET 12 player for a specific team - quick add feature.
 * Returns top 12 by minutes played, or 3 players given then top 9 by
 * minutes played.
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

        // Adds the first 3 players given.
        let first_players = [];
        for (let i = 0; i < rankArr.length; i++) {
          let rank = rankArr[i];
          let playerJSON = await Players.findOne({ Rk: rank }).exec();
          first_players.push(playerJSON);
        }

        // Finds all other players on the team not given.
        let players = await Players.find({$and: [{playerTeam: req.params.playerTeam}, {Rk: {$nin: rankArr}}]});
        let topMP = await getTopMP(players, 9);
        posts = first_players.concat(topMP);
      } else {
        let players = await Players.find({playerTeam : req.params.playerTeam});
        posts = await getTopMP(players, 12);
      }
      res.json(posts);
    } catch (err) {
      res.json({status: 'error', error: err.message});
    }
  });

/**
 * Returns the top n players by minutes played for the given team.
 * @param {Object} players JSON data about the players on the given team.
 * @param {Number} n the limit to number of players queried.
 * @returns the top n players, by minutes played, on the given team.
 */
async function getTopMP(players, n) {
  // Gets the rank of the given players.
  let ranks = [];
  for (let i = 0; i < players.length; i++) {
    ranks.push(players[i].Rk);
  }

  // Finds the stats of each player by rank.
  let stats = await Stats.find({Rk: {$in: ranks}}).sort({MP: -1}).limit(n);
  let final_ranks = [];
  for (let i = 0; i < stats.length; i++) {
    final_ranks.push(stats[i].Rk);
  }

  // Gets the players data by the top n ranks.
  let posts = await Players.find({Rk: {$in: final_ranks}});
  return posts;
}

module.exports = router;