let strVal = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz12345678903%:?*!@&";
let strValLength = strVal.length;
let button = document.getElementById("create");
let generateValue = [];
let inptVal = document.getElementById("inputValue");
let butCopy = document.getElementById("copy");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getPassword(str, size) {
    getCleanInput(); 
    for (let i = 0; i < size; i++) {
        let index = getRandomInt(strValLength);
        generateValue.push(str[index]);
    }
    inptVal.value = generateValue.join(""); 
}


function getCleanInput() {
    generateValue = [];
    inptVal.value = "";
}

button.addEventListener("click", () => {
    let inputChoseSize = document.getElementById("in-ch");
    let size = parseInt(inputChoseSize.value);
 
    if (isNaN(size) || size <= 0 || size > strValLength) {
        alert("Please enter a valid number for password length.");
    } else {
        getPassword(strVal, size);
    }
});

butCopy.addEventListener("click", () => {
    getCheck();
});

function getCopied() {
    navigator.clipboard.writeText(inptVal.value)
        .then(() => alert("Password copied!"))
        .catch(err => alert("Failed to copy: " + err));
}

function getCheck() {
    if (generateValue.length > 0) {
        getCopied();
        getCleanInput();
    } else {
        alert("You can't copy an empty field");
    }
}
