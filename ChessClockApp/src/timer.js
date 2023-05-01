
class timer {

constructor(timerSetup){

    this.timerSetup = timerSetup;
    //this.endTimeMS = 0; // dank JavaScript nicht nötig
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.timerStarted = false;
    this.timerPaused = true;
    this.timeInterval = null;

}

setupTimer(timerSetup) {

    this.timerSetup = timerSetup;
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.timerStarted = false;

}

startTimer() { 

    if (!this.timerStarted) {
        this.timerPaused = false;
        var startTimeMS = new Date().getTime();
        this.endTimeMS = startTimeMS + this.timeLeftMS;
        // Set the interval for the setTime function
        this.timeInterval = setInterval(()=>this.setTime(), 10); 
        this.timerStarted = true;
    }

}

pauseTimer(playerButton){

    if(!this.timerPaused){
    clearInterval(this.timeInterval)
    this.timerStarted = false;
    this.timerPaused = true;
    if (this.timerSetup.fisher && playerButton){
        this.timeLeftMS += this.timerSetup.fisherTimeMS;
        this.displayTime();
    }
}

}

resetTimer(){

    clearInterval(this.timeInterval);
    this.timerStarted = false;
    this.timerPaused = true;
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.displayTime()
}

setTime() {

    this.timeLeftMS = this.endTimeMS - new Date().getTime();
    //console.log(this.timeLeftMS/1000);
    if (this.timeLeftMS > 0) {
        this.displayTime()
    } else {
        this.timerSetup.alarm.play();
        document.getElementById(this.timerSetup.timerName).innerHTML = '00 : 00';
    }

}

displayTime() {

    var minutes = this.timeLeftMS / (1000 * 60);
    var seconds = (this.timeLeftMS / 1000) % 60;
    minutes = Math.floor(minutes); // Nachkomastelle abschneiden
    seconds = Math.round(seconds); // Zahl Runden
    var minutesString = ('0' + minutes).slice(-2); // Um die null bei singel digits darzustellen
    var secondsString = ('0' + seconds).slice(-2); // Um die null bei singel digits darzustellen
    var text = minutesString  +  ' : '  +  secondsString;
    document.getElementById(this.timerSetup.timerName).innerHTML = text;

}

}

