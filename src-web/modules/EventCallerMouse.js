import { EventCaller } from './EventCaller.js';

class EventCallerMouse extends EventCaller {
	constructor() {
		super();
		//this.id = id;
		this.eventNames = ["Click", "DoubleClick", "ContextMenu", "MouseDown", "MouseEnter", "MouseLeave", "MouseMove", "MouseOut", "MouseOver", "MouseUp", "Wheel"];
		this.clickListener = [];
		this.contextmenuListener = [];
		this.doubleclickListener = [];
		this.mousedownListener = [];
		this.mouseenterListener = [];
		this.mouseleaveListener = [];
		this.mousemoveListener = [];
		this.mouseoutListener = [];
		this.mouseoverListener = [];
		this.mouseupListener = [];
		this.wheelListener = [];
		//this.attachId(id);
	}
	
	attachId(id) {
		this.attach(document.getElementById(id));
	}

	addClickListener(listener) {
		if(typeof listener.onClick !== "function") {
			alert(listener.constructor.name+" lacks listener 'onClick'")
			return;
		}
		this.clickListener.push(listener);
		this.bindGeneric("onclick");
	}

	addContextMenuListener(listener) {
		this.contextmenuListener.push(listener);
		this.bindGeneric("oncontextmenu");
	}
	
	addDoubleClickListener(listener) {
		this.clickListener.push(listener);
		this.bindGeneric("ondblclick");
	}
	
	addMouseDownListener(listener) {
		this.mousedownListener.push(listener);
		this.bindGeneric("onmousedown");
	}

	addMouseEnterListener(listener) {
		this.mouseenterListener.push(listener);
		this.bindGeneric("onmouseenter");
	}

	addMouseLeaveListener(listener) {
		this.mouseleaveListener.push(listener);
		this.bindGeneric("onmouseleave");
	}
	
	addMouseMoveListener(listener) {
		this.mousemoveListener.push(listener);
		this.bindGeneric("onmousemove");
	}
	
	addMouseOutListener(listener) {
		this.mouseoutListener.push(listener);
		this.bindGeneric("onmouseout");
	}

	addMouseOverListener(listener) {
		this.mouseoverListener.push(listener);
		this.bindGeneric("onmouseover");
	}

	addMouseUpListener(listener) {
		this.mouseupListener.push(listener);
		this.bindGeneric("onmouseup");
	}

}

export { EventCallerMouse };