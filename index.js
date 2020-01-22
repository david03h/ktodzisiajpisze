const express = require('express'),
	app = express(),
	http = require('http').Server(app),
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

//odpalanie serwera
http.listen(process.env.PORT || PORT);

module.exports = app;