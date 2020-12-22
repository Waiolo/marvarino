const messages = require('./messages.js')
const apply_cuzinho_middelware = require('./cuzinho_taken.js')
const Telegraf = require('telegraf')
const voteban = require('./voteban.js')
const v_print = require('./voteban_prettyprint.js')

const explorer = require('./explorer.js')
const apply_admin_system = require('./admin.js')
const apply_file_system = require('./storage.js')
const apply_admin_commands = require('./admin_cmd.js')
const apply_file_system_commands = require('./storage_cmd.js')
const API_TOKEN = '1461740638:AAHmBSdrBsLNah6aa9W63SKDV0yWfwTcaYg'
//const API_TOKEN = '352679604:AAElR92UVDYwXAseAlgh_V9Q7LbqteC8ieo'
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://git.heroku.com/marvinclub.git';
const bot = new Telegraf(API_TOKEN)

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})

var frases_aleatorias = []

bot.command('grupos',function (ctx) {
  ctx.reply(messages.grupos)
})

bot.command('fraco',function (ctx) {
  ctx.reply('VOCÊ É FRACO, TE FALTA ÁGUA')
})

bot.command('start',function (ctx) {
  ctx.reply("Oi bucetuda, eu sou um bot pra fazer umas parada la pra moderacao (akeles corno kkkkkk)\nUse /ajuda pra falar cmg, gata")
})

bot.command('ajuda',function (ctx) {
  var data = ["use /grupos para ver os grupos de cada board do brchan em telegram",
              "Lurk MOAR"]
  ctx.reply(data.join("\n"))
})

bot.command('mate',function (ctx){
  console.log(ctx.message)
  ctx.reply(`mate um ${ctx.message.text.split(" ").slice(1).join(" ")} hoje mesmo`)
})

bot.command('voteban',function (ctx) {
  var name = ctx.message.text.split(" ")[1]
  var r = voteban.add(name, ctx.chat.id, ctx.from.first_name)
  if (r.ban){
    ctx.telegram.kickChatMember(r.chat_id,voteban.getUser(r.guilty))
  }
  ctx.reply(v_print(r))
})

bot.command('k',function (ctx) {
  ctx.reply('kkk eae men')
})

bot.command('/belle_broxando',function (ctx) {
  ctx.reply(`Belle:
Não bebam e façam sexo
Merdalher riu de mim pq não acertei a xota dela
Mandei ele se foder e meter o pé senão ia !meter a porrada
Meu pai me chamou de vuado
Broxei meu pau
Nunca mais saio de casa
Deu caimbra na perna e não acertei a xota da merdalher
Foi aquela caimbra fraca no
Parada de cair no chão chorando
Belle:
Caralho
Acho que peguei alguma dst
Com certeza
Absoluta`)
})

bot.command('add',function (ctx) {
  frases_aleatorias.push(ctx.message.text.split(" ").slice(1).join(" "))
  ctx.reply(ctx.message.text.split(" ").slice(1).join(" "))
})

bot.command('poceta',function (ctx) {
  ctx.reply(frases_aleatorias[Math.floor(Math.random()*frases_aleatorias.length)])
})

bot.command('15',function (ctx) {
  ctx.reply('Oh mermao manda ese cara tomar no cu, ele tem 15 anos')
})

bot.command('15v',function (ctx) {
  ctx.replyWithVoice({
    source: '15anos.ogg'
  })
})

bot.command('tuga',function (ctx) {
  ctx.replyWithVoice({
    source: 'tuga.ogg'
  })
})

bot.command('trolado',function (ctx) {
  ctx.replyWithVoice({
    source: 'trolado.ogg'
  })
})

bot.command('guarana',function (ctx) {
  ctx.replyWithVoice({
    source: 'guarana.ogg'
  })
})

bot.command('mods',function (ctx) {
  ctx.replyWithPhoto({
    source: 'mod.jpg'
  })
})

bot.command('kalinka_perdendo_o_nofap',function (ctx) {
  ctx.replyWithPhoto({
    source: 'kalinka.jpg'
  })
})


bot.command('dola_mamando_adm',function (ctx) {
  ctx.replyWithPhoto({
    source: 'dola.jpg'
  })
})

bot.command('dellette_nao_quer_apanhar_da_policia',function (ctx) {
  ctx.replyWithPhoto({
    source: 'dellete_branco.jpg'
  })
})

bot.command('dellette_comendo_o_dolar',function (ctx) {
  ctx.replyWithPhoto({
    source: 'dellete_dolar.jpg'
  })
})

bot.command('bbzin',function (ctx) {
  ctx.replyWithSticker('CAADAQADjwAD98YoCAAB_zWZqqZcFAI')
})

bot.command('chora',function (ctx) {
  ctx.replyWithSticker('CAADAQADkQAD98YoCJL3-DFOOgfJAg')
})

bot.command('dellette_na_academia',function (ctx) {
  ctx.replyWithPhoto({
    source: 'academia.jpg'
  })
})

bot.command('pocka_chupa_pau',function (ctx) {
  ctx.replyWithPhoto({
    source: 'pocka.jpg'
  })
})

bot.command('traveco_obeso_quer_foder',function (ctx) {
  ctx.replyWithPhoto({
    source: 'thay.jpg'
  })
})

bot.command('desbloqueia',function (ctx) {
  var t = ctx.message.text.split(" ").slice(1).join(" ")
  ctx.reply(`${t} me desbloqueia ae cara`)
})

bot.command('dellette_acordando',function (ctx) {
  ctx.replyWithVideo({
    source: 'deletteAcordando.gif.mp4'
  })
})

bot.command('dellette_esperando',function (ctx) {
  ctx.replyWithVideo({
    source: 'deletteEsperando.gif.mp4'
  })
})

bot.command('dolar_falando_merda',function (ctx) {
  ctx.replyWithPhoto({
    source: 'dolar_merda.jpg'
  })
})

bot.command('ai_meu_cu',function (ctx) {
  ctx.replyWithVoice({
    source: 'cu.ogg'
  })
})

bot.command('esquerdista',function (ctx) {
  ctx.replyWithVoice({
    source: 'esquerdista.ogg'
  })
})

bot.command('kalinka_falando_sobre_o_phaze',function (ctx) {
  ctx.replyWithVoice({
    source: 'belle_gemidao.ogg'
  })
})

explorer(bot)
apply_cuzinho_middelware(bot)
apply_admin_system(bot)
apply_admin_commands(bot)
apply_file_system(bot)
apply_file_system_commands(bot)

bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)
