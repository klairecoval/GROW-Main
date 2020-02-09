const models = require('../models');

const Excited = models.Excited;

const logExcited = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerExcited = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const excitedData = {
    answer: req.body.answer,
  };

  const newExcited = new Excited.ExcitedModel(excitedData);
  const excitedPromise = newExcited.save();

    /*
    excitedPromise.then(() => {
        //res.json({});
    })
    */

  excitedPromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occurred' });
    }
    return res.status(400).json({ error: 'An error has occurred' });
  });

  return excitedPromise;
};

module.exports = {
  makeExcited: logExcited,
  answerExcited,
};
