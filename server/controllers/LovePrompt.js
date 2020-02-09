const models = require('../models');

const Love = models.Love;

const logLove = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerLove = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const loveData = {
    answer: req.body.answer,
  };

  const newLove = new Love.LoveModel(loveData);
  const lovePromise = newLove.save();

    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

  lovePromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occurred' });
    }
    return res.status(400).json({ error: 'An error has occurred' });
  });

  return lovePromise;
};

module.exports = {
  makeLove: logLove, // lol
  answerLove,
};
