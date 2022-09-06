let myDog = {
    name: "Bingo",
    type: "German Shepherd",
    age: 1,
    favoriteToys: ["Frisbees", "ball"]
};

for (let key in myDog) {
    let value = myDog[key];
    console.log(value);
}

myDog.bark = function () {
    console.log("Woof!")
}

myDog["speak"] = function (string) {
    console.log("Woof " + string + " Woof!!");
}

myDog.bark();
myDog.speak("meat")

console.log(Object.entries(myDog))
console.log(myDog["name"])

let cat = {};
let myKey = "color";

cat.myKey = "orange"
console.log(cat.myKey)

function adder(num1, ...otherNums){
    console.log(num1)
    let sum = num1;

    otherNums.forEach(function (num) {
        sum += num;
    });
    console.log(sum)
}
adder(2, 3, 4, 12, 11, 1)

let object = { game: { name: "Boggle", rating: "10" } };

let {
    game: { rating },
} = object;

console.log(rating);