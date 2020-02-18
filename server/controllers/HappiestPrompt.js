const models = require('../models');

const Happiest = models.Happiest;

const logHappiest = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const happiestData = {
    name: req.body.answer,
    owner: req.session.account._id,
  };

  const newHappiest = new Happiest.HappiestModel(happiestData);
  const happiestPromise = newHappiest.save();

  happiestPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  happiestPromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  });

  return happiestPromise;
};

module.exports = {
  logHappiest,
};
