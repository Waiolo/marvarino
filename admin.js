const database = require('./firebase.js').database

function apply_admin_system(bot) {
  bot.context.admin = {}

  bot.context.admin.add_admin = function (user_id) {
    return database.ref('admins').child(user_id).set(true)
  }

  bot.context.admin.delete_admin = function (user_id) {
    return database.ref('admins').child(user_id).remove()
  }

  bot.context.admin.is_admin = function (user_id) {
    // returns a promise
    return new Promise(function(resolve, reject) {
      database.ref('admins').child(user_id).once('value').then(function (admin) {
        if(admin.val()){
          resolve()
        }else{
          reject()
        }
      })
    })
  }
}

module.exports = apply_admin_system
