const controllers = require('./controllers');
const mid = require('./middleware');

// setup routes from controllers folder
const router = (app) => {
  // app.get('/startPage', controllers.Session.startPage);
  app.get('/promptPage', mid.requiresLogin, controllers.Account.promptPage);
  app.get('/thankYou', mid.requiresLogin, controllers.Account.thankYouPage);

  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/promptPage', mid.requiresLogin, controllers.Account.promptPage);
  app.post('/thankYou', mid.requiresLogin, controllers.Account.thankYouPage);

  app.get('/', controllers.Account.loginPage);
};

module.exports = router;
