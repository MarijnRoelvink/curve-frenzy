class Canvas {
	constructor(id) {
		this.id = id;
		this.canvas = document.getElementById(id);
		this.canvas.width = this.canvas.clientWidth;
		this.canvas.height = this.canvas.clientHeight;
		this.ctx = this.canvas.getContext("2d");
	}

	drawCircle(x, y, color, width) {
		let ctx = this.canvas.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x, y, width, 0, 2 * Math.PI);
		ctx.fill();
	}
}