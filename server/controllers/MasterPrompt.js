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

  excitedPromise.then(() => {
    res.json({ redirect: '/thankYouPage' });
  });

  masterPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'You have already logged this thought' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return excitedPromise;
};

// const getMaster = (request, response) => {
//  const req = request;
//  const res = response;
//
//  return Master.MasterModel.findByOwner(req.session.account._id, (err, docs) => {
//    if (err) {
//      console.log(err);
//      return res.status(400).json({ error: 'An error occurred.' });
//    }
//
//    return res.json({ masterResponses: docs });
//  });
// };

const getMaster = (request, response) => {
  const req = request;
  const res = response;

  if (!req.query.category) {
    return res.json({ error: 'missing type' });
  }

  return Master.MasterModel.find({ viewable: true }, (err, docs) => {
    if (err) {
      res.status(500).json({ error: 'you couldnt find what you were looking for' });
      res.json({ docs });
    }
  }).lean();
};

module.exports = {
  logMaster,
  getMaster,
};
