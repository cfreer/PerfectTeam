var express = require('express');
var router = express.Router();
//const Database = require('../databases/database');


// router.get('/', (req, res, next) => {
//   res.send('We are in player')
// });

/* GET player listing. */
router.get('/', async (req, res) => {
  try {
    const stats = req.db.Player;
    const posts = await stats.find();
    console.log(stats);
    res.json(posts);
    // const rkId = String(req.query.rkId);
    // const Player = req.db.Player;
    // const playerData = await Player.findOne({ salary: rkId }).exec();
    // console.log(playerData);

    // if (rkId === undefined) {
    //   throw new Error('Player rankId was undefined');
    // }

    // res.json({status: 'success', payload: playerData });
  } catch (err) {
    res.json({ status: 'error', error: err});
  }
});

// router.post('/', async (req, res, next) => {
//   try {
//     const cardData = { ...req.body };
//     const Card = req.db.Card;
//     const totalCards = await Card.countDocuments();

//     cardData.card_id = totalCards;
//     cardData.index = totalCards;

//     const newCard = new Card(cardData);
//     newCard.save();
//     res.json({ status: 'success', payload: cardData});
//   } catch (err) {
//     res.json({ status: 'error', error: err });
//   }
// });

module.exports = router;