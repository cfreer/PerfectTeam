var express = require('express');
var router = express.Router();
const Players = require('../models/players');
const Stats = require('../models/stats');

/**
 * Takes a request of the form "/1,2,3,4,5,6,7,8,9,10,11,12/1000000",
 * where each number of the first parameter is the rank of one player on the team
 * and the second parameter is the salary cap. Returns the synergy score and luxury
 * tax of the given team.
 */
router.get('/:players/:salaryCap', async (req, res) => {
  try {
    const ranks = req.params.players;
    const salaryCap = req.params.salaryCap;
    const rankArr = ranks.split(',');
    let statsJSONs = [];
    let totalSalary = 0;
    for (let i = 0; i < rankArr.length; i++) {
      let rank = rankArr[i];
      let statsJSON = await Stats.findOne({ Rk: rank }).exec();
      statsJSONs.push(statsJSON);
      let playerJSON = await Players.findOne({ Rk: rank }).exec();
      if (playerJSON.salary) {
        const salary = parseInt(playerJSON.salary.substring(1));
        totalSalary += salary;
      }
    }
    const score = getAlgorithmScore(statsJSONs);
    const luxuryTax = getLuxuryTax(totalSalary, salaryCap);

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
  const playingTimeScale = 240 / totalPlayingTime; // 240 total minutes in a game

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
  if (pts > 120) {
    pts = 120;
  }
  if (ftm > 25) {
    ftm = 25;
  }
  if (oreb > 20) {
    oreb = 20;
  }
  if (dreb > 50) {
    dreb = 50;
  }
  if (ast > 35) {
    ast = 35;
  }
  if (blk > 8) {
    blk = 8;
  }

<<<<<<< HEAD

  const score = 0.0 - 0.033 * Math.log(pts) + 0.0587 * ftm + 0.0186 * Math.log(oreb) +
=======
  const score = 0.5 - 0.033 * Math.log(pts) + 0.0587 * ftm + 0.0186 * Math.log(oreb) +
>>>>>>> 7cd137b04af5bbcbe076fbf28d6c14d66271aad3
                0.0543 * Math.log(dreb) + 0.0376 * Math.log(ast) - 0.048 * tov +
                0.0408 * stl + 0.0186 * Math.log(blk) - .0988 - 0.0107 * pf;

  return score;
}

/**
 * Returns the luxury tax for a team with the given total salary.
 * @param {Number} totalSalary the total salary of the team.
 * @param {Number} salaryCap the salary cap for the team.
 * @returns the luxury tax for a team with the given total salary.
 */
function getLuxuryTax(totalSalary, salaryCap) {
  let luxuryTax = 0;
  let limitOverage = totalSalary - salaryCap;
  if (limitOverage >= 20000000) {
    let currentTax = 3.75;
    let currentLimitOverage = (limitOverage - 20000000) / 5000000
    for (let i = 0; i < currentLimitOverage; i++) {
      luxuryTax += currentTax * 5000000;
      currentTax += .5;
      limitOverage -= 5000000
    }
    luxuryTax += (limitOverage % 5000000) * (currentTax + .5);
    limitOverage -= limitOverage % 5000000
  }
  if (limitOverage >= 15000000) {
    luxuryTax += (limitOverage - 15000000) * 3.25;
    limitOverage -= limitOverage - 15000000;
  }
  if (limitOverage >= 10000000) {
    luxuryTax += (limitOverage - 10000000) * 2.50;
    limitOverage -= limitOverage - 10000000;
  }
  if (limitOverage >= 5000000) {
    luxuryTax += (limitOverage - 5000000) * 1.75;
    limitOverage -= limitOverage - 5000000;
  }
  if (limitOverage >= 0) {
    luxuryTax += (limitOverage) * 1.50;
  }
  return Math.round(luxuryTax);
}

module.exports = router;