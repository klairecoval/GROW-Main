const models = require('../models');

const Excited = models.Excited;

const logExcited = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const excitedData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newExcited = new Excited.ExcitedModel(excitedData);
  const excitedPromise = newExcited.save();

  excitedPromise.then(() => {
    res.json({ redirect: '/loggedSavedPage' });
  });

  excitedPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return excitedPromise;
};

const getExcited = (request, response) => {
  const req = request;
  const res = response;

  return Excited.ExcitedModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred.' });
    }

    return res.json({ excitedResponses: docs });
  });
};

module.exports = {
  logExcited,
  getExcited,
};
