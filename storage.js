// uses firebasedb to save the file_id of the images stored in telegram.
// so no aditional storage here, only ids.

const database = require('./firebase.js').database

function apply_file_system(bot) {
  bot.context.storage = {}

  bot.context.storage.save_id = function(cmd, file_id, type){
    return database.ref('commands').child(cmd).set({file_id:file_id, type:type})
  }

  bot.context.storage.get_id_link = function (cmd) {
    return new Promise(function(resolve, reject) {
      get_id_from_firebase(cmd).then(function (snapshot) {

        var file_id = snapshot.val().file_id
        file_id = file_id || snapshot.val()

        var type = snapshot.val().type
        type = type || "photo"

        bot.telegram.getFileLink(file_id).then(function (url) {
          resolve({url:url, type:type})
        })
      })
    })
  }
}

function get_id_from_firebase(cmd, cb, resolve){
  // returns a promise
  return database.ref('commands').child(cmd).once('value')
}

module.exports = apply_file_system
