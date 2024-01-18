//initial references
const letterContainer = document.querySelector("letter-container");
const optionsContainer = document.querySelector("options-container");
const userInputSection = document.querySelector("user-input-section");
const newGameContainer = document.querySelector("new-game-container");
const newGameButton = document.querySelector("new-game-button");
const canvas = document.querySelector("canvas");
const resultText = document.querySelector("result-text");

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
    kleuren:["zwart", "blauw", "geel", "oranje", "groen", "rood"],
    