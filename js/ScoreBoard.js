class ScoreBoard {

	constructor(game, players) {
		this.game = game;
		this.players = players;
		this.loseOrder = [];
	}

	playerLoses(p) {
		if(!this.loseOrder.includes(p)) {
			p.score += this.loseOrder.length*10;
			this.loseOrder.push(p);
			if(this.loseOrder.length === this.players.length -1) {
				let lastPlayer = this.players.filter(player => !this.loseOrder.includes(player))[0];
				lastPlayer.score += this.loseOrder.length*10;
				this.game.changeState(this.game.gameOverState);
			}
		}
		this.update();
	}

	getWinners() {
		return this.players.filter(player => !this.loseOrder.includes(player));
	}

	update() {
		let string = this.players.map(p => `		
		<div class="score">
			<div class="score-color" style="background-color: ${p.color}"></div>
			<div class="score-data">
				<span>${p.id}:</span>
				<span>${p.score}</span>
			</div>
		</div>`).join("\n");
		$("#scores").html(string);
	}

	newGame() {
		this.loseOrder = [];
		this.update();
	}

}