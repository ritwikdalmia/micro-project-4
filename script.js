const userInput = document.querySelector(".userinput");
const resetKey = document.querySelector(".reset-cal-key");
const answerKey = document.querySelector(".answer-cal-key");
const deleteKey = document.querySelector(".delete-cal-key");
const keys = document.querySelectorAll(".cal-key");

const keysArray = Array.from(keys);

const keyClickHander = (event) => {
    console.log("keyClicked: ", event.target.innerText);
  
    let value = event.target.innerText; 
    if (value === "X") {
        value = "*";
    }
    let currentValue = userInput.value;
    let currentValue1 = userInput.value;

    // Checking if the last character and the current character are both operators
    const lastCharacterIsOperator = currentValue.match(/[+\-*/]$/);
    const currentCharacterIsOperator = value.match(/[+\-*/]$/);
    const lastdecimalvalue = currentValue1.match(/[.]$/);
    const currentdecimalvalue = value.match(/[.]$/);

    // If both are operators, new operator dont added
    if (lastCharacterIsOperator && currentCharacterIsOperator) {
        // Do nothing or perform any other action
    }
        // If both are decimal,the new decimal dont added


    if(lastdecimalvalue && currentdecimalvalue){

    }
     else {
        userInput.value += value;
    }
  
  
  };
  
keysArray.forEach((key) => key.addEventListener("click", keyClickHander));



answerKey.addEventListener("click", () => {
    const inputresult = userInput.value;
   
        const result = eval(inputresult);
        userInput.value = result;
   
});

resetKey.addEventListener("click", () => {
    console.log("Reset Clicked");
    userInput.value = "";
});

deleteKey.addEventListener("click", () => {
    console.log("Delete Clicked");
    initalValue = userInput.value;
    updatedValue = initalValue.substring(0, initalValue.length - 1);
    userInput.value = updatedValue;
  });
