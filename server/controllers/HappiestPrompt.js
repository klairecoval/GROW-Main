const models = require('../models');

const Happiest = models.Happiest;

const logHappiest = (req, res) => res.render('thankYou');

// Create a new response to this Model
const answerHappiest = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const happiestData = {
    answer: req.body.answer,
  };

  const newHappiest = new Happiest.HappiestModel(happiestData);
  const happiestPromise = newHappiest.save();

    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

  happiestPromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occured' });
    }
    return res.status(400).json({ error: 'An error has occured' });
  });

  return happiestPromise;
};

module.exports = {
  makeHappiest: logHappiest,
  answerHappiest,
};
