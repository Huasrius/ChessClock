
class timerSetup {

constructor(timerName, mainTime, fisher, fisherTime, delay, delayTime){

    this.timerName = timerName;
    this.mainTimeMS = mainTime * 1000;
    this.fisher = fisher;
    this.fisherTimeMS = fisherTime * 1000;
    this.delay = delay;
    this.delayTimeMS = delayTime * 1000;
    this.alarm = new Audio('sound/alarm.mp3'); // momentan wird für jeder Setup ein audio allociert!!
    }

}

class timerSetups {

    constructor(mainTime1, fisher1, fisherTime1, delay1, delayTime1, mainTime2, fisher2, fisherTime2, delay2, delayTime2){

        this.timer1 = new timerSetup("player1", mainTime1, fisher1, fisherTime1, delay1, delayTime1)
        this.timer2 = new timerSetup("player2", mainTime2, fisher2, fisherTime2, delay2, delayTime2)

    }
    
}