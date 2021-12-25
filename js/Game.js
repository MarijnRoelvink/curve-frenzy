class Game {

	SPEED = 0.01;

	constructor(id) {
		this.canvas = new Canvas(id);
		this.running = false;
		this.objects = [];
		for (let i = 0; i < 3; i++) {
			this.objects.push(new Line(`Player ${i}`, (i+1)*200, 400, 10*this.SPEED, this.canvas, i))
		}
		// this.objects = [new Line("Player 1", 100, 100, 10*this.SPEED, this.canvas)]
	}

	toggle() {
		if(this.running) {
			this.stop();
		} else {
			this.start();
		}
	}
	resume() {
		this.running = true;
		this.lastRender = performance.now();
		window.requestAnimationFrame((t) => {this.loop(t)});
	}

	start() {
		this.running = true;
		this.lastRender = performance.now();
		window.requestAnimationFrame((t) => {this.loop(t)});
	}

	stop() {
		this.running = false;
	}

	update(progress) {
		this.objects.forEach((o) => {
			o.update(progress);
		});
	}

	draw() {
		this.objects.forEach((o) => {
			o.draw();
		});
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