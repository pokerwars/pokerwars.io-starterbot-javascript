'use strict';

module.exports = function(app) {
  var pokerwars = require('../controllers/pokerwarsController');

  app.route('/pokerwars.io/play')
    .post(pokerwars.play);

  app.route('/pokerwars.io/notifications')
    .post(pokerwars.notifications);
	
  app.route('/pokerwars.io/ping')
    .get(pokerwars.ping);

};
