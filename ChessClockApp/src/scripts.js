
const timer1 = new timer(timerName = "timerText1", time = 10)

const timer2 = new timer(timerName = "timerText2", time = 10)

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
