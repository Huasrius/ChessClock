
class chessClockSetupClass {

    constructor(mainTime1, fisher1, fisherTime1, delay1, delayTime1, mainTime2, fisher2, fisherTime2, delay2, delayTime2) {

        this.player1Setup = new playerSetupClass("player1", mainTime1, fisher1, fisherTime1, delay1, delayTime1)
        this.player2Setup = new playerSetupClass("player2", mainTime2, fisher2, fisherTime2, delay2, delayTime2)

    }

    useNewSetup(chessTimerSettings) {

        this.player1Setup.mainTimeMS = (chessTimerSettings.main1MinutesInput * 60 + chessTimerSettings.main1SecondsInput) * 1000;
        this.player1Setup.fisher = chessTimerSettings.fisher1;
        this.player1Setup.fisherTimeMS = (chessTimerSettings.fisher1MinutesInput * 60 + chessTimerSettings.fisher1SecondsInput) * 1000;
        this.player1Setup.delay = chessTimerSettings.delay1;
        this.player1Setup.delayTimeMS = (chessTimerSettings.delay1MinutesInput * 60 + chessTimerSettings.delay1SecondsInput) * 1000;

        if (chessTimerSettings.player2) {
            this.player2Setup.mainTimeMS = (chessTimerSettings.main2MinutesInput * 60 + chessTimerSettings.main2SecondsInput) * 1000;
            this.player2Setup.fisher = chessTimerSettings.fisher2;
            this.player2Setup.fisherTimeMS = (chessTimerSettings.fisher2MinutesInput * 60 + chessTimerSettings.fisher2SecondsInput) * 1000;
            this.player2Setup.delay = chessTimerSettings.delay2;
            this.player2Setup.delayTimeMS = (chessTimerSettings.delay2MinutesInput * 60 + chessTimerSettings.delay2SecondsInput) * 1000;
        } else {

            this.player2Setup.mainTimeMS = this.player1Setup.mainTimeMS;
            this.player2Setup.fisher = this.player1Setup.fisher;
            this.player2Setup.fisherTimeMS = this.player1Setup.fisherTimeMS;
            this.player2Setup.delay = this.player1Setup.delay;
            this.player2Setup.delayTimeMS = this.player1Setup.delayTimeMS;
        }

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