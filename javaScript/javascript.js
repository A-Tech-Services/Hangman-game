// Initial references
const optionContainer = document.getElementById("options-container");
const letterContainer = document.getElementById("letter-container");
const userInputSetion = document.getElementById("user-input-section");
const canvas = document.getElementById("canvas");
const newGameContainer = document.getElementById("new-game-container");
const resultText = document.getElementById("result-text");
const newGameButton = document.getElementById("new-game-button");


// values for option buttons
let options ={
    Fruits: ["Apple", "Orange", "Strawberry", "Mango", "Grape", "Watermelon"],
    Animals: ["Lion", "Gorilla", "Dog", "Goat", "Snake", "Cow"],
    Countries: ["Nigeria", "Ghana", "Cameroon", "SouthAfrica", ]
};

// Game counts
let winCount = 0;
let count = 0;
let chosenWord = "";


// Display option buttons
const displayOption = () => {
    optionContainer.innerHTML += `<h3>Please Select an Option</h3>`;
    let buttonCon = document.createElement("div");
    for(let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
    }
    optionContainer.appendChild(buttonCon);
};

// Word generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");

    // if option value matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
        if(button.innerText === optionValue){
            button.classList.add("active");
        }
        button.disabled = true;
    });
};


// Initial function (called when page loads/ user press new game button)
const initializer = () => {
    winCount = 0;
    count = 0;
    displayOption();
} 

// Page on load
window.onload = initializer;

// New game button

newGameButton.addEventListener("onclick", initializer);
