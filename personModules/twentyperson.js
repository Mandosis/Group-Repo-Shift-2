var person = require("./person");
var persons = [];


var makePeople = function(){
  for (var it = 0; it < 19; it++) {
    person();
  }
}

module.exports = makePeople;