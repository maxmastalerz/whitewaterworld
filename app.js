var express = require('express'),
	http = require('http'),
	mongoose = require('mongoose'),
	env = process.env.NODE_ENV || 'development',
	config = require('./config.js')[env];

//mongoose.connect(config.db);

var app = module.exports = express();
require('./express-settings.js')(app);
require('./express-routes.js')(app);

if(app.get('env')==='development') {
	app.use(require('errorhandler')());
	app.locals.pretty = true;
}

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port '+app.get('port')+' in a '+env+' environment.');
});