const models = require('../models');

const Proud = models.Proud;

const logProud = (req, res) => res.render('thankYou');

// Create a new response to this prompt
const answerProud = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Please fill in your answer' });
  }

  const proudData = {
    answer: req.body.answer,
  };

  const newProud = new Proud.ProudModel(proudData);
  const proudPromise = newProud.save();

    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

  proudPromise.catch((err) => {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'An error has occurred' });
    }
    return res.status(400).json({ error: 'An error has occurred' });
  });

  return proudPromise;
};

module.exports = {
  makeProud: logProud, // lol CONST
  answerProud,
};
