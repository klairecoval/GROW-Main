const models = require('../models');

const Thankful = models.Thankful;

const logThankful = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const thankfulData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newThankful = new Thankful.ThankfulModel(thankfulData);
  const thankfulPromise = newThankful.save();

  thankfulPromise.then(() => {
    res.json({ redirect: '/thankYouPage' });
  });

  thankfulPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return thankfulPromise;
};

const getThankful = (request, response) => {
  const req = request;
  const res = response;

  return Thankful.ThankfulModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred.' });
    }

    return res.json({ thankfulResponses: docs });
  });
};

module.exports = {
  logThankful,
  getThankful,
};
