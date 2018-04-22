const
  username = 'insert here your bot username, find it at https://www.pokerwars.io/profile',
  apiToken = 'insert here your api token, find it at https://www.pokerwars.io/token',
  botEndpoint = 'insert here your bot ip address. i.e.: http://1.2.3.4:8090/',
  notifications = false; // pokerwars can send you notifications to let you know how your bot is doing

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8090,
  request = require('request'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pokerwarsRoutes');
routes(app);

app.listen(port);

console.log('pokerwars.io - javascript Starter Bot');
console.log('play against poker bots from all over the world!');
console.log('more info at http://www.pokerwars.io/');
console.log('now started on port ' + port);

console.log('Trying to subscribe to pokerwars.io...');
request.post('https://play.pokerwars.io/v1/pokerwars/subscribe',
  { json: { username: username, token: apiToken, botEndpoint: botEndpoint, notifications: notifications } },
  function (error, response, body) {
    if (!error && response.statusCode == 202) {
      console.log('Subscribed to pokerwars.io successfully! Response: ', body);
      console.log('Your bot is now playing against other poker bots!');
      console.log('Check your stats at pokerwars.io/stats');
    } else {
	  console.log('Your bot did NOT subscribe succesfully! Reason: ', body);
	  console.log('Fix the reported error and retry.');
	  process.exit(-1);
	}
  }
);