const models = require('../models');

const Love = models.Love;

const logLove = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const loveData = {
    name: req.body.answer,
    owner: req.session.account._id,
  };

  const newLove = new Love.LoveModel(loveData);
  const lovePromise = newLove.save();

  lovePromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  lovePromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  });

  return lovePromise;
};

module.exports = {
  logLove,
};
