class GameObject {

	constructor(id, x, y, speed, game) {
		this.id = id;
		this.startPos = new Position(x, y);
		this.pos = new Position(x, y);
		this.startMov = new Movement(speed, 0);
		this.mov = new Movement(speed, 0);
		this.canvas = game.canvas;
		this.objects = game.objects;
		this.game = game;
	}

	keyDown(e) {}

	reset() {
		this.pos.x = this.startPos.x;
		this.pos.y = this.startPos.y;
		this.mov.x = this.startMov.x;
		this.mov.y = this.startMov.y;
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

	addRandom() {
		let speed = this.getSpeed();
		this.x += (Math.random()*2-1)/2*speed;
		this.y += (Math.random()*2-1)/2*speed;
		let newSpeed = this.getSpeed();
		this.x = this.x/newSpeed*speed;
		this.y = this.y/newSpeed*speed;
	}

	/**
	 *
	 */
	getAngle() {
		return Math.acos(this.x/this.getSpeed());
	}

	getDirection() {
		let speed = this.getSpeed();
		return {x: this.x/speed, y: this.y/speed};
	}

	rotate(theta) {
		let speed = this.getSpeed();
		let nX = this.x/speed;
		let nY = this.y/speed;
		this.x = nX*Math.cos(theta) - nY*Math.sin(theta);
		this.y = nX*Math.sin(theta) + nY*Math.cos(theta);
		this.x = this.x*speed;
		this.y = this.y*speed;
	}

	turnLeft(turnSpeed = 0.2) {
		this.rotate(-1*turnSpeed);
	}

	turnRight(turnSpeed = 0.2) {
		this.rotate(turnSpeed);
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