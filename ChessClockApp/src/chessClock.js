
class chessClockClass {

    constructor(chessClockSetup) {

        this.player1 = new playerClass(chessClockSetup.player1Setup);
        this.player2 = new playerClass(chessClockSetup.player2Setup);
        this.activePlayer = 1;
        this.isReseted = true;
        this.isPaused = true;
        this.player1.displayTime();
        this.player2.displayTime();

    }

    settingButton() {

        this.resetButton();
        window.location.href = "settings.html"

    }

    saveButton() {

        window.location.href = "index.html"

    }

    setUpChessClock(newChessClockSetup) {

        this.player1.setUpTimer(newChessClockSetup.player1Setup);
        this.player2.setUpTimer(newChessClockSetup.player2Setup);
        this.activePlayer = 1;
        this.isReseted = true;
        this.isPaused = true;

    }

    player1Button() {

        if (!this.isPaused && this.player1.timeLeft || this.isReseted && this.player1.timeLeft) {
            this.player1.pauseTimer(true);
            this.player2.startTimer();
            this.player1.moveCount += 1;
            console.log("count 1", this.player1.moveCount);
            this.activePlayer = 2;
            this.isReseted = false;
            this.isPaused = false;
        }

    }

    player2Button() {

        if (!this.isPaused && this.player2.timeLeft || this.isReseted && this.player2.timeLeft) {
            this.player2.pauseTimer(true);
            this.player1.startTimer();
            this.player2.moveCount += 1;
            console.log("count 2", this.player2.moveCount);
            this.activePlayer = 1;
            this.isReseted = false;
            this.isPaused = false;
        }

    }


    pauseButton() {

        if (this.player1.timeLeft && this.player2.timeLeft) {
            if (this.isPaused) {
                if (this.activePlayer == 1) {
                    this.player1.startTimer();
                } else if (this.activePlayer == 2) {
                    this.player2.startTimer();
                }
                this.isPaused = false;
            } else {
                this.player1.pauseTimer(false);
                this.player2.pauseTimer(false);
                this.isPaused = true;
            }
        }

    }

    resetButton() {

        this.player1.resetTimer();
        this.player2.resetTimer();
        this.player1.moveCount = 0;
        this.player2.moveCount = 0;
        this.isPaused = true;
        this.isReseted = true;
        this.activePlayer = 1;

    }

}

