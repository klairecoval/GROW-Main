const controllers = require('./controllers');
const mid = require('./middleware');

// setup routes from controllers folder
const router = (app) => {
  // app.get('/startPage', controllers.Session.startPage);
  app.get('/promptPage', mid.requiresLogin, controllers.Account.promptPage);
  app.get('/thankYouPage', mid.requiresLogin, controllers.Account.thankYouPage);

  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/promptPage', mid.requiresLogin, controllers.Account.promptPage);

  // app.post('/thankYouPage', mid.requiresLogin, controllers.Account.thankYouPage);
  app.post('/excitedThankYou', mid.requiresLogin, controllers.Excited.logExcited);
  app.post('/happiestThankYou', mid.requiresLogin, controllers.Happiest.logHappiest);
  app.post('/inspiredThankYou', mid.requiresLogin, controllers.Inspired.logInspired);
  app.post('/loveThankYou', mid.requiresLogin, controllers.Love.logLove);
  app.post('/proudThankYou', mid.requiresLogin, controllers.Proud.logProud);
  app.post('/thankfulThankYou', mid.requiresLogin, controllers.Thankful.logThankful);

  app.get('/', controllers.Account.loginPage);
};

module.exports = router;
