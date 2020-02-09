const models = require('../models');

const Thankful = models.Thankful;

const logThankful = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerThankful = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const thankfulData = {
    answer: req.body.answer,
  };

  const newThankful = new Thankful.ThankfulModel(thankfulData);
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
  answerThankful,
};
