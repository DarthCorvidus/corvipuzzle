class EventCaller {
	constructor() {
		this.targets = [];
	}

	/**
	 * Add further targets.
	 * 
	 * @param {Object} target
	 * @returns {undefined}
	 */
	attach(target) {
		this.targets.push(target);
	}
	
	/**
	 * Generic bind to event handler.
	 * @param {String} event type
	 * @returns {undefined}
	 */
	bindGeneric(event) {
		for(let i = 0;i<this.targets.length;i++) {
			//console.log("bind "+event+" to "+this.targets[i]);
			this.targets[i][event] = this.callGeneric.bind(this);
		}
	}
	
	/**
	 * callGeneric does the final event handling, ie calls the proper event
	 * listener.
	 * @param {KeyboardEvent} event
	 * @returns {undefined}
	 */
	callGeneric(event) {
		//console.log(event.type+" has fired.");
		//Iterates over eventTypes.
		for(let i = 0; i<this.eventNames.length;i++) {
			//get event type as string.
			let name = this.eventNames[i];
			//lower case event type.
			let lower = name.toLowerCase();
			if(lower!==event.type) {
				continue;
			}
			//console.log("Listener: "+lower+"Listener")
			/**
			 * Call on+name on every listener for a specific event type with
			 * the eventlistener as scope. The same as calling manually:
			 * this.keydownListener[0].onKeyDown(event);
			 */
			for(let k = 0;k<this[lower+"Listener"].length;k++) {
				this[lower+"Listener"][k]["on"+name].call(this[lower+"Listener"][k], event);
			}
		}
	}
}

export { EventCaller };