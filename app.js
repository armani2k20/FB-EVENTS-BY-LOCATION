// requires the required modules
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const indexRoute = require("./routes/indexRoute");
const eventRoute = require("./routes/eventSearchRoute");

//View Engine
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(indexRoute);
app.use(eventRoute);

//checks the listening port and console logs the result
let listenerPort = app.listen(3000, function () {
	console.log('Your app is ready and listening on port ' + listenerPort.address().port);
});