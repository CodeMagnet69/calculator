numArray = []

buttonArray = document.querySelectorAll("button")

for(element in buttonArray){
    addEventListener("click", function calculator(e){
        console.log("Clicked")
    });
}
