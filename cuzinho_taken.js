module.exports = function (bot) {
  bot.command('cu', function (ctx) {
    ctx.reply(`o ${ctx.from.first_name} esta com o cuzinho [taken]`)
  })
}
