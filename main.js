let salsaButton = document.querySelector('#randomSalsa');
let bachataButton = document.querySelector('#randomBachata');
let resultsDiv = document.querySelector('.results');

let input = document.querySelector('#input');

salsaButton.addEventListener('click', randomSalsa);
bachataButton.addEventListener('click', randomBachata);

function randomSalsa() {
	// console.log(input.value);
	let salsaMoves = [
		'front to back',
		'on spot',
		'side to side',
		'both back',
		'side to side cross',
		'outside turn',
		'inside turn',
		'change of place',
		'hammerlock',
		'cross-body lead (inside turn)',
		'cross-body lead (outside turn)',
		'cross-body lead (wrap)',
		'cross-body lead (free spin)',
		'cross-body lead (butterly)',
		'cross-body lead (sliding door)',
		'hairbrush',
	];

	removeContent();
	for (i=0; i < input.value; i++){
		let randomIndex = Math.round(Math.random() * 16);
		printResults(salsaMoves[randomIndex]);
	}
}

function randomBachata() {
	// console.log(input.value);
	let bachataMoves = [
		'front to back',
		'on spot',
		'side to side',
		'box step',
		'rebound',
		'outside turn',
		'inside turn',
		'double turn',
		'change of place',
		'hammerlock',
		'cuddle',
		'360',
		'hairbrush',
	];

	removeContent();
	for (i = 0; i < input.value; i++) {
		let randomIndex = Math.round(Math.random() * 13);
		printResults(bachataMoves[randomIndex]);
	}
}

function printResults(item) {
	let text = document.createElement('p');
	text.value = item;
	text.innerText = item;
	resultsDiv.append(text);
}

function removeContent() {
	resultsDiv.innerText = '';
}

// now how can I make it so it sends MULTIPLE random moves?
// FIRST, lets create a GUI to engage the function
// now i need the user to be able to enter a number
