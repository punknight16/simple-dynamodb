var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var path = '/'+req.url.split(/\/|\?/)[1];
	console.log('received request of path: '+ req.url + ' parsed to: '+path );
	switch(path){
		case '/':
			var stream = fs.createReadStream(__dirname + '/_page/entry.html');
			stream.pipe(res);
			break;
		case '/home':
			var stream = fs.createReadStream(__dirname + '/_page/home.html');
			stream.pipe(res);
			break;
		case '/_static':
			var stream = fs.createReadStream(__dirname + req.url);
			stream.pipe(res);
			break;
		default:
			res.statusCode = 404;
			res.end('404: not found')
	}
}).listen(3000, function(){
	console.log('server running on 3000');
})