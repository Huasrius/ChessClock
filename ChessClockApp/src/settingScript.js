
function clearOnClick(inputField) {
  inputField.value = '';
}

function validateInput(inputField, minValue, maxValue) {
  var inputValue = inputField.value.trim(); // Remove leading/trailing spaces
  var validValue = parseInt(inputValue, 10);

  // Use a regular expression to ensure that the input is a valid number
  var validNumber = /^[0-9]+$/.test(inputValue);

  if (validNumber) {
    if (validValue < minValue) {
      validValue = minValue;
    } else if (validValue > maxValue) {
      validValue = maxValue;
    }
  } else {
    // Handle non-numeric or empty input
    validValue = 0;
  }

  // Update the input field with the validated value
  inputField.value = validValue;
}

function toggleField(checkbox, field) {

  var hiddenField = document.getElementById(field);

  if (checkbox.checked) {
    hiddenField.style.display = "block";
  } else {
    hiddenField.style.display = "none";
  }
}

// Function to check initial stats to togle option fields 
function checkInitialStates(...divIds) {
  const initialStates = {};
  divIds.forEach((divId) => {
    const checkbox = document.getElementById(divId);
    toggleField(checkbox, divId + "Time")
  });

}

function writeAllZeros(parentElement) {
  // Durchlaufe alle Kinder des übergebenen Elements
  for (var i = 0; i < parentElement.children.length; i++) {
    var childElement = parentElement.children[i];
    // Wenn das Kind ein Input-Feld ist
    if (childElement.tagName === 'INPUT') {
      if (childElement.type === 'text') {
        childElement.value = 0;
      }
    }
    // Wenn das Kind ein Container ist, rufe die Funktion rekursiv auf
    if (childElement.children.length > 0) {
      writeAllZeros(childElement);
    }
  }
}

function writeUsedSettings(parentElement, chessTimerSettings){

    // Durchlaufe alle Kinder des übergebenen Elements
    for (var i = 0; i < parentElement.children.length; i++) {
      var childElement = parentElement.children[i];
      // Wenn das Kind ein Input-Feld ist
      if (childElement.tagName === 'INPUT') {
        if (childElement.type === 'text') {
          childElement.value = String(chessTimerSettings[childElement.id]);
        } else if (childElement.type === 'checkbox') {
          childElement.checked = chessTimerSettings[childElement.id];
        }
      }
  
      // Wenn das Kind ein Container ist, rufe die Funktion rekursiv auf
      if (childElement.children.length > 0) {
        writeUsedSettings(childElement, chessTimerSettings);

      }
    }
}

function useSettingsButton() {
  // Daten sammeln und speichern
  var settingsData = collectSettingsData(document.getElementById('settingGrid'));
  localStorage.setItem('chessTimerSettings', JSON.stringify(settingsData));
  window.location.href = 'index.html';
}

function collectSettingsData(parentElement) {
  var data = {};

  // Durchlaufe alle Kinder des übergebenen Elements
  for (var i = 0; i < parentElement.children.length; i++) {
    var childElement = parentElement.children[i];

    // Wenn das Kind ein Input-Feld ist
    if (childElement.tagName === 'INPUT') {
      if (childElement.type === 'text') {
        data[childElement.id] = parseInt(childElement.value);
      } else if (childElement.type === 'checkbox') {
        data[childElement.id] = childElement.checked;
      }
    }

    // Wenn das Kind ein Container ist, rufe die Funktion rekursiv auf
    if (childElement.children.length > 0) {
      var childData = collectSettingsData(childElement);
      Object.assign(data, childData);
    }
  }

  return data;
}




window.onload = function () {

  var storedData = localStorage.getItem('chessTimerSettings');
  var settingGrid = document.getElementById('settingGrid');
  if (storedData) {
    var chessTimerSettings = JSON.parse(storedData);
    writeUsedSettings(settingGrid, chessTimerSettings);
  } else {
    //write InitialValues
    writeAllZeros(settingGrid);
    var main1MinutesInput = document.getElementById('main1MinutesInput');
    main1MinutesInput.value = 10;
    
  }

  // Use the function to check the initial states
  checkInitialStates("fisher1", "delay1", "player2", "fisher2", "delay2");
  // display all together  

  settingGrid.style.display = "grid";

};