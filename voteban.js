var util = require("./util.js")

var maxVotes = 5
var voteban = {}

var votation = function (guilty_id,chat_id) {
  this.votes = []
  this.guilty_id = guilty_id
  this.chat_id = chat_id

  this.add = function (data) {
    if(util.include(data,this.votes)){
      return false
    }else{
      this.votes.push(data)
      return true
    }
  }

  this.num = function () {
    return this.votes.length
  }
}

voteban.votations = []
voteban.users = []

voteban.addUser = function (first_name,user_id) {
  console.log(voteban.users)
  var included = false
  voteban.users.forEach(function (i) {
    if(i.name == first_name){
      included = true
    }
  })
  if(!included){
    voteban.users.push({name:first_name, id:user_id})
  }
}

voteban.getUser = function (first_name) {
  var toret
  voteban.users.forEach(function (i) {
    console.log(i)
    console.log(first_name)
    if(i.name == first_name){
      console.log(i.id)
      toret =  i.id
    }
  })
  return toret
}

voteban.add = function (guilty,chat_id,user) {
  var data = {}
  data.guilty = guilty
  data.maxVotes = maxVotes

  identifier = guilty+chat_id

  if(!voteban.votations[identifier]){
    voteban.votations[identifier] = new votation(guilty,chat_id)
    data.newVote = true
  }

  data.added = voteban.votations[identifier].add(user)
  data.num = voteban.votations[identifier].num()

  data.ban = data.num >= data.maxVotes
  data.guilty_id = voteban.votations[identifier].guilty_id
  data.chat_id = voteban.votations[identifier].chat_id

  return data
}

module.exports = voteban
