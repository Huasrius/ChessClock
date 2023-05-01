
const timer1 = new timer("timerText1")

const timer2 = new timer("timerText2")



function pauseTimers(){

    timer1.pauseTimer();
    timer2.startTimer();
    console.log("PauseTimer1")
}


function resetTimers(){

    timer2.pauseTimer();
    timer1.startTimer();
    console.log("PauseTimer2")

}

function options(){


}
