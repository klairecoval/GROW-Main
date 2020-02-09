const controllers = require('./controllers');

// setup routes from controllers folder
const router = (app) => {
  app.get('/startPage', controllers.Session.startPage);
  app.get('/promptPage', controllers.Session.promptPage);
  app.get('thankYouPage', controllers.Session.thankYouPage);
  app.get('/', controllers.Session.startPage);
};

module.exports = router;
