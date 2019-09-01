var eq = io.connect('/eq'),
	windpower = io.connect('/typhoon');
	client = io.connect('/');

function pushEvent(eventKey) {
	console.log(`push ${eventKey} event to server`);
	client.emit(eventKey, () => {});
}

