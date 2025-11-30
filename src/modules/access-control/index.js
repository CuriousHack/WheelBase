const accessRoutes = require('./access.routes');

// We export the routes so the main app can mount them
module.exports = {
  routes: accessRoutes,
  prefix: '/auth' // The module defines its own URL prefix
};