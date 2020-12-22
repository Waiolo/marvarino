// functional power
const R = require('ramda')
const { fromPromise } = require('folktale/concurrency/future')
// firebase database to query commands
const db = require('./firebase.js').database

// fetchDB_future :: () -> Future
var fetchDB = fromPromise(db.ref('commands').once('value'))

// format :: ([String]) -> String
var format = R.compose(R.join('\n'), R.map(R.concat('/')))

// searchCommand (String) -> ([String]) -> [String]
var searchCommand = (searchString) => R.compose(format, R.filter(R.test(new RegExp(searchString))), R.keys, R.invoker(0, 'val'))

// searchCommand (String) -> String
var retrieveOperand = R.compose(R.join('_'), R.slice(1, 2), R.split(' '))

function exploreCommands (bot) {
  bot.command('search', (ctx) => {
    fetchDB.map(R.compose(ctx.reply, searchCommand(retrieveOperand(ctx.message.text))))
  })
}


module.exports = exploreCommands
