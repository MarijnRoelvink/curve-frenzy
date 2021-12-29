class Game {

	SPEED = 0.01;

	constructor(id) {
		this.canvas = new Canvas(id);
		this.running = false;
		this.objects = [];
		for (let i = 0; i < 2; i++) {
			this.objects.push(new Line(`Player ${i}`, (i+1)*200, (i+1)*100, 10*this.SPEED, this, i, i))
		}
		this.scoreBoard = new ScoreBoard(this, this.objects);
		this.gameState = new GameState(this);
		this.gameOverState = new GameOverState(this);
		this.currentState = this.gameState;
	}

	toggle() {
		if(this.running) {
			this.stop();
		} else {
			this.start();
		}
	}

	changeState(state) {
		this.currentState.stop();
		this.currentState = state;
		this.currentState.start();
	}

	resume() {
		this.running = true;
		this.lastRender = performance.now();
		window.requestAnimationFrame((t) => {this.loop(t)});
	}

	start() {
		this.running = true;
		this.lastRender = performance.now();
		this.currentState.start();
		window.requestAnimationFrame((t) => {this.loop(t)});
	}

	stop() {
		this.running = false;
	}

	update(progress) {
		this.currentState.update(progress);
	}

	draw() {
		this.currentState.draw();
	}

	loop(timestamp) {
		let progress = timestamp - this.lastRender;
		this.lastRender = timestamp;
		if(this.running) {
			this.update(progress);
			this.draw();
			window.requestAnimationFrame((t) => {this.loop(t)});
		}
	}

}