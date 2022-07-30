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
const guessingGame = (gameAttemps) => {
    const randomNum = Math.floor(Math.random() * 11);
    let counter = 0,
        guess = 0;
    return function game(userAttempt) {
        if (counter === gameAttemps) {
            console.log(`No more guesses the answer was ${randomNum}! Please start a new game.`);
            return;
        }

        if (guess === 1) {
            console.log("You know the answer. What do you want from me?");
            return (counter = gameAttemps);
        } else {
            if (userAttempt === randomNum) {
                console.log("You got it!");
                return (guess = 1);
            } else if (userAttempt > randomNum) {
                console.log("Your guess is too high!");
            } else if (userAttempt < randomNum) {
                console.log("Your guess is too low!");
            }
        }
        return counter++;
    };
};

let game2 = guessingGame(7);
game2(1);
game2(8);
game2(5);
game2(7);
game2(0);
game2(10);
game2(9);
game2(6);
game2(4);
game2(2);
