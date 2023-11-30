
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

// Use the function to check the initial states
checkInitialStates("fisher1", "delay1", "player2", "fisher2", "delay2");



