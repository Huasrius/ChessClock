
const chessClockSetup = new chessClockSetupClass(5, true, 5, false, 0, 5, true, 5, false, 0);

const chessClock = new chessClockClass(chessClockSetup);


const newChessClockSetup = new chessClockSetupClass(30, false, 0, false, 3, 30, false, 0, false, 3);

chessClock.setUpChessClock(newChessClockSetup);