var User = require('./User');
var db = require('db');
var log = require('logger')(module);
db.connect();
// require('./user.js')

function run(){
  var vasya = new User('vasya');
  var petya = new User('petya');
  // var vasya = new User('vasya');
  // var petya = new User('petya');
  log(db.getPhrase('require is successfull'));
  vasya.hello(petya);
  petya.hello(vasya);
}

if (module.parent) {
  exports.run = run;
}else {
  run();
}
