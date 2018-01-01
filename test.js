var onoff = require('onoff'); //#A

var Gpio = require('onoff').Gpio,
  led = new Gpio(17, 'out');

// process.on('SIGINT', function () { //#F
//   clearInterval(interval);
//   led.writeSync(0); //#G
//   led.unexport();
//   console.log('Bye, bye!');
//   process.exit();
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

function toggle(){
	var val = led.readSync();
	var set = ( val + 1) % 2;
	led.writeSync(set);
	return set;
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html');
});

io.on('connection', function(socket){
	console.log('A user connected.');
	socket.on('toggle', function(msg){
		io.emit('toggle', toggle());
	});
});

app.get('/toggle', function(req, res){
	toggle();
	res.send("Toggle");
})



http.listen(3000, function(){
  console.log('listening on *:3000');
});
