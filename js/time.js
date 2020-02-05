const fs = require('fs'),
	  moment = require('moment');
	  require('colors');

function loop(){
	let	leftToEnd = 7-today.get("day")-1;
	let saturday;
	leftToEnd <= 0 ? saturday = moment().add(7+leftToEnd,'days') : saturday = moment().add(leftToEnd,'days');
	saturday.set({'hours':0,'minutes':0,'seconds':0,'milliseconds':0});
	setTimeout(()=>{
		index.index += 1;
		if(index.index == people.length) index.index = 0;
		today = moment();
		index.date = today.format();
		fs.writeFile("./src/components/main/data/index.json", JSON.stringify(index),function (err) {
			if (err) return console.log(err);
		});
		loop();
	},saturday.diff(today,'milliseconds'));
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