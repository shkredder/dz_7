//task 1
let array = [];
const replicate = (number, times) => {
    if (times < 1) {
        return array;
    } else if (times === 1) {
        array.push(number);
        return array;
    } else {
        array.push(number);
        replicate(number, times - 1);
        return array;
    }
};

console.log(replicate(5, 3)); // [5, 5, 5]
// console.log(replicate(69, 1)); // [69]
// console.log(replicate(6, -2)); // []

//task 2
const specialMultiply = (x, y) => {
    if (y === undefined) {
        return function (y) {
            return x * y;
        };
    } else {
        return x * y;
    }
};
console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....

//task 3
function game(userAttempt, randomNum) {
    if (userAttempt === randomNum) {
        console.log("You got it!");
        return (guess = 1);
    } else if (userAttempt > randomNum) {
        console.log("Your guess is too high!");
    } else if (userAttempt < randomNum) {
        console.log("Your guess is too low!");
    }
}

const userEnter = Number(prompt("Enter the number of game attempts:"));

const guessingGame = (gameAttemps) => {
    const randomNum = Math.floor(Math.random() * 11);
    let guess, userAttempt;
    debugger;
    for (let i = 1; i < gameAttemps + 1; i++) {
        userAttempt = Number(prompt(`Enter the ${i} number:`));
        if (game(userAttempt, randomNum) === 1) {
            console.log("You know the answer. What do you want from me?");
            break;
        }
    }
    return `No more guesses the answer was ${randomNum}! Please start a new game.`;
};

console.log(guessingGame(userEnter));
