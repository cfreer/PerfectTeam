var express = require('express');
var router = express.Router();

/* GET current team. */
router.get('/', async (req, res) => {
  try {
    const team = req.db.Team;
    const posts = await team.find();
    console.log(team);
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

// TODO: work with Juan to get team database set up
router.get('/add/player', async (req, res) => {
  try {
    const team = req.db.Team;
    const doc = await team.findOne();
    doc.players = "test";
    await doc.save();
    console.log(team);
    res.json(doc);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;