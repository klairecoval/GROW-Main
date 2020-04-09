const models = require('../models');
const Account = models.Account;

// render start page
const loginPage = (req, res) => {
  res.render('login');
};

// render prompt page
const promptPage = (req, res) => {
  res.render('promptPage');
};

const explorePage = (req, res) => {
  res.render('explorePage');
};

const aboutPage = (req, res) => {
  res.render('aboutPage');
};

// render dataVis page
const dataVisPage = (req, res) => {
  res.render('dataVisPage');
};

// logout, delete session, redirect to login page
const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

// login user
// check for all fields filled out
// check for values that match existing accounts
// redirect once successful to main maker page
const login = (request, response) => {
  const req = request;
  const res = response;

  // force case to strings to cover security flaws
  const username = `${req.body.username}`;

  if (!username) {
    return res.status(400).json({ error: 'ID code required.' });
  }

  return Account.AccountModel.findByUsername(username, (err, account) => {
    if (!account) {
      console.log('no account');
    }
    if (err || !account) {
      return res.status(401).json({ error: 'Invalid ID code' });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({ redirect: '/explorePage' });
  });
};

// handle new user signup
// check for VALID values in all fields
// create a new user and redirect to main maker page
const signup = (request, response) => {
  const req = request;
  const res = response;

  // cast to a string to cover some security flaws
  req.body.username = `${req.body.username}`;

  if (!req.body.username) {
    return res.status(400).json({ error: 'ID code required.' });
  }

  const accountData = {
    username: req.body.username,
  };

  const newAccount = new Account.AccountModel(accountData);

  const savePromise = newAccount.save();

  savePromise.then(() => {
    req.session.account = Account.AccountModel.toAPI(newAccount);
    res.json({ redirect: '/explorePage' });
  });

  savePromise.catch((err) => {
    console.log(err);

    if (err.code === 11000) {
      return res.status(400).json({ error: 'ID code already in use' });
    }

    return res.status(400).json({ error: 'An error occurred.' });
  });
};

module.exports = {
  loginPage,
  login,
  promptPage,
  dataVisPage,
  logout,
  signup,
  explorePage,
  aboutPage,
};
