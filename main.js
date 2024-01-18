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