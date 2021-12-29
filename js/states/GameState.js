class GameState extends State{
	constructor(game) {
		super(game);
		this.objects = game.objects;
		this.keyInput = new KeyInput(this.objects);
	}

	start() {
		this.objects.forEach(o => {
			o.reset();
		});
		this.keyInput.start();
		this.canvas.clear();
		this.game.scoreBoard.newGame();
	}

	stop() {
		this.keyInput.stop();
	}

	update(progress) {
		this.keyInput.updateObjects();
		this.game.scoreBoard.getWinners().forEach(o => {
			o.update(progress);
			if(o.checkCollide()) {
				this.game.scoreBoard.playerLoses(o);
			}
		});
	}

	draw() {
		this.objects.forEach((o) => {
			o.draw();
		});
	}
}