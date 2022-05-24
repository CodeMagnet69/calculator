let userInput = [];

let keyMap = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "Backspace", "="]

buttonArray = document.querySelectorAll("button")

//Denne koden er et dårlig eksempel på Do not repeat yourself,
//men jeg prøvde bare å gjøre oppgaven så raskt som mulig, derfor er ikke koden optimal
//og dårlig planlagt.

for (const element of buttonArray) {
    element.addEventListener("click", function calculator(event) {

        let resultField = document.getElementById("numOutput");
        let eventID = event.target.id;

        if (eventID === "=") {
            let calculated = eval(userInput.join(""));
            resultField.innerHTML = calculated;

            userInput = [];
            userInput.push(calculated);

        } else {
            if (eventID === "backSpace") {
                userInput.pop();
                resultField.innerHTML = userInput.join("");
            } else {
                if (eventID === "reset") {
                    userInput = [];
                    resultField.innerHTML = userInput.join("");
                } else {
                    userInput.push(eventID);
                    resultField.innerHTML = userInput.join("");
                }
            }
        }
    });
}

document.addEventListener("keydown", function (event) {
    let keyInput = event.key;
    let resultField = document.getElementById("numOutput");
    console.log(keyInput);

    if (keyInput === "Backspace") {
        userInput.pop();
        resultField.innerHTML = userInput.join("");

    } else {

        if (keyInput === "=") {
            let calculated = eval(userInput.join(""));
            resultField.innerHTML = calculated;

            userInput = [];
            userInput.push(calculated);

        } else {
            if (keyMap.includes(keyInput)) {
                userInput.push(keyInput);
                document.getElementById("numOutput").innerHTML = userInput.join("");
            }
        }


    }

})