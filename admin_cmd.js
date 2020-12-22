function apply_admin_commands(bot) {
  bot.command('sou_ademir', function (ctx) {
    ctx.admin.is_admin(ctx.from.id).then(function () {
      ctx.reply('oi ademir')
    }).catch(function () {
      ctx.reply('voce nao e ademir')
    })
  })

  bot.command('add_ademir', function (ctx) {
    // get the user id
    ctx.admin.is_admin(ctx.from.id).then(function () {
      var new_admin_id = ctx.message.reply_to_message.from.id
      ctx.admin.add_admin(new_admin_id).then(function () {
        ctx.reply('ademir novo galera!')
      })
    }).catch(function () {
      ctx.reply('xiu fdp')
    })
  })

  bot.command('delete_ademir',function (ctx) {
    // get the user id
    ctx.admin.is_admin(ctx.from.id).then(function () {
      var new_admin_id = ctx.message.reply_to_message.from.id
      ctx.admin.delete_admin(new_admin_id).then(function () {
        ctx.reply('ademir foi despedido galera!')
      })
    }).catch(function () {
      ctx.reply('xiu fdp')
    })
  })
}


module.exports = apply_admin_commands
