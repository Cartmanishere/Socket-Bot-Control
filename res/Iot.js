setTimeout(function(){
		$("#loader-wrapper").hide();
	}, 3000);

$(document).ready(function(){

		var socket = io();

		socket.on('user connection', function(msg){
			Materialize.toast(msg.message, 20000,'toast-class-connection');
		});
	
		var forward_button = document.getElementById("forward_button");
		forward_button.addEventListener("click", function(){
			socket.emit('forward', { message: "Move foward"});
			//Materialize.toast('The button is pressed down', 2000,'toast-class');
		});
		forward_button.addEventListener("mouseup", function(){
			//socket.emit('stop', { message: "Stop"});
			Materialize.toast('The button is released', 2000,'toast-class');
		});

		var left_button = document.getElementById("left_button");
		left_button.addEventListener("click", function(){
			socket.emit('left', { message: "Move left"});
			//Materialize.toast('The button is pressed down', 2000,'toast-class');
		});
		// left_button.addEventListener("mouseup", function(){
		// 	//socket.emit('stop', { message: "Stop"});
		// 	Materialize.toast('The button is released', 2000,'toast-class');
		// });

		var right_button = document.getElementById("right_button");
		right_button.addEventListener("click", function(){
			socket.emit('right', { message: "Move right"});
			//Materialize.toast('The button is pressed down', 2000,'toast-class');
		});
		// right_button.addEventListener("mouseup", function(){
		// 	//socket.emit('stop', { message: "Stop"});
		// 	Materialize.toast('The button is released', 2000,'toast-class');
		// });

		var backward_button = document.getElementById("backward_button");
		backward_button.addEventListener("click", function(){
			socket.emit('backward', { message: "Move backward"});
			//Materialize.toast('The button is pressed down', 2000,'toast-class');
		});
		// backward_button.addEventListener("mouseup", function(){
		// 	//socket.emit('stop', { message: "Stop"});
		// 	Materialize.toast('The button is released', 2000,'toast-class');
		// });

		var stop_button = document.getElementById("stop_button");
		stop_button.addEventListener("mousedown", function(){
			//socket.emit('stop', { message: "Stop"});
			//Materialize.toast('The button is pressed down', 2000,'toast-class');
		});
		stop_button.addEventListener("mouseup", function(){
			socket.emit('stop', { message: "Stop"});
			//Materialize.toast('The button is released', 2000,'toast-class');
		});

		forward_button.classList.remove('scale-out');
		forward_button.classList.add('scale-in');

		left_button.classList.remove('scale-out');
		left_button.classList.add('scale-in');

		right_button.classList.remove('scale-out');
		right_button.classList.add('scale-in');

		backward_button.classList.remove('scale-out');
		backward_button.classList.add('scale-in');

		stop_button.classList.remove('scale-out');
		stop_button.classList.add('scale-in');

		var heading_text = document.getElementById("main-heading");
		heading_text.classList.remove('scale-out');
		heading_text.classList.add('scale-in');

	});

