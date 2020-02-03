const controllers = require('./controllers');
const mid = require('./middleware');

// setup routes from controllers folder
// handle security/login requirements to view content
const router = (app) => {
//   app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);

//   app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;