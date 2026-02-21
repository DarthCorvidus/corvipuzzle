import { EventCallerMouse } from '/modules/EventCallerMouse.js';
import { EventCallerWindow } from '/modules/EventCallerWindow.js';
import { Tile }  from '/modules/Puzzle/Tile.js';

class Puzzle {
	constructor(body, image) {
		this.body = body;
		this.size = 100;
		this.image = image;
		this.caller = new EventCallerMouse();
		this.tiles = [];
		this.current = null;
		this.swapSource = null;
		this.swapTarget = null;
		this.img = document.createElement("img");
		this.img.src = this.image;
		this.img.style.display = "none";
		this.body.appendChild(this.img);
		let caller = new EventCallerWindow();
		caller.attach(this.img);
		caller.addLoadListener(this);
		console.log(this.body.constructor.name);
	}
	
	setImage(image) {
		console.log(image);
		this.image = image;
		this.img.src = image;
	}
	
	getImg() {
		return this.img;
	}
	
	
	setSize(size) {
		this.size = size;
	}

	/**
	 * 
	 * @returns {HTMLBodyElement}
	 */
	getBody() {
		return this.body;
	}
	
		
	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}	

	create() {
		for(let i=0;i<this.tiles.length;i++) {
			this.body.removeChild(this.tiles[i].getDiv())
		}
		this.caller = new EventCallerMouse();
		this.tiles = [];
		console.log("Dimensions: "+this.img.width+"×"+this.img.height);
		let widthTiles = Math.ceil(this.img.width/this.size);
		let heightTiles = Math.ceil(this.img.height/this.size);
		let widthCanvas = widthTiles * this.size;
		let heightCanvas = heightTiles * this.size;
		let offsetX = Math.floor((widthCanvas - this.img.width)/2);
		let offsetY = Math.floor((heightCanvas - this.img.height)/2);
		console.log("X Tiles: "+widthTiles);
		console.log("Y Tiles: "+heightTiles);
		console.log("Canvas Size: ("+widthCanvas+", "+heightCanvas+")");
		console.log("Offset: ("+offsetX+", "+offsetY+")");
		
		for(let y=0;y<heightTiles;y++) {
			for(let x=0;x<widthTiles;x++) {
				this.createTile(x, y, offsetX, offsetY);
			}
		}
		let coord = [];
		for(let i=0;i<this.tiles.length;i++) {
			coord.push(this.tiles[i].getX()+","+this.tiles[i].getY());
		}
		coord = this.shuffle(coord);
		for(let i=0;i<coord.length;i++) {
			let split = coord[i].split(",");
			this.tiles[i].reposition(split[0], split[1]);
		}
		//this.caller.addClickListener(this);
	}
	
	createTile(x, y, offsetX, offsetY) {
		let tile = new Tile(this.size, x, y, this.img.src, offsetX, offsetY);
		tile.getDiv().id = this.tiles.length;
		this.body.appendChild(tile.getDiv());
		this.caller.attach(tile.getDiv());
		this.tiles.push(tile);
		tile.getDiv().addClickListener(this);
	}

	onClick(event) {
		let id = event.target.id;
		let tile = this.tiles[id];
		if(tile.isCorrect()) {
			return;
		}
		if(this.swapSource === null) {
			this.swapSource = tile;
			return;
		}
		let tmpX = tile.getX();
		let tmpY = tile.getY();
		tile.reposition(this.swapSource.getX(), this.swapSource.getY());
		this.swapSource.reposition(tmpX, tmpY);
		this.swapSource = null;
	}
	
	onLoad(event) {
		this.create();
	}

}

export { Puzzle};