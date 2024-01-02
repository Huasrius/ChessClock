
//Initial Values of the App
const chessClockSetup = new chessClockSetupClass(600, false, 0, false, 0, 600, false, 0, false, 0);
const chessClock = new chessClockClass(chessClockSetup);

window.onload = function () {

    var storedData = localStorage.getItem('chessTimerSettings');

    if (storedData) {
        var chessTimerSettings = JSON.parse(storedData);
        chessClockSetup.useNewSetup(chessTimerSettings);
        chessClock.setUpChessClock(chessClockSetup);

    } else {
        console.log('no saved files found'); //the initial Values are used
    }

    chessClock.player1.displayTime();
    chessClock.player2.displayTime();

};


