var pretty_print = function (data) {
  if(data.newVote){
    return `novo voteban contra ${data.guilty} votos: ${data.num}/${data.maxVotes}`
  }else{
    if(data.added){
      if(data.ban){
        return `voteban cumplido. Banindo o gordao`
      }else{
        return `voteban ${data.num}/${data.maxVotes}`
      }
    }else{
      return `voce ja tinha votado seu cuzao ${data.num}/${data.maxVotes}`
    }
  }
}

module.exports = pretty_print
