import { MouseEventCaller } from './modules/mouseeventcaller.js';
import { KBEventCaller } from './modules/kbeventcaller.js';
import { Time } from './modules/time.js';

class Book {
	constructor(title, author) {
		this.author = author;
		this.title = title;
		//console.log(document);
	}
	
	printAjax() {
		if (this.xhttp.readyState == 4 && this.xhttp.status == 200) {
			console.log(this.xhttp.responseText)
		}
		console.log("xyz");
	}
	
	printCover() {
		console.log(this.author+" "+this.title);
		console.log(this);
	}
}

class CSV {
	constructor(url) {
		this.values = [];
		//this.button = document.getElementById("button");
		//console.log(this.button);
		//this.button.addEventListener("click", event => {this.printCover()});
		this.xhttp = new XMLHttpRequest();
		this.xhttp.onreadystatechange = this.fetchCSV.bind(this);
		this.xhttp.open("GET", "liste.txt", true);
		this.xhttp.send();
		console.log(this.values);
	}
	
	fetchCSV() {
		if (this.xhttp.readyState == 4 && this.xhttp.status == 200) {
			this.parseCSV(this.xhttp.responseText);
		}
		//console.log(this.values);
	}
	/**
	 * 
	 * @param {string} csv
	 * @returns {void}
	 */
	parseCSV(csv) {
		console.log(csv);
		let lines = csv.split("\n");
		for(let i=0;i<lines.length;i++) {
			this.parseLine(lines[i]);
		}
	}
	/**
	 * 
	 * @param {string} line
	 * @returns {undefined}
	 */
	parseLine(line) {
		let split = line.split(";");
		this.values.push(split);
	}
}

/**
 * 
 * @type MouseEvent
 * 
 */
class Main {
	constructor() {
		this.inSeconds = document.getElementById("seconds");
		this.inDecimal = document.getElementById("dec");
		this.inHMS = document.getElementById("hms");
	}
	onClick(event) {
		console.log("Click!");
	}

	onDoubleClick(event) {
		console.log("Doubleclick");
	}
	
	onMouseEnter(event) {
		console.log("Enter");
	}
	
	onMouseLeave(event) {
		console.log("Leave");
	}
	
	onMouseMove(event) {
		console.log("Move");
	}
	/**
	 * 
	 * @param {KeyboardEvent} event
	 * @returns {undefined}
	 */
	onKeyUp(event) {
		if(event.target.id==="seconds" && event.target.value!=="") {
			let seconds = event.target.value;
			let time = new Time(seconds);
			this.inDecimal.value = time.getDecimal();
			this.inHMS.value = time.getHMS();
		}
		if(event.target.id==="dec" && event.target.value!=="") {
			let dec = event.target.value;
			let time = new Time(dec*3600);
			this.inSeconds.value = dec*3600;
			this.inHMS.value = time.getHMS();
		}
		
		if(event.target.id==="hms" && event.target.value!=="") {
			let time = Time.fromHMS(event.target.value);
			this.inSeconds.value = time.getSeconds();
			this.inDecimal.value = time.getDecimal();
		}
	}
}

class Aux {
	onClick(event) {
		console.log("Auxiliary click listener");
	}
}

window.onload = function() {
	console.log("squid!");
	//let book01 = new Book("Brave New World", "Aldous Huxley");
	let main = new Main();
	let aux = new Aux();
	//let csv = new CSV("liste.txt");
	
	let movementCaller = new MouseEventCaller("input", main);
	//movementCaller.addClickListener(main);
	//movementCaller.addEnterListener(main);
	//movementCaller.addLeaveListener(main);
	//movementCaller.addMoveListener(main);
	//movementCaller.addDoubleClickListener(main);
	
	let caller = new KBEventCaller("seconds");
	caller.attach("hms");
	caller.attach("dec");
	caller.addKeyUpListener(main);
}

//console.log(this);

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function printThis() {
	//console.log(this);
}

function summary() {
	//console.log(`${this.title} was written by ${this.author}.`)
}

function longerSummary(genre, year) {
	let output = "";
	output += this.title+" was written by "+this.author+" (genre: "+genre+")";
}

//summary.call(book)

//#printThis.call(book);

//longerSummary.call(book, "dystopian", 1932);