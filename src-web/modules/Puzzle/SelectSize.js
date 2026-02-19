import { EventCallerMouse } from '/modules/EventCallerMouse.js';
class SelectSize {
	/**
	 * 
	 * @param {Puzzle} puzzle
	 * @returns {SelectSize}
	 */
	constructor(puzzle) {
		this.puzzle = puzzle;
		this.body = puzzle.getBody();
		this.select = document.createElement("select");
		let sizes = ["20", "30", "40", "50", "60", "70", "80", "90", "100"];
		let caller = new EventCallerMouse();
		for(let i=0;i<sizes.length;i++) {
			let option = document.createElement("option");
			option.innerHTML = sizes[i]+"×"+sizes[i]+" Pixel";
			option.value = sizes[i];
			caller.attach(option);
			this.select.appendChild(option);
		}
		caller.addClickListener(this);
		//this.select.style.position = "absolute";
		//this.select.style.top = "10px";
		//this.select.style.left = "40px";
		//this.body.appendChild(this.select);
	}
	
	onClick(event) {
		this.puzzle.setSize(event.target.value);
		this.puzzle.create();
	}
	
	getElement() {
		return this.select;
	}
}

export{ SelectSize };
