import { EventCaller } from './EventCaller.js';

class EventCallerWindow extends EventCaller {
	constructor() {
		super();
		this.eventNames = ["Load"];
		this.loadListener = [];
		this.attach(window);
	}
	
	attachId(id) {
		this.attach(document.getElementById(id));
	}

	addLoadListener(listener) {
		this.loadListener.push(listener);
		this.bindGeneric("onload");
	}
}

export { EventCallerWindow };