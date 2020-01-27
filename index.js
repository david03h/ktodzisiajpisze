Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
};

const express = require('express'),
	app = express(),
	http = require('http').Server(app), 
	fs = require('fs'),
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

//index handler
var index = require("./src/components/main/data/index.json"),
    people = require("./src/components/main/data/people.json"),
	today = new Date(),
 	then = new Date(index.date),
	leftToEnd = 7-then.getDay();
var days = new Date(today-then).getTime();
days = ((days*0.0000000115741)-leftToEnd)/7;
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

loop();

//odpalanie serwera
http.listen(process.env.PORT || PORT);

module.exports = app;

function loop(){
	let saturday = new Date(today);
	saturday.addDays(7-today.getDay()-1);
	saturday.setHours(0,0,0,0);
	let difference = saturday-today;
	setTimeout(()=>{
		index.index += 1;
		if(index.index == people.length) index.index = 0;
		today = new Date();
		index.date = today;
		fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
			if (err) return console.log(err);
		});
		loop();
	},difference);
}