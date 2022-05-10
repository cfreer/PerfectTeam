var express = require('express');
var router = express.Router();

const SALARY_CAP = 112400000;

/**
 * Takes a request of the form "/get/team/1,2,3,4,5,6,7,8,9,10,11,12",
 * where each number is the rank of one player on the team. Returns the synergy
 * score and luxury tax.
 */
router.get('/get/team/:players', async (req, res) => {
  try {
    const players = req.params.players;
    const ranks = players.split(',');
    const stats = req.db.Stats;
    const player = req.db.Player;
    let statsJSONs = [];
    let totalSalary = 0;
    for (let i = 0; i < ranks.length; i++) {
      let rank = ranks[i];
      let statsJSON = await stats.findOne({ Rk: rank }).exec();
      statsJSONs.push(statsJSON);
      let playerJSON = await player.findOne({ Rk: rank }).exec();
      const salary = parseInt(playerJSON.salary.substring(1));
      totalSalary += salary;
    }
    const score = getAlgorithmScore(statsJSONs);
    const luxuryTax = getLuxuryTax(totalSalary);

    res.json({"score": score, "luxuryTax": luxuryTax});
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

/**
 * Returns the synergy score of the given players.
 * @param {JSON[]} statsJSONs list of stats of the 12 players
 * @returns "synergy" score determined by the algorithm.
 */
function getAlgorithmScore(statsJSONs) {
  let totalPlayingTime = 0;
  for (let i = 0; i < statsJSONs.length; i++) {
    let playerJSON = statsJSONs[i];
    totalPlayingTime += playerJSON.MP;
  }

  let pts = 0;
  let ftm = 0;
  let oreb = 0;
  let dreb = 0;
  let ast = 0;
  let tov = 0;
  let stl = 0;
  let blk = 0;
  let pf = 0;

  for (let i = 0; i < statsJSONs.length; i++) {
    let playerJSON = statsJSONs[i];
    let playingRatio = totalPlayingTime / 240;
    pts += playerJSON.PTS / playingRatio;
    ftm += playerJSON.FT / playingRatio;
    oreb += playerJSON.ORB / playingRatio;
    dreb += playerJSON.DRB / playingRatio;
    ast += playerJSON.AST / playingRatio;
    tov += playerJSON.TOV / playingRatio;
    stl += playerJSON.STL / playingRatio;
    blk += playerJSON.BLK / playingRatio;
    pf += playerJSON.PF / playingRatio;
  }

  const score = 0.5 - 0.033 * Math.log(pts) + 0.0587 * ftm + 0.0186 * Math.log(oreb) +
                0.0543 * Math.log(dreb) + 0.0376 * Math.log(ast) - 0.048 * tov +
                0.0408 * stl + 0.0186 * Math.log(blk) - .0988 - 0.0107 * pf;

  return score;
}

/**
 * Returns the luxury tax for a team with the given total salary.
 * @param {Number} totalSalary the total salary of the team.
 * @returns the luxury tax for a team with the given total salary.
 */
function getLuxuryTax(totalSalary) {
  let luxuryTax = 0;
  let limitOverage = totalSalary - SALARY_CAP;
  if (limitOverage >= 20000000) {
    let currentTax = 3.75;
    for (let i = 0; i < (limitOverage - 20000000)/5000000; i++) {
      luxuryTax += currentTax * 5000000;
      currentTax += .5;
    }
    luxuryTax += (limitOverage % 5000000) * (currentTax + .5);
  }
  if (limitOverage >= 15000000) {
    luxuryTax += (limitOverage - 15000000) * 3.25;
    limitOverage -= limitOverage - 15000000;
  }
  if (limitOverage >= 10000000) {
    luxuryTax += (limitOverage - 10000000)*2.50;
    limitOverage -= limitOverage - 10000000;
  }
  if (limitOverage >= 5000000) {
    luxuryTax += (limitOverage - 5000000) * 1.75;
    limitOverage -= limitOverage - 5000000;
  }
  if (limitOverage >= 0) {
    luxuryTax += (limitOverage) * 1.50;
  }
  return luxuryTax;
}

module.exports = router;