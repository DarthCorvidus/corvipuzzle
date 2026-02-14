import { EventCallerMouse } from '/modules/EventCallerMouse.js';
class ShowImage {
	/**
	 * 
	 * @param {Puzzle} puzzle
	 * @returns {SelectSize}
	 */
	constructor(puzzle) {
		this.puzzle = puzzle;
		this.img = this.puzzle.getImg();
		this.body = puzzle.getBody();
		this.button = document.createElement("button");
		this.body.appendChild(this.button);
		this.button.innerHTML = "Show";	
		this.button.style.position = "absolute";
		this.button.style.left = "340px";
		this.button.style.top = "10px";
		//this.button.addMouseDownListener(this);
		let caller = new EventCallerMouse();
		caller.attach(this.button);
		caller.addMouseDownListener(this);
		caller.addMouseUpListener(this);
	}

	onMouseDown(event) {
		this.img.style.display = "";
		this.img.style.position = "absolute";
		this.img.style.left = "0px";
		this.img.style.top = "100px";
		this.img.style.zIndex = 5;
	}
	
	onMouseUp(event) {
		this.img.style.display = "none";
	}
}

export{ ShowImage };
