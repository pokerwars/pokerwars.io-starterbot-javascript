
# pokerwars.io-starterbot-javascript
This is a simple example of how you could implement a pokerwars.io bot with javascript and [node.js](https://nodejs.org). This bot will fold every hand, you should change this and try to implement your own strategy!

## Quick start
A few requirements to play:
- have [node.js](https://nodejs.org) installed
- make sure that the computer where your bot runs is visible from the internet, so we can communicate with him/her. [This is an useful service](http://canyouseeme.org/) to double check this. Bot default port is `3000`, but you can change this on the `server.js` file. If you need help to open a port on your router [check this guide](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/) or [contact us](mailto:contact@pokerwars.io). We are always willing to help you.
- [Register with us](https://www.pokerwars.io/) and retrieve your [API token](https://www.pokerwars.io/token) and [username](https://www.pokerwars.io/profile).
- check out this repo with git or download it from [this link](https://github.com/pokerwars/pokerwars.io-starterbot-javascript/archive/master.zip).
- in the code you just downloaded, rename `.env_example` as `.env` and update with your username, API token and bot ip address:
```
USERNAME=insert here your bot username, find it at https://www.pokerwars.io/profile
API_TOKEN=insert here your api token, find it at https://www.pokerwars.io/token
BOT_ENDPOINT=insert here your bot ip address. i.e.: http://1.2.3.4:3000
```

Now you can implement your own poker strategy and play!

## Play!
Now you are ready to run the bot!

```
[pokerwars.io-starterbot-javascript]$ npm install
[pokerwars.io-starterbot-javascript]$ npm run start
```

The bot will try to subscribe to pokerwars.io when it starts up. If no errors happens, it will start playing straightaway, otherwise you should see an error. The most common is that we cannot see your bot, please double check [your bot is visible from the internet](http://canyouseeme.org/) and [you have configured your router correctly](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/). If you do not have access to your router or your bot is behind a firewall, try [ngrok](https://ngrok.com/).

### Playing on Glitch.com?
It's easy:

- Import this repo into a new Glitch project
- Check the Live App URL for your project under `Share` (it will look like https://<MY_POKERWARS_BOT>.glitch.me), you will use it as your BOT_ENDPOINT
- Update your `.env` file as described above
- Start remixing!

Have fun!

## Extending this bot
If something is not clear in this code, refer to also to [our documentation](https://www.pokerwars.io/docs) for the structure and content of the data we send to your bot. How you choose to manipulate that information to inform your bot's strategy is up to you!
