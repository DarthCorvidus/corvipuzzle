import { EventCallerMouse } from '/modules/EventCallerMouse.js';
class Tile {
	constructor(size, x, y, image, offsetX, offsetY) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.x = x;
		this.y = y;
		this.originalX = x;
		this.originalY = y;
		this.size = size;
		this.image = image;
		this.div = document.createElement("div");
		this.div.style.minWidth = size+"px";
		this.div.style.width = size+"px";
		this.div.style.maxWidth = size+"px";
		this.div.style.minHeight = size+"px";
		this.div.style.height = size+"px";
		this.div.style.maxHeight = size+"px";
		this.div.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0, 0.5)), url("+image+")";
		//this.div.style.backgroundImage = "linear-gradient(black, white), url("+image+")";
		this.div.style.position = "absolute";
		this.div.style.left = (size*x)+"px";
		this.div.style.top = ((size*y)+100)+"px";
		this.div.style.backgroundPositionX = ((-(x*size))+this.offsetX)+"px";
		this.div.style.backgroundPositionY = ((-(y*size))+this.offsetY)+"px";
		let caller = new EventCallerMouse();
		caller.attach(this.div);
		caller.addMouseEnterListener(this);
		caller.addMouseLeaveListener(this);
	}
	
	reposition(x, y) {
		this.div.style.left = (this.size*x)+"px";
		this.div.style.top = ((this.size*y)+100)+"px";
		this.x = x;
		this.y = y;
		//console.log(this.x+" "+this.originalX);
		if(this.originalX == this.x && this.originalY == this.y) {
			//console.log("correct position "+this.x+" "+this.originalX);
			this.div.style.backgroundImage = "url("+this.image+")";
		}
	}
	
	highlight() {
		this.div.style.backgroundImage = "url("+this.image+")";
	}
	
	lowlight() {
		if(this.isCorrect()) {
			return;
		}
		this.div.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0, 0.5)), url("+this.image+")";
	}
	
	isCorrect() {
		return this.originalX == this.x && this.originalY == this.y;
	}
	
	getX() {
		return this.x;
	}
	
	getY() {
		return this.y;
	}
	
	getDiv() {
		return this.div;
	}
	
	onMouseEnter(event) {
		this.highlight();
	}
	
	onMouseLeave(event) {
		this.lowlight();
	}
}

export {Tile}