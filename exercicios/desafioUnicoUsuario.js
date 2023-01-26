const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(ctx => {
    ctx.update.message.from.id === 1234 ? ctx.reply('Ao seu dispor, mestre!') : ctx.reply('Sinto muito, mas eu só falo com o meu mestre');
});

bot.startPolling();