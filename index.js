for (let i = 0; i < 5; i++) {}

for (let numItterFirst = 0;; numItterFirst++) {
    console.log("loop, i = " + numItterFirst);
    if (numItterFirst > 1)
        break;
};

for (let i = 0; i < 3; i++) {
    if (i == 1)
        continue;
    console.log(i)
}

let c = 0;
mark: for (let i = 0; i < 5; i++) {
    inner: for (let j = 0; j < 5; j++) {
        c++;
        if (i == 2) 
            break mark; // Breaks iteration at point mark when condition is satisfied, so the increment on c occurs 11 times before condition is satisfied because nested for loop is executed twice (so c is 10), then the increment to c is executed one additional time when the condition is satisfied.
    };
};
console.log(c);

function* generatorFunction() { // The function* declaration defines a generator function.
    yield 1;
    yield 2;
    yield 3;
};
for (let value of generatorFunction())
    console.log(value);

let objectFirst = { valFirst: 1, valSecond: 3 };

for (let key of Object.keys( objectFirst )) // Retrieves an array of keys from the object.
    console.log(key);

for (let value of Object.values( objectFirst )) // Retrieves an array of values from the object.
    console.log(value);

for (let entry of Object.entries( objectFirst )) // Retrieves an array of entries from the object.
    console.log(entry);

let arrayItterFirst = [0, 1, 2, 3];
for (let valueItterFirst of arrayItterFirst)
    console.log(valueItterFirst);
    
let objectItter = { valueFirst: 'a', valueSecond: 1 };
for (let valueItterSecond in objectItter)
    console.log(valueItterSecond, objectItter[valueItterSecond]);

let numItterSecond = 5;
while (numItterSecond-- > 0)
    console.log(numItterSecond);

let numItterThird = 0;
while (numItterThird++ < 10) {
    if (numItterThird > 3)
        continue;
    console.log(numItterThird);
};
console.log(numItterThird);

let arrayItterSecond = ["thing", "thingy", "stuff"];
let functionItterFirst = function(item, index, object) {
    console.log(item);
};

arrayItterSecond.forEach( functionItterFirst );

let arrayItterThird = ["potato", "spinach", "lettuce"];
arrayItterThird.forEach(function(item, index, object) {
    console.log(item, index, object);
});

let arrayItterFourth = ["a", "b", "c"];
arrayItterFourth.forEach((item, index, object) => {
    console.log(item, index, object);
});

let arrayItterFifth = [3, 5, 8, 13];
let resultFirst = arrayItterFifth.every(value => value < 10);
console.log(resultFirst);

let arrayItterSixth = [0, 1, 20, 2];
let resultSecond = arrayItterSixth.every(function (value) {
    console.log(value); // Stops iterating on values when it finds one that evaluates to false.
    return value < 10;
});
console.log(resultSecond);

let arrayItterSeventh = [1, 200, 300];
let resultThird = arrayItterSeventh.some(value => value < 10);
console.log(resultThird);

let arrayItterEight = [3, 6, 9, 12, 15];
let arrayFiltered = arrayItterEight.filter(value => value < 10);
console.log(arrayFiltered);

let arrayItterNinth = [0, 1, 2];
let arrayMapped = arrayItterNinth.map(value => ++value);
console.log(arrayMapped);

let arrayItterTenth = ["h", "e", "l", "l", "o"];
let arrayReduceFirst = (accumulator, currentValue) => accumulator + currentValue;
console.log(arrayItterTenth.reduce(arrayReduceFirst));

let arrayItterEleventh = [5, "15", 10];
console.log(arrayItterEleventh.reduce((accumulator, currentValue) => accumulator + currentValue)); // Converts numbers and returns a concantenated string.