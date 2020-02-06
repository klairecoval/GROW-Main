const models = require('../models');

const user = models.User;

// render start page
const startPage = (req, res) => {
  res.render('startPage');
};

const promptPage = (req, res) => {
  res.render('promptPage');
};

const thoughtDropPage = (req, res) => {
  res.render('thoughDropPage');
};

module.exports = {
  startPage,
  promptPage,
  thoughtDropPage,
};
