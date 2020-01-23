const express = require('express'),
	app = express(),
	http = require('http').Server(app), 
	fs = require('fs')
	PORT = 4000;

//postatwowa konfiguracja
app.set('host', '0.0.0.0');

app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.set('views', './views');

//statyczne pliki
app.use(express.static('./public'));

//routing
require('./routes/router.js')(app);

var index = require("./src/components/main/data/index.json");
var people = require("./src/components/main/data/people.json");
var today = new Date();
var then = new Date(index.date);
var leftToEnd = 7-then.getDay();
var days = new Date(today-then).getTime();
days *= 0.0000000115741;
days -= leftToEnd;
days /= 7;
if(days>0){
	index.index += Math.floor(days)+1;
	if(index.index == people.length) index.index = 0;
	while(index.index > people.length-1){
		let a = index.index - (people.length-1);
		index.index = -1 + a;
	}
	index.date = today;
	fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
		if (err) return console.log(err);
	});
}

//odpalanie serwera
http.listen(process.env.PORT || PORT);

module.exports = app;