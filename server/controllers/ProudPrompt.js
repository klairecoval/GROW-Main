const models = require('../models');

const Proud = models.Proud;

const logProud = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const proudData = {
    answer: req.body.answer,
    owner: req.session.account._id,
  };

  const newProud = new Proud.ProudModel(proudData);
  const proudPromise = newProud.save();

  proudPromise.then(() => {
    res.json({ redirect: '/thankYou' });
  });

  proudPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }
    
    return res.status(400).json({ error: 'An error occurred' });
  });

  return proudPromise;
};

module.exports = {
  logProud,
};
