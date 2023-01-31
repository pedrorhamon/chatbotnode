const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}`)
    await ctx.replyWithHTML();
    await ctx.replyWithMarkdown();
    await ctx.replyWithPhoto();
})

bot.startPolling();