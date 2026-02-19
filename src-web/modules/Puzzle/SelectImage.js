import { EventCallerMouse } from '/modules/EventCallerMouse.js';
class SelectImage {
	/**
	 * 
	 * @param {Puzzle} puzzle
	 * @returns {SelectSize}
	 */
	constructor(puzzle) {
		this.puzzle = puzzle;
		this.body = puzzle.getBody();
		this.select = document.createElement("select");
		this.init();
	}
	
	async init() {
		const response = await fetch("images.php");
		const list = await response.json();
		let caller = new EventCallerMouse();
		for(let item of list) {
			let option = document.createElement("option");
			option.innerHTML = item;
			option.value = item;
			caller.attach(option);
			this.select.appendChild(option);
		}
		caller.addClickListener(this);
		//this.select.style.position = "absolute";
		//this.select.style.top = "10px";
		//this.select.style.left = "200px";
		//this.body.appendChild(this.select);
	}
	
	getElement() {
		return this.select;
	}
	
	onClick(event) {
		this.puzzle.setImage("images/"+event.target.value);
		this.puzzle.create();
	}
}

export{ SelectImage };
