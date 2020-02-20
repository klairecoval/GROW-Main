const models = require('../models');

const Love = models.Love;

const logLove = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const loveData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newLove = new Love.LoveModel(loveData);
  const lovePromise = newLove.save();

  lovePromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  lovePromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return lovePromise;
};

const getLove = (request, response) => {
  const req = request;
  const res = response;

  return Love.LoveModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred.' });
    }

    return res.json({ loveResponses: docs });
  });
};

module.exports = {
  logLove,
  getLove,
};
