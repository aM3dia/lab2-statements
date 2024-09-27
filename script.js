//check if a number is positive, negative, or zero using if-else statement
function outputNumber() {
    let number = document.getElementById("numberInput").value;
    let result = "";

    if (number > 0) {
       result = "The number is postive."; //output for positive numbers
    } else if (number < 0) {
        result = "The number is negative."; //output for negative numbers
    } else {
        result = "The number is zero."; //output for zero
    }
    document.getElementById("numberResult").textContent = result; 
}

//switch statement
function outputDay() {
    let day = document.getElementById("dayInput").value;
    let result = "";
    switch (parseInt(day)) { //converts integer (number) into string (text) result
        case 1:
            result = "Sunday"; //output sunday
            break;
        case 2:
            result = "Monday"; //output Monday
            break;
        case 3:
            result = "Tuesday"; //output Tuesday
            break;
        case 4:
            result = "Wednesday"; //output Wednesday
            break;
        case 5:
            result = "Thursday"; //output Thursday
            break;
        case 6:
            result = "Friday"; //output Friday
            break;
        case 7:
            result = "Saturday"; //output Saturday
            break;
        default:
            result = "Invalid day"; //invalid input
            break;
    }
    document.getElementById("dayResult").textContent = result;
}

//print numbers from 1 to 5 using 'for', 'while', and 'do'
function printNumbers() {
    const loopType = document.getElementById("loopType").value;
    let result = "";

    if (loopType === "for") { //declaration of option
        for (let i = 1; i <= 5; i++) { //for loop
            result += i + " ";
        }
    } else if (loopType === "while") {
        let i = 1; //while loop
        while (i <= 5) {
            result += i + " ";
            i++;
        }
    } else if (loopType === "do-while") {
        let i = 1;
        do {
            result += i + " ";
            i++;
        } while (i <= 5);
    }
    document.getElementById("printNumbers").innerHTML = result;
}

//control flow with break and continue
function breakContinueResult(actionType) {
    let result = "";
        for (let i = 1; i <= 5; i++) {
            if (i === 3) {
                if (actionType === "break") {
                    break; //stop the loop at 3
                } else if (actionType === "continue") {
                    continue; //skip number 3
                }
            }
            result += i + " "; //numbers to result in string
        }
        document.getElementById("output").innerText = result;
    }

//declaring variables inside and outside functions
let globalVar = "I'm global!"; // Global variable

function displayScope() {
    // Function to demonstrate scope
    function scopeExample() {
        let localVar = "I'm local!"; // Local variable

        // Access globalVar and localVar inside the function
        document.getElementById("scopeResult").innerText = `Inside function:\nGlobal Variable: ${globalVar}\nLocal Variable: ${localVar}`;
    }
    scopeExample(); // Call the inner function to demonstrate scope
}