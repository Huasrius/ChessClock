
class chessClockSetupClass {

    constructor(mainTime1, fisher1, fisherTime1, delay1, delayTime1, mainTime2, fisher2, fisherTime2, delay2, delayTime2) {

        this.player1Setup = new playerSetupClass("player1", mainTime1, fisher1, fisherTime1, delay1, delayTime1)
        this.player2Setup = new playerSetupClass("player2", mainTime2, fisher2, fisherTime2, delay2, delayTime2)

    }

}

class playerSetupClass {

    constructor(playerName, mainTime, fisher, fisherTime, delay, delayTime) {

        this.playerName = playerName;
        this.mainTimeMS = mainTime * 1000;
        this.fisher = fisher;
        this.fisherTimeMS = fisherTime * 1000;
        this.delay = delay;
        this.delayTimeMS = delayTime * 1000;
        this.alarm = new Audio('sound/alarm.mp3'); // momentan wird für jedes Setup ein audio allociert!!

    }

}