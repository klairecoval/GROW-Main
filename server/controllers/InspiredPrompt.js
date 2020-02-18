const models = require('../models');

const Inspired = models.Inspired;

const logInspired = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const inspiredData = {
    name: req.body.answer,
    owner: req.session.account._id,
  };

  const newInspired = new Inspired.InspiredModel(inspiredData);
  const inspiredPromise = newInspired.save();

  inspiredPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  inspiredPromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  });

  return inspiredPromise;
};

module.exports = {
  logInspired,
};
