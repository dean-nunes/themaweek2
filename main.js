//initial references
const letterContainer = document.querySelector("#letter-container");
const optionsContainer = document.querySelector("#options-container");
const userInputSection = document.querySelector("#user-input-section");
const newGameContainer = document.querySelector("#new-game-container");
const newGameButton = document.querySelector("#new-game-button");
const canvas = document.querySelector("#canvas");
const resultText = document.querySelector("#result-text");

//options values for butttons
let options = {
    landen: [
        "Portugal",
        "Nederland",
        "Engeland",
        "China",
        "Rusland",
        "Marokko",
    ],
    kleuren: ["zwart", "blauw", "geel", "oranje", "groen", "rood"],
    brood: [
        "pita",
        "volkoren",
        "witbrood",
        "bruinbrood",
        "meergranen",
        "glutenvrij",
    ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOption = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWorld('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//block all the Buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //disable all options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    //disable all letters 
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};

//World Generator
const generateWorld = (optionsValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //if optionsValur matches the button innertext then highlight the button
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionsValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });

    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionsValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.lenght)];
    chosenWord = chosenWord.toUpperCase();

    //replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

    //display each element as span
    userInputSection.innerHTML = displayItem;
};