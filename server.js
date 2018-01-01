var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var onoff = require('onoff'); //#A

var Gpio = require('onoff').Gpio,
  pin1 = new Gpio(19, 'out'),
  pin2 = new Gpio(16, 'out'),
  pin3 = new Gpio(26, 'out'),
  pin4 = new Gpio(20, 'out');


app.use(express.static('res'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '\\res\\index.html');
});

function forward(){
	// forward.write(1, function(err){
	// 	console.log("Moving forward")
	// 	backward.writeSync(0);
	// });
	pin1.writeSync(1);
	pin2.writeSync(1);
	pin3.writeSync(0);
	pin4.writeSync(0);
}

function backward(){
	pin3.writeSync(1);
	pin4.writeSync(1);
	pin1.writeSync(0);
	pin2.writeSync(0);
}

function left(){
	// left.write(1, function(err){
	// 	right.writeSync(0);
	// });
	pin2.writeSync(0)
	pin1.writeSync(1);
	pin3.writeSync(0);
	pin4.writeSync(0);
}

function right(){
	// right.write(1, function(err){
	// 	left.writeSync(0);
	// });
	pin1.writeSync(0)
	pin2.writeSync(1);
	pin3.writeSync(0);
	pin4.writeSync(0);
}

function stop(){
	pin1.writeSync(0);
	pin2.writeSync(0);
	pin3.writeSync(0);
	pin4.writeSync(0);
}


io.on('connection', function(socket){
	socket.emit('user connection', { message: "Socket connection with server established."} );

	socket.on('forward', function(msg){
		console.log(msg.message);
		forward();
	});

	socket.on('left', function(msg){
		console.log(msg.message);
		left();
	});

	socket.on('right', function(msg){
		console.log(msg.message);
		right();
	});

	socket.on('stop', function(msg){
		console.log(msg.message);
		stop();
	});

	socket.on('backward', function(msg){
		console.log(msg.message);
		backward();
	});
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
    