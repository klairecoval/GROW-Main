const models = require('../models');

const Excited = models.Excited;

const logExcited = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const excitedData = {
    name: req.body.answer,
    owner: req.session.account._id,
  };

  const newExcited = new Excited.ExcitedModel(excitedData);
  const excitedPromise = newExcited.save();

  excitedPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  excitedPromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  });

  return excitedPromise;
};

module.exports = {
  logExcited,
};
