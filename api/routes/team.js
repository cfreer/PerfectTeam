var express = require('express');
var router = express.Router();

/**
 * Takes a request of the form "/add/team?players=1,2,3,4,5,6,7,8,9,10,11,12",
 * where each number is the rank of one player on the team. Returns the synergy
 * score.
 */
router.get('/add/team', async (req, res) => {
  try {
    const players = req.query.players;
    const ranks = players.split(',');
    const stats = req.db.Stats;
    let playerJSONs = [];
    for (let i = 0; i < ranks.length; i++) {
      let rank = ranks[i];
      let player = await stats.findOne({ Rk: rank }).exec();
      playerJSONs.push(player);
    }
    const score = getAlgorithmScore(playerJSONs);

    res.json({"score": score});
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

// Returns the synergy score of the given players.
function getAlgorithmScore(playerJSONs) {
  let totalPlayingTime = 0;
    for (let i = 0; i < playerJSONs.length; i++) {
      let playerJSON = playerJSONs[i];
      totalPlayingTime += playerJSON.MP;
    }
    const playingTimeScale = totalPlayingTime / 240; // 240 total minutes in a game

    let pts = 0;
    let ftm = 0;
    let oreb = 0;
    let dreb = 0;
    let ast = 0;
    let tov = 0;
    let stl = 0;
    let blk = 0;
    let pf = 0;
    for (let i = 0; i < playerJSONs.length; i++) {
      let playerJSON = playerJSONs[i];
      pts += playerJSON.PTS * playingTimeScale;
      ftm += playerJSON.FT * playingTimeScale;
      oreb += playerJSON.ORB * playingTimeScale;
      dreb += playerJSON.DRB * playingTimeScale;
      ast += playerJSON.AST * playingTimeScale;
      tov += playerJSON.TOV * playingTimeScale;
      stl += playerJSON.STL * playingTimeScale;
      blk += playerJSON.BLK * playingTimeScale;
      pf += playerJSON.PF * playingTimeScale;
    }

    const score = 0.5 - 0.033 * Math.log(pts) + 0.0587 * ftm + 0.0186 * Math.log(oreb) +
                  0.0543 * Math.log(dreb) + 0.0376 * Math.log(ast) - 0.048 * tov +
                  0.0408 * stl + 0.0186 * Math.log(blk) - .0988 - 0.0107 * pf;

    return score;
}

module.exports = router;