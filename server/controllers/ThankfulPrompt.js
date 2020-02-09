const models = require('../models');

const thankfulPrompt = models.ThankfulPrompt;

const logThankful = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerPrompt = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const promptData = {
    answer: req.body.answer,
  };

  const newThankful = new prompt.ThankfulPrompt(promptData);
  const thankPromise = newThankful.save();

    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

  thankPromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occurred' });
    }
    return res.status(400).json({ error: 'An error has occurred' });
  });

  return thankPromise;
};


module.exports = {
  makeThankful: logThankful,
  answerPrompt,
};
