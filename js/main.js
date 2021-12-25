// let script = document.getElementById("Game-script");
// script.addEventListener('load', function() {
// 	let game = new Game("board");
// 	game.start();
// });

let game = {};

function init() {
	game = new Game("board");
	game.start();
}
setTimeout(init, 500);