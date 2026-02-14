import { EventCallerKeyboard } from './modules/EventCallerKeyboard.js';
import { EventCallerMouse } from './modules/EventCallerMouse.js';
import { EventCallerWindow } from './modules/EventCallerWindow.js';
//import { Time } from './modules/time.js';
import {Puzzle}  from "./modules/Puzzle/Puzzle.js";
import {SelectSize}  from "./modules/Puzzle/SelectSize.js";
import {SelectImage}  from "./modules/Puzzle/SelectImage.js";
import {ShowImage}  from "./modules/Puzzle/ShowImage.js";

HTMLElement.prototype.addClickListener = function(listener) {
	this.addEventListener("click", listener.onClick.bind(listener));
}

//HTMLElement.prototype.addLoadListener = function(listener) {
//	this.addEventListener("load", listener.onClick.bind(listener));
//}

//HTMLElement.prototype.addMouseDownListener = function(listener) {
//	this.addEventListener("mousedown", listener.onClick.bind(listener));
//}



class MainPuzzle {
	constructor() {
		this.image = "images/nothing.png";
		this.body = document.getElementById("body");
		this.puzzle = new Puzzle(this.body, this.image);
		this.selectSize = new SelectSize(this.puzzle);
		this.selectImage = new SelectImage(this.puzzle);
		this.showImage = new ShowImage(this.puzzle);
		//this.animal = new Dog();
	}
}

window.onload = function() {
	let main = new MainPuzzle();
}