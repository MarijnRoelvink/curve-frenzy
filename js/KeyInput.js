class KeyInput {
	constructor(objects) {
		this.objects = objects;
		this.keysPressed = [];
		this.registerKeyPress();
		this.listening = false;
	}

	start() {
		this.listening = true;
	}

	stop() {
		this.listening = false;
		this.keysPressed = [];
	}

	registerKeyPress() {
		let self = this;
		document.addEventListener('keydown', function(e) {
			if(self.listening) {
				self.keysPressed[e.key] = true;
			}
		});
		document.addEventListener('keyup', function(e) {
			if(self.listening) {
				self.keysPressed[e.key] = false;
			}
		});
	}

	updateObjects() {
		this.objects.forEach(o => o.keyDown(this.keysPressed));
	}
}