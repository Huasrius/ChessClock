
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
  }

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

    //to display all things on the player Button together
    chessClock.player1.display();
    chessClock.player2.display();
    var player1Button = document.getElementById('player1Button');
    var player2Button = document.getElementById('player2Button');
    player1Button.style.display = "grid";
    player2Button.style.display = "grid";

};


