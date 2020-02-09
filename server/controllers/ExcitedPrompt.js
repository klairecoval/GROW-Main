const models = require('../models');

const excitedPrompt = models.ExcitedPrompt;

const logExcited = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerPrompt = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const promptData = {
    answer: req.body.answer,
  };

  const newExcited = new prompt.ExcitedPrompt(promptData);
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
  answerPrompt,
};
