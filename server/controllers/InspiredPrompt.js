const models = require('../models');

const Inspired = models.Inspired;

const logInspired = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const inspiredData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newInspired = new Inspired.InspiredModel(inspiredData);
  const inspiredPromise = newInspired.save();

  inspiredPromise.then(() => {
    res.json({ redirect: '/loggedSavedPage' });
  });

  inspiredPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return inspiredPromise;
};

const getInspired = (request, response) => {
  const req = request;
  const res = response;

  return Inspired.InspiredModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred.' });
    }

    return res.json({ inspiredResponses: docs });
  });
};

module.exports = {
  logInspired,
  getInspired,
};
