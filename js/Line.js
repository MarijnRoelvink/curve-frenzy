class Line extends GameObject {

	static colors = ["#FFCE2E", "#7AB1E8", "#F87089", "#308167", "#E15F55"];
	static width = 2;

	constructor(id, x, y, speed, canvas, color = 0) {
		super(id, x, y, speed, canvas);
		this.color = Line.colors[color];
		this.width = Line.width;
		this.changeSpeed = 20;
		this.tick = 0;
	}

	update(progress) {
		this.tick++;
		if(this.tick > this.changeSpeed) {
			this.mov.setRandom();
			this.tick = 0
		}
		this.pos.update(progress, this.mov);

	}

	draw() {
		this.canvas.drawCircle(this.pos.x, this.pos.y, this.color, this.width);
	}
}