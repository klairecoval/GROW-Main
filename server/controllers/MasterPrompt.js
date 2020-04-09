const models = require('../models');

const Master = models.Master;

const logMaster = (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: 'Thought required' });
  }

  const masterData = {
    answer: req.body.answer,
    owner: req.session.account._id,
    viewable: true,
    category: req.body.category,
  };

  const newMaster = new Master.MasterModel(masterData);
  const masterPromise = newMaster.save();

  masterPromise.then(() => {
    res.json({ redirect: '/explorePage' });
  });

  masterPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return masterPromise;
};

const getMaster = (request, response) => {
  const req = request;
  const res = response;

//  if (!req.query.category) {
//    return res.json({ error: 'missing type' });
//  }

  return Master.MasterModel.find({ viewable: true }, (err, docs) => {
    if (err) {
      res.status(500).json({ error: 'you couldnt find what you were looking for' });
    }
    return res.json({ docs });
  });
};

module.exports = {
  logMaster,
  getMaster,
};
