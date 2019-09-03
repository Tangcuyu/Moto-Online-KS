 /* Socket.io begin */
var eq = io.connect('/eq'),
	windpower = io.connect('/typhoon');
	client = io.connect('/');

function pushEvent(eventKey) {
	console.log(`push ${eventKey} event to server`);
	client.emit(eventKey, () => {});
}
/* Socket.io end */

// Create WebSocket connection.
const socket = new WebSocket('ws://10.3.10.35:8080/ws');

// Connection opened
socket.addEventListener('open', function (event) {
	console.log(event);
	socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
	console.log('Message from server ', event.data);
});

let msg = {
	content: '',
	messageType: '',
	pushType: '',
	reveiverIds: [],
	senderId: ''
}
function wsPush(eventKey) {
	msg.messageType = eventKey;
	// socket.send(JSON.stringify(msg), () => {
	// 	console.log(`message sent to WS server: ${msg}`);
	// });
	
}

