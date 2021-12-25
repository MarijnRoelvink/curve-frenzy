class GameObject {

	constructor(id, x, y, speed, canvas) {
		this.id = id;
		this.pos = new Position(x, y);
		this.mov = new Movement(speed, 0);
		this.canvas = canvas
	}

	//abstract update
	//abstract draw

}

class Movement {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getSpeed() {
		return Math.sqrt(this.x**2 + this.y**2)
	}

	setRandom() {
		let speed = this.getSpeed();
		this.x = Math.random()*2-1;
		this.y = Math.random()*2-1;
		let newSpeed = this.getSpeed();
		this.x = this.x/newSpeed*speed;
		this.y = this.y/newSpeed*speed;

	}
}

class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	update(t, mov) {
		this.x += mov.x*t;
		this.y += mov.y*t;
	}
}