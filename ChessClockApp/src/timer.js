
class timer {

constructor(timerSetup){

    this.timerSetup = timerSetup;
    //this.endTimeMS = 0; // dank JavaScript nicht nötig
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.delayTimeLeftMS = this.timerSetup.delayTimeMS;
    this.timerStarted = false;
    this.timerPaused = true;
    this.pausedByPlayerButton = true;
    this.timeInterval = null;
    this.delayTimeInterval = null;
    this.intervalPeriodeMS = 10;

}

setupTimer(timerSetup) {

    this.timerSetup = timerSetup;
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.timerStarted = false;

}

startTimer() { 

    if (!this.timerStarted) {
        var startTimeMS = new Date().getTime();
        if (this.timerSetup.delay) {
            if(this.pausedByPlayerButton){
                this.delayTimeLeftMS = this.timerSetup.delayTimeMS;
            } 
            this.endTimeMS = startTimeMS + this.delayTimeLeftMS;
            // Set the interval for the setDelayTime function
            this.delayTimeInterval = setInterval(()=>this.setDelayTime(), this.intervalPeriodeMS); 
        } else {
        this.endTimeMS = startTimeMS + this.timeLeftMS;
        // Set the interval for the setTime function
        this.timeInterval = setInterval(()=>this.setTime(), this.intervalPeriodeMS); 
        }
        this.timerPaused = false;
        this.timerStarted = true;
    }

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

setDelayTime() {

    this.delayTimeLeftMS = this.endTimeMS - new Date().getTime();
    console.log(this.delayTimeLeftMS/1000);
    if (this.delayTimeLeftMS <= 0) {
        // clear the delayTimeInterval 
        // this only works cause the function setDelayTime is in the same Object like the delayTimeInterval
        clearInterval(this.delayTimeInterval);
        // Set the interval for the setTime function
        var startTimeMS = new Date().getTime();
        this.endTimeMS = startTimeMS + this.timeLeftMS;
        this.timeInterval = setInterval(()=>this.setTime(), this.intervalPeriodeMS); 
    }

}

pauseTimer(playerButton){

    if(!this.timerPaused){
        clearInterval(this.delayTimeInterval)
        clearInterval(this.timeInterval)
        this.timerStarted = false;
        this.timerPaused = true;
        if(playerButton){
            this.pausedByPlayerButton = true;
            if (this.timerSetup.fisher){
                this.timeLeftMS += this.timerSetup.fisherTimeMS;
                this.displayTime();
            }
        } else {
            this.pausedByPlayerButton = false;
        }
    }
    // console.log("test",this.pausedByPlayerButton)
}

resetTimer(){

    clearInterval(this.timeInterval)
    clearInterval(this.delayTimeInterval)
    this.timerStarted = false;
    this.timerPaused = true;
    this.pausedByPlayerButton = true;
    this.timeLeftMS = this.timerSetup.mainTimeMS;
    this.displayTime()
}

displayTime() {

    // console.log("display time")
    // console.log(this.timeLeftMS / 1000)
    var minutes = this.timeLeftMS / (1000 * 60);
    var seconds = (this.timeLeftMS / 1000) % 60;
    minutes = Math.floor(minutes); // Nachkomastelle abschneiden
    seconds = Math.floor(seconds); // Zahl Runden
    var minutesString = ('0' + minutes).slice(-2); // Um die null bei singel digits darzustellen
    var secondsString = ('0' + seconds).slice(-2); // Um die null bei singel digits darzustellen
    var text = minutesString  +  ' : '  +  secondsString;
    document.getElementById(this.timerSetup.timerName).innerHTML = text;

}

}

