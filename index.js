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