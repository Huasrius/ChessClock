
const timerDeafultSetups = new timerSetups(20, false, 0, false, 0, 10, false, 0, false, 0);

const timer1 = new timer(timerDeafultSetups.timer1);

const timer2 = new timer(timerDeafultSetups.timer2);

//timer1.displayTime();
//timer2.displayTime();

function player1(){

    timer1.pauseTimer();
    timer2.startTimer();
}

function player2(){

    timer2.pauseTimer();
    timer1.startTimer();
}


function pauseTimers(){

    timer1.pauseTimer();
    timer2.pauseTimer();

}


function resetTimers(){

    timer1.resetTimer();
    timer2.resetTimer();
    
}

function options(){


}
