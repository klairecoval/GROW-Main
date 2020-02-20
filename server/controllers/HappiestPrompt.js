const models = require('../models');

const Happiest = models.Happiest;

const logHappiest = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const happiestData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newHappiest = new Happiest.HappiestModel(happiestData);
  const happiestPromise = newHappiest.save();

  happiestPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  happiestPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return happiestPromise;
};

const getHappiest = (request, response) => {
  const req = request;
  const res = response;

  return Happiest.HappiestModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred.' });
    }

    return res.json({ happiestResponses: docs });
  });
};

module.exports = {
  logHappiest,
  getHappiest,
};
