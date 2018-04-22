'use strict';

exports.play = function(req, res) {
  // This endpoint is called by pokerwars.io to request your bot next move on a tournament.
  // You have the current state of the table in the GameInfo object, which you can use to decide
  // your next move.
  var gameInfo = req.body;
  
  console.log('Game info received for tournament ' + gameInfo.tournamentId + ' and round ' + gameInfo.roundId + ', let\'s decide the next bot move for this hand');
  console.log('Current round turn is ', gameInfo.roundTurn);
  console.log('Cards on the table are ', gameInfo.tableCards);
  console.log('Your bot cards are ', gameInfo.yourCards);

  if (gameInfo.canCheckOrBet) {
    // remember: in poker you can check or bet only if in the current turn no bot has bet already
    // if a bot bet already, you'll need to call or raise.
    console.log('In this hand, your bot can check or bet');
    console.log('If you bet, the minimum bet is ', gameInfo.minBet);
  }

  if (gameInfo.canCallOrRaise) {
    // remember: in poker you can call or raise only if there has been a bet before
    console.log('In this hand, your bot can call or raise');
    console.log('If you call, you will spend ' + gameInfo.chipsToCall + ' chips');
    console.log('If you raise, the minimum raise is ', gameInfo.minRaise);
  }

  console.log('The value of small blind now is ', gameInfo.smallBlindValue);
  console.log('The value of big blind now is ', gameInfo.bigBlindValue);

  console.log('Small blind player is ', gameInfo.smallBlindPlayer);
  console.log('Big blind player is ', gameInfo.bigBlindPlayer);
  console.log('Players in turn order with their info are: ', gameInfo.players);

  // implement your strategy here, now we always return fold, not great for your leaderboard!
  var nextMove = { action: 'fold' };
  console.log('Your bot next move is ', nextMove);
  
  res.status(200).send(nextMove);
};

exports.ping = function(req, res) {
  // This is used by pokerwars.io when your bot subscribe to verify that is alive and responding
  console.log('Received ping from pokerwars.io, responding with a pong');
  res.status(200).send({ pong: true });
};

exports.notifications = function(req, res) {
  // These requests are sent optionally, you decide if you want them when you subscribe. Your
  // poker bot does not need to necessarily provide an API for these, but they can give you
  // useful hints on what is happening during the tournaments. Please do not use notifications
  // in your poker bot logic, as they are not guaranteed to always be sent. They are only
  // informative so you are aware of what your bot is doing.
  var notification = req.body;
  console.log('Received notification of type ' + notification.type + ' with message: ', notification.message);
  res.status(200).send();
};
