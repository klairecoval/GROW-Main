const models = require('../models');

const inspiredPrompt = models.InspiredPrompt;

const logInspired = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerPrompt = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const promptData = {
    answer: req.body.answer,
  };

  const newInspired = new prompt.InspiredPrompt(promptData);
  const inspirePromise = newInspired.save();

    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

  inspirePromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occurred' });
    }
    return res.status(400).json({ error: 'An error has occurred' });
  });

  return inspirePromise;
};

module.exports = {
  makeInspired: logInspired,
  answerPrompt,
};
