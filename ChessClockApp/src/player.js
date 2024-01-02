
class playerClass {

    constructor(playerSetup) {

        this.playerSetup = playerSetup;
        //this.endTimeMS = 0; // dank JavaScript nicht nötig
        this.timeLeftMS = this.playerSetup.mainTimeMS;
        this.delayTimeLeftMS = this.playerSetup.delayTimeMS;
        this.timerStarted = false;
        this.timerPaused = true;
        this.timeLeft = true;
        this.pausedByPlayerButton = true;
        this.timeInterval = null;
        this.delayTimeInterval = null;
        this.intervalPeriodeMS = 10;
        this.moveCount = 0;

    }

    setUpPlayer(newPlayerSetup) {

        this.playerSetup = newPlayerSetup;
        this.timeLeftMS = this.playerSetup.mainTimeMS;
        this.delayTimeLeftMS = this.playerSetup.delayTimeMS;

    }

    startTimer() {

        if (!this.timerStarted) {
            var startTimeMS = new Date().getTime();
            if (this.playerSetup.delay) {
                if (this.pausedByPlayerButton) {
                    this.delayTimeLeftMS = this.playerSetup.delayTimeMS;
                }
                this.endTimeMS = startTimeMS + this.delayTimeLeftMS;
                // Set the interval for the setDelayTime function
                this.delayTimeInterval = setInterval(() => this.setDelayTime(), this.intervalPeriodeMS);
            } else {
                this.endTimeMS = startTimeMS + this.timeLeftMS;
                // Set the interval for the setTime function
                this.timeInterval = setInterval(() => this.setTime(), this.intervalPeriodeMS);
            }
            this.timerPaused = false;
            this.timerStarted = true;
            
        }

    }

    setTime() {

        this.timeLeftMS = this.endTimeMS - new Date().getTime();
        // console.log(this.timeLeftMS / 1000);
        if (this.timeLeftMS > 0) {
            this.displayTime();
        } else {
            this.timeLeft = false;
            this.playerSetup.alarm.play();
            document.getElementById(this.playerSetup.playerName).innerHTML = '00 : 00';
            // this only works cause the function setDelayTime is in the same Object like the delayTimeInterval
            clearInterval(this.timeInterval);
        }

    }

    setDelayTime() {

        this.delayTimeLeftMS = this.endTimeMS - new Date().getTime();
        // console.log(this.delayTimeLeftMS / 1000);
        if (this.delayTimeLeftMS > 0) {
            this.displayDelayTime();
        } else{
            // clear the delayTimeInterval 
            // this only works cause the function setDelayTime is in the same Object like the delayTimeInterval
            clearInterval(this.delayTimeInterval);
            // Set the interval for the setTime function
            var startTimeMS = new Date().getTime();
            this.endTimeMS = startTimeMS + this.timeLeftMS;
            this.timeInterval = setInterval(() => this.setTime(), this.intervalPeriodeMS);
        }

    }

    pauseTimer(playerButton) {

        if (!this.timerPaused) {
            clearInterval(this.delayTimeInterval)
            clearInterval(this.timeInterval)
            this.timerStarted = false;
            this.timerPaused = true;
            this.pausedByPlayerButton = playerButton;
            if (playerButton) {
                if (this.playerSetup.fisher) {
                    this.timeLeftMS += this.playerSetup.fisherTimeMS;
                    this.displayTime();
                }
            }
        }
        // console.log("test",this.pausedByPlayerButton)
    }

    resetTimer() {

        clearInterval(this.timeInterval)
        clearInterval(this.delayTimeInterval)
        this.timerStarted = false;
        this.timerPaused = true;
        this.timeLeft = true;
        this.pausedByPlayerButton = true;
        this.timeLeftMS = this.playerSetup.mainTimeMS;
        this.delayTimeLeftMS = this.playerSetup.delayTimeMS;
        this.display()
    }

    display() {

        this.displayTime();
        this.displayCounter();
        if (this.playerSetup.delay){
            this.displayDelayTime();
        }

    }

    displayTime() {

        var minutes = this.timeLeftMS / (1000 * 60);
        var seconds = (this.timeLeftMS / 1000) % 60;
        minutes = Math.floor(minutes); // Nachkomastelle abschneiden
        seconds = Math.floor(seconds); 
        var minutesString = ('0' + minutes).slice(-2); // Um die null bei singel digits darzustellen
        var secondsString = ('0' + seconds).slice(-2); // Um die null bei singel digits darzustellen
        var text = minutesString + ' : ' + secondsString;
        document.getElementById(this.playerSetup.playerName).innerHTML = text;
    }

    displayDelayTime() {

        var minutes = this.delayTimeLeftMS / (1000 * 60);
        var seconds = (this.delayTimeLeftMS / 1000) % 60;
        minutes = Math.floor(minutes); // Nachkomastelle abschneiden
        seconds = Math.floor(seconds); 
        var minutesString = ('0' + minutes).slice(-2); // Um die null bei singel digits darzustellen
        var secondsString = ('0' + seconds).slice(-2); // Um die null bei singel digits darzustellen
        var text = minutesString + ' : ' + secondsString;
        document.getElementById(this.playerSetup.playerName + "Delay").innerHTML = text;

    }

    displayCounter() {

        var text = "count: " + this.moveCount;
        document.getElementById(this.playerSetup.playerName + "Count").innerHTML = text;

    }

}

