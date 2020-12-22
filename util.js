var util = {}

util.include = function (item, list) {
  if(list.length == 0){
    return false
  }
  var v = list.map(function (i) {
    return i === item
  })
  return v.reduce(function (i, j) {
    return i || j
  })
}

module.exports = util
