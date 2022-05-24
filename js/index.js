let userInput = [];

buttonArray = document.querySelectorAll("button")

for (const element of buttonArray) {
    element.addEventListener("click", function calculator(event) {

        let resultField = document.getElementById("numOutput");
        let eventID = event.target.id;

        if(eventID === "="){
            let calculated = eval(userInput.join(""));
            resultField.innerHTML= userInput.join("") + " = " + calculated;
            
        }else{
            if(eventID === "backSpace"){
                userInput.pop();
                resultField.innerHTML= userInput.join("");
            }else{
                if(eventID === "reset"){
                    userInput = [];
                    resultField.innerHTML= userInput.join("");
                }else{
                    userInput.push(eventID);
                    resultField.innerHTML= userInput.join("");
                }
            }
        }


    });
}
