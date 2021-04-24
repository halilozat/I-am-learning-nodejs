let name = "halil"
let sum = function(a,b){
    console.log(a+b)
}

module.exports.names = name
module.exports.sums = sum

exports.minus = function(a,b){
    console.log(a-b)
}

exports.personal = {
    'name' : "halil",
    'age' : 23
}