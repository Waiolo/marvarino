function apply_file_system_commands(bot) {
  bot.command('comando_novo', function (ctx) {
    ctx.admin.is_admin(ctx.from.id).then(function () {
      add_commando(ctx)
    })
  })

  bot.hears(/\/.+/, function (ctx) {
    ctx.storage.get_id_link(ctx.message.text).then(function (data) {
      console.log('my type is',data.type)
      get_reply_function(ctx,data.type)({url:data.url})
    })
  })
}

function add_commando(ctx) {
  var data = get_file_type(ctx)
  var command = ctx.message.text.split(" ")
  command.shift()
  ctx.storage.save_id(command.shift(), data.file_id, data.type).then(function () {
    ctx.reply('commando novo galera!')
  })
}

function get_file_type(ctx) {
  var types = ["document","photo","voice","sticker","video","audio"]
  var target_message = ctx.message.reply_to_message
  target_message = target_message || ctx.message

  var type
  types.map(function (item) {
    if(target_message[item]){
      type = item
    }
  })

  if(type == "photo"){
    return {file_id:target_message.photo.pop().file_id, type:'photo'}
  }else{
    return {file_id:target_message[type].file_id, type:type}
  }
}

function get_reply_function(ctx, type){
  var types = {}
  types.document = ctx.replyWithVideo
  types.photo = ctx.replyWithPhoto
  types.voice = ctx.replyWithVoice
  types.sticker = ctx.replyWithSticker
  types.video = ctx.replyWithVideo
  types.audio = ctx.replyWithAudio
  return types[type]
}

module.exports = apply_file_system_commands
