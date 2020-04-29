const controllers = require('./controllers');
const mid = require('./middleware');

// setup routes from controllers folder
const router = (app) => {
  app.get('/promptPage', mid.requiresLogin, controllers.Account.promptPage);
  app.get('/dataVisPage', mid.requiresLogin, controllers.Account.dataVisPage);

  app.get('/explorePage', mid.requiresLogin, controllers.Account.explorePage);
  app.get('/aboutPage', mid.requiresLogin, controllers.Account.aboutPage);

  app.get('/getMaster', mid.requiresLogin, controllers.Master.getMaster);
      
    
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/promptPage', mid.requiresLogin, controllers.Account.promptPage);

  app.post('/logMaster', mid.requiresLogin, controllers.Master.logMaster);
    
  app.delete('/reportMaster', mid.requiresLogin, controllers.Master.reportMaster);    
    
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.aboutPage);
};

module.exports = router;
