
const timerDefaultSetups = new timerSetups(5 * 60, true, 5, false, 0, 5 * 60, true, 5, false, 0);

const chessClock = new timers(timerDefaultSetups);


// how to setup timers with new values
// timerDefaultSetups.timer1.mainTimeMS = 15 * 1000;
// timers.player1.setupTimer(timerDefaultSetups.timer1);

function player1(){

    chessClock.player1.pauseTimer(playerButton = true);
    chessClock.player2.startTimer();
}

function player2(){

    chessClock.player2.pauseTimer(playerButton = true);
    chessClock.player1.startTimer();
}


function pauseTimers(){

    chessClock.player1.pauseTimer(playerButton = false);
    chessClock.player2.pauseTimer(playerButton = false);

}


function resetTimers(){

    chessClock.player1.resetTimer();
    chessClock.player2.resetTimer();
    
}

function options(){


}
