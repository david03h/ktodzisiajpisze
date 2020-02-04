import moment from 'moment';
const fs = require('fs');

function loop(){
    console.log(7-today.getDay()-1);
	if(7-today.getDay()-1 <= 0){
		console.log("jd");
	}else{
		let saturday = new Date(today);
		saturday.addDays(7-today.getDay()-1);
		saturday.setHours(0,0,0,0);
		let difference = saturday-today;
	}
	setTimeout(()=>{
		index.index += 1;
		if(index.index == people.length) index.index = 0;
		today = new Date();
		today.addHours(1);
		index.date = today;
		fs.writeFile("../src/components/main/data/index.json", JSON.stringify(index),function (err) {
			if (err) return console.log(err);
		});
		loop();
	},1000000000);
}

//index handler

var index; 
var people = require("../src/components/main/data/people.json");
try {
	index = require("../src/components/main/data/index.json");
} catch (error) {
	index = {"index":1,"date":"2020-01-27T00:00:00.000Z"};
	fs.writeFile("../src/components/main/data/index.json", JSON.stringify(index),function (err) {
		if (err) return console.log(err);
	});
}

var today = new Date("2020-02-07T23:00:00.000Z");
console.log(today);
if(index && index != ""){
	var then = new Date(index.date);
	var	leftToEnd = 7-then.getDay()-1;
	var days = new Date(today-then).getTime();
	days = ((days*0.0000000115741)-leftToEnd)/7;
}
if(days && days>0){
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