var util = require('util');

var phrases = {
	'hello' : 'привет',
	'world' : 'мир'
}

function PhraseError(status, message){
	this.status = status;
	this.message = message;
	Error.captureStackTrace(this, PhareseError);
}

util.inherits(PhraseError, Error);

PhraseError.prototype.name = 'PhraseError';

function HTTPError(status, message){
	this.message = message;
	this.status = status;
	Error.captureStackTrace(this, HTTPError);
}

util.inherits(HTTPError, Error);

HTTPError.prototype.name = 'HTTPError';

function getPhrases(name){
	if (!phrases[name]){
		throw new PhraseError(500, 'there is no such phrase ' + name); //HTTP 500, уведомление!
	} else {
		return phrases[name];
	}
}

function makePage(url){
	if (url != 'index.html'){
		throw new HTTPError(404, 'there is no such page with name ' + url) //HTTP 404
	} else {
		return util.format('%s, %s!', getPhrases('1hello'), getPhrases('world'));
	}
}

try{
	console.log(makePage('index.html'));
} catch(e) {
	if (e instanceof HTTPError) {
		console.log(e.status, e.message);
	} else {
		console.error(util.format("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack));
	}
}
