const TelegramBot = require('node-telegram-bot-api'); 
const token = '1461740638:AAHmBSdrBsLNah6aa9W63SKDV0yWfwTcaYg';
const bot = new TelegramBot(token, {polling: true});
    
bot.on('message', (msg) => {
    
  //anything
     
});