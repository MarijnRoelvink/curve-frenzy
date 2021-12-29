class Line extends GameObject {

	static colors = ["#FFCE2E", "#7AB1E8", "#F87089", "#308167", "#E15F55"];
	static arrowIndexes = [
		{left: "ArrowLeft", right: "ArrowRight"},
		{left: "a", right: "d"},
		{left: ";", right: "Dead"}];
	static width = 2;

	constructor(id, x, y, speed, game, colorIndex = 0, arrowIndex = 0) {
		super(id, x, y, speed, game);
		this.color = Line.colors[colorIndex];
		this.width = Line.width;
		this.changeSpeed = 10;
		this.arrows = Line.arrowIndexes[arrowIndex];
		this.score = 0;
	}

	update(progress) {
		this.pos.update(progress, this.mov);

	}

	checkCollide() {
		let outOfBounds = this.pos.x > this.canvas.getWidth() || this.pos.x < 0 || this.pos.y > this.canvas.getHeight() || this.pos.y < 0;
		let dir = this.mov.getDirection();
		let occupied = this.canvas.isOccupied(this.pos.x + dir.x*2, this.pos.y + dir.y*2);
		return outOfBounds || occupied;
	}

	draw() {
		this.canvas.drawCircle(this.pos.x, this.pos.y, this.color, this.width);
	}

	keyDown(keys) {
		let angleSpeed = 0.05;
		if(keys[this.arrows.left]) {
			this.mov.turnLeft(angleSpeed);
		}
		else if(keys[this.arrows.right]) {
			this.mov.turnRight(angleSpeed);
		}
	}
}