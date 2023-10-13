`use strict`;

function getRandomNumber() {
    let numberChosen = 0;
    for (let i = 0; i < 999; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1; // 1 to 6
        if (numberChosen === 0) {
            // One Case of a number
            if (randomNumber === 1) {
                const check = Math.random();
                if (check < 1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    saveNumber(randomNumber);
                    numberChosen = 1
                };
            };
            // End one Case of a number
            if (randomNumber === 2) {
                if (Math.random() < 0.1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    saveNumber(randomNumber);
                    numberChosen = 1
                };
            };
            if (randomNumber === 3) {
                if (Math.random() < 0.1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    saveNumber(randomNumber);
                    numberChosen = 1
                };
            };
            if (randomNumber === 4) {
                if (Math.random() < 0.1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    numberChosen = 1
                };
            };
            if (randomNumber === 5) {
                if (Math.random() < 0.1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    saveNumber(randomNumber);
                    numberChosen = 1
                };
            };
            if (randomNumber === 6) {
                if (Math.random() < 0.1) {
                    document.getElementById(`number`).textContent = randomNumber;
                    saveNumber(randomNumber);
                    numberChosen = 1
                };
            };
            // ADD MORE NUMBER CASES HERE



        } else if (numberChosen === 1) {
            return;
        };
    }; 
};

let numArray = [];

for (; numArray.length <= 100 - 1; ) {
    function saveNumber(randomNumber) {
        numArray.push(randomNumber);
    };
    getRandomNumber();
};

console.log(`Number rolled : ${numArray}`)

const resultString = numArray.join(` `).replace(/,/g, "");
document.getElementById(`numArray`).textContent = `Numbers rolled (${numArray.length}): ${resultString}`;
