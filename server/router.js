const controllers = require('./controllers');

// setup routes from controllers folder
const router = (app) => {
  app.get('/startPage', controllers.User.startPage);
  app.get('/promptPage', controllers.User.promptPage);
  app.get('/', controllers.User.startPage);
};

module.exports = router;
