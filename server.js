var db = require('db');
db.connect();

var User = require('user');

function run(){
    var vasya = new User("Вася");
    var petya = new User("Petya");

    vasya.hello(petya);

    console.log(db.getPhrase("Run succsessful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}