
const timerDefaultSetups = new timerSetups(5 * 60, true, 5, false, 0, 5 * 60, true, 5, false, 0);

const timer1 = new timer(timerDefaultSetups.timer1);

const timer2 = new timer(timerDefaultSetups.timer2);




// how to setup timers with new values
// timerDefaultSetups.timer1.mainTimeMS = 15 * 1000;
// timer1.setupTimer(timerDefaultSetups.timer1);

function player1(){

    timer1.pauseTimer(playerButton = true);
    timer2.startTimer();
}

function player2(){

    timer2.pauseTimer(playerButton = true);
    timer1.startTimer();
}


function pauseTimers(){

    timer1.pauseTimer(playerButton = false);
    timer2.pauseTimer(playerButton = false);

}


function resetTimers(){

    timer1.resetTimer();
    timer2.resetTimer();
    
}

function options(){


}
