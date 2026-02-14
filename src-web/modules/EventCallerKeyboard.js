import { EventCaller } from './EventCaller.js';

class EventCallerKeyboard extends EventCaller {
	constructor(id) {
		super();
		this.id = id;
		this.eventNames = ["KeyDown", "KeyUp", "KeyPress"];
		this.keyupListener = [];
		this.keydownListener = [];
		this.keypressListener = [];
		this.attachId(id);
	}
	
	attachId(id) {
		this.attach(document.getElementById(id));
	}

	addKeyDownListener(listener) {
		this.keydownListener.push(listener);
		this.bindGeneric("onkeydown");
	}

	addKeyUpListener(listener) {
		this.keyupListener.push(listener);
		this.bindGeneric("onkeyup");
	}

	addKeyPressListener(listener) {
		this.keypressListener.push(listener);
		this.bindGeneric("onkeypress");
	}
}

export { EventCallerKeyboard };