class Game {

	SPEED = 0.1;

	constructor(id) {
		this.canvas = new Canvas(id);
		this.running = false;
		let perc = 0.2;
		this.positions = [
			{x: perc*this.canvas.getWidth(), y: perc*this.canvas.getHeight(), dx: this.SPEED, dy: 0},
			{x: (1-perc)*this.canvas.getWidth(), y: perc*this.canvas.getHeight(), dx: 0, dy: this.SPEED},
			{x: perc*this.canvas.getWidth(), y: (1-perc)*this.canvas.getHeight(), dx: 0, dy: -this.SPEED},
			{x: (1-perc)*this.canvas.getWidth(), y: (1-perc)*this.canvas.getHeight(), dx: -this.SPEED, dy: 0},

		];
		this.objects = [];
		for (let i = 0; i < 2; i++) {
			this.objects.push(new Line(`Player ${i+1}`, this.positions[i], this, i, i))
		}
		this.scoreBoard = new ScoreBoard(this, this.objects);
		this.gameState = new GameState(this);
		this.gameOverState = new GameOverState(this);
		this.currentState = this.gameState;
	}

	addPlayer() {
		this.objects.push(new Line(`Player ${this.objects.length+1}`,this.positions[this.objects.length], this, this.objects.length, this.objects.length));
		$("#player-number").html(this.objects.length);
		this.changeState(this.gameState);
	}

	removePlayer() {
		this.objects.pop();
		$("#player-number").html(this.objects.length);
		this.changeState(this.gameState);
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