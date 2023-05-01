
class timer {

constructor(timerName, time){

    this.timerName = timerName;
    this.timerStarted = false;
    this.timerPaused = true; // braucht es wahrscheinlich nicht.
    this.timeInterval = null;
    this.endTimeMS = 100;
    this.settedTime = time; 
    this.timeLeftMS = 1000 * this.settedTime; // 5 min

}

startTimer() { 

    if (!this.timerStarted) {
        this.timerPaused = false;
        var startTimeMS = new Date().getTime();
        this.endTimeMS = startTimeMS + this.timeLeftMS;
        // Set the interval for the setTime function
        this.timeInterval = setInterval(()=>this.setTime(), 1000); 
        this.timerStarted = true;
    }

}

pauseTimer(){

    if(!this.timerPaused){
        clearInterval(this.timeInterval)
        console.log(this.timerName)
        this.timerStarted = false;
        this.timerPaused = true;
    }

}

resetTimer(){

    clearInterval(this.timeInterval);
    this.timerStarted = false;
    this.timeLeftMS = 1000 * this.settedTime;
    this.displayTime()
}

setTime() {

    this.timeLeftMS = this.endTimeMS - new Date().getTime();
    console.log(this.timeLeftMS/1000);
    if (this.timeLeftMS > 0) {
        this.displayTime()
    } else {
        document.getElementById(this.timerName).innerHTML = '00 : 00';
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
    document.getElementById(this.timerName).innerHTML = text;

}

}