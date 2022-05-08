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
    res.json({ status: 'error', error: err});
  }
});

module.exports = router;