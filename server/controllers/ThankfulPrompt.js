const models = require('../models');

const Thankful = models.Thankful;

const logThankful = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const thankfulData = {
    name: req.body.answer,
    owner: req.session.account._id,
  };

  const newThankful = new Thankful.ThankfulModel(thankfulData);
  const thankfulPromise = newThankful.save();

  thankfulPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  thankfulPromise.catch((err) => {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  });

  return thankfulPromise;
};

module.exports = {
  logThankful,
};
