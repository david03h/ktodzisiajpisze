const fs = require('fs'),
	  moment = require('moment');
	  require('colors');
var saturday;
var timeout;

function loop(){
	let	leftToEnd = 7-today.get("day")-1;
	leftToEnd <= 0 ? saturday = moment().add(7+leftToEnd,'days') : saturday = moment().add(leftToEnd,'days');
	saturday.set({'hours':0,'minutes':0,'seconds':0,'milliseconds':0});
	timeout = setTimeout(()=>{
		setTimeout(()=>{
			index.index += 1;
			if(index.index == people.length) index.index = 0;
			today = moment();
			index.date = today.format();
			fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
				if (err) return console.log(err);
			});
			loop();
		},10000);
	},saturday.diff(today,'milliseconds'));
	timeout.date = moment();
}

//index handler

var index; 
var people = require("../src/components/main/data/people.json");
try {
	index = require("./src/components/main/data/index.json");
} catch (error) {
	index = {"index":1,"date":"2020-01-27T00:00:00+01:00"};
	fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
		if (err) return console.log(err);
	});
}

var today = moment();
if(index && index != ""){
	var then = moment(index.date);
    let	leftToEnd = 7-then.get("day")-1;
    var days = (today.diff(then,'days',true)-leftToEnd)/7;
}
if(days && days>0){
    index.index += Math.floor(days)+1;
    if(index.index == people.length) index.index = 0;
    while(index.index > people.length-1){
		let a = index.index - (people.length-1);
		index.index = -1 + a;
    }
    index.date = today.format();
    fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
		if (err) return console.log(err);
	});
}

loop();


// Commands

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write("> ");

process.stdin.on('data', function (text) {
	switch(text.trim()){
		case "status":
			console.log(timeout.date.format().green,saturday.format().green,saturday.diff(timeout.date,"milliseconds"));
			console.log(saturday.diff(moment(),"milliseconds"));
		break;
		case "quit":
			console.log("Server Stop".yellow.bold);
			process.exit(0);
		default:
			console.log(`There's no command named '${text.trim()}'.`.red+`
Available Commands:`.white+`
- status    [prints timeout data]
- quit      [stops server]`
.green);
		break;
	}
	process.stdout.write("> ");
});