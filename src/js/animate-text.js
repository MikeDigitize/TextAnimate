import { splitText, elementsIntoDOM } from './utils';

class TextAnimator {
	constructor(text) {
		this.text = text;
	}
	split() {
		this.text = splitText(this.text);
		return this; 
	}
	intoDOM(tag, className, target) {
		elementsIntoDOM(this.text, tag, className, target);
		return this;
	}
}

export function AnimateText(text) {
	if(!(this instanceof TextAnimator)) {
		return new TextAnimator(text);
	}
	return new TextAnimator(text);
}