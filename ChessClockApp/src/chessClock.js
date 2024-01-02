
class chessClockClass {

    constructor(chessClockSetup) {

        this.chessClockSetup = chessClockSetup;
        this.player1 = new playerClass(this.chessClockSetup.player1Setup);
        this.player2 = new playerClass(this.chessClockSetup.player2Setup);
        this.activePlayer = 0;
        this.isReseted = true;
        this.isPaused = true;
        this.pauseStartImage = document.getElementById("pauseStartImage");

    }

    settingButton() {

        window.location.href = "settings.html"

    }

    setUpChessClock(newChessClockSetup) {
        this.chessClockSetup = newChessClockSetup;
        this.player1.setUpPlayer(this.chessClockSetup.player1Setup);
        this.player2.setUpPlayer(this.chessClockSetup.player2Setup);
    }

    player1Button() {

        if (this.player1.timeLeft && (this.activePlayer != 2) && (!this.isPaused || this.isReseted)) {
            this.player1.pauseTimer(true);
            this.player2.startTimer();
            if (!this.isReseted) {
                this.player1.moveCount += 1;
            }
            this.player1.displayCounter();
            this.pauseStartImage.src = "img/pause.svg";
            this.activePlayer = 2;
            this.isReseted = false;
            this.isPaused = false;
        }

    }

    player2Button() {

        if (this.player2.timeLeft && (this.activePlayer != 1) && (!this.isPaused || this.isReseted)) {
            this.player2.pauseTimer(true);
            this.player1.startTimer();
            if (!this.isReseted) {
                this.player2.moveCount += 1;
            }
            this.player2.displayCounter();
            this.pauseStartImage.src = "img/pause.svg";
            this.activePlayer = 1;
            this.isReseted = false;
            this.isPaused = false;
        }

    }


    pauseStartButton() {

        if (this.activePlayer == 0){
            this.activePlayer = 1;
        }

        if (this.player1.timeLeft && this.player2.timeLeft) {
            if (this.isPaused) {
                if (this.activePlayer == 1) {
                    this.player1.startTimer();
                } else if (this.activePlayer == 2) {
                    this.player2.startTimer();
                }
                this.isPaused = false;
                this.isReseted = false;
                this.pauseStartImage.src = "img/pause.svg";
            } else {
                this.player1.pauseTimer(false);
                this.player2.pauseTimer(false);
                this.isPaused = true;
                this.pauseStartImage.src = "img/start.png";
            }
        }

    }

    resetButton() {

        this.player1.moveCount = 0;
        this.player2.moveCount = 0;
        this.isPaused = true;
        this.isReseted = true;
        this.activePlayer = 0;
        this.player1.resetTimer();
        this.player2.resetTimer();
        this.pauseStartImage.src = "img/start.png";

    }

}

