var express = require('express');
var router = express.Router();

/**
 * GET team listing.
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    const teams = req.db.NbaTeams;
    posts = await teams.find();
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;