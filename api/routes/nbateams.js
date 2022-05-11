var express = require('express');
var router = express.Router();
let NbaTeams = require('../models/nbateams');

/**
 * GET team listing.
 */
router.get('/', async (req, res) => {
  try {
    let posts;
    posts = await NbaTeams.find();
    res.json(posts);
  } catch (err) {
    res.json({status: 'error', error: err.message});
  }
});

module.exports = router;