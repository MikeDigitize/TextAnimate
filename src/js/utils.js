export function splitText(text) {
	return text.split('');
}

export function insertIntoDOM(element = createElement(), target = document.body) {
	target.appendChild(element);
}

export function createElement(tag = 'span') {
	return document.createElement(tag);
}

export function setTextContent(element = createElement(), text = '') {
	element.textContent = text;
	return element;
}

export function addClass(element, className = 'text-animator') {
	element.classList.add(className);
	return element;
}

export function createArrayOfElements(arr = [], tag, className) {
	return arr.map(text => setTextContent(addClass(createElement(tag), className), text));
}

export function elementsIntoDOM(arr, tag, className, target) {
	createArrayOfElements(arr, tag, className).forEach(element => insertIntoDOM(element, target));
}