class GameOverState extends State{
	constructor(game) {
		super(game);
		this.keyInput = new KeyInput([this]);
	}

	start() {
		this.canvas.clear();
		let winner = this.game.scoreBoard.getWinners()[0];
		this.canvas.drawTitle(`${winner.id} wins!`);
		this.canvas.drawSubTitle("Press enter to try again");
		this.keyInput.start();
	}

	update() {
		this.keyInput.updateObjects();
	}

	stop() {
		this.keyInput.stop();
	}

	draw() {

	}

	keyDown(keys) {
		if(keys["Enter"]) {
			this.game.changeState(this.game.gameState);
		}
	}
}