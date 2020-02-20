const controllers = require('./controllers');
const mid = require('./middleware');

// setup routes from controllers folder
const router = (app) => {
  app.get('/promptPage', mid.requiresLogin, controllers.Account.promptPage);
  app.get('/thankYouPage', mid.requiresLogin, controllers.Account.thankYouPage);

  app.get('/getExcited', mid.requiresLogin, controllers.Excited.getExcited);
  app.get('/getHappiest', mid.requiresLogin, controllers.Happiest.getHappiest);
  app.get('/getInspired', mid.requiresLogin, controllers.Inspired.getInspired);
  app.get('/getLove', mid.requiresLogin, controllers.Love.getLove);
  app.get('/getProud', mid.requiresLogin, controllers.Proud.getProud);
  app.get('/getThankful', mid.requiresLogin, controllers.Thankful.getThankful);

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

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
