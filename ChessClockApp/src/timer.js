
class timer {

constructor(timerSetup){

    this.timerSetup = timerSetup;
    //this.endTimeMS = 0; // dank JavaScript nicht nötig
    this.timeLeftMS = 1000 * this.timerSetup.mainTime;
    this.timerStarted = false;
    this.timeInterval = null;

}

setupTimer(timerSetup) {

    this.timerSetup = timerSetup;
    this.timeLeftMS = 1000 * this.timerSetup.mainTime;
    this.timerStarted = false;

}

startTimer() { 

    if (!this.timerStarted) {
        var startTimeMS = new Date().getTime();
        this.endTimeMS = startTimeMS + this.timeLeftMS;
        // Set the interval for the setTime function
        this.timeInterval = setInterval(()=>this.setTime(), 1000); 
        this.timerStarted = true;
    }

}

pauseTimer(){

    clearInterval(this.timeInterval)
    this.timerStarted = false;

}

resetTimer(){

    clearInterval(this.timeInterval);
    this.timerStarted = false;
    this.timeLeftMS = 1000 * this.timerSetup.mainTime;
    this.displayTime()
}

setTime() {

    this.timeLeftMS = this.endTimeMS - new Date().getTime();
    console.log(this.timeLeftMS/1000);
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

