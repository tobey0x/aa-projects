let abbreviate = function (word) {
  let vowels = "aeiou";
  let newWord = "";

  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    if (!vowels.includes(char.toLowerCase())) {
      newWord += char;
    }
  }
  return newWord;
};

console.log(abbreviate("wonderfully"));

function uncompress(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i += 2) {
    let char = str[i];
    let num = Number(str[i + 1]);

    for (let times = 0; times < num; times += 1) {
      newStr += char;
    }
  }
  return newStr;
}

console.log(uncompress("a5b2c4z1"));

function tripletTrue(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(tripletTrue("terrribble"));

function sillyString(word) {
  let vowels = "aeiou";
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      newWord += char + "b" + char;
    } else {
      newWord += char;
    }
  }
  return newWord;
}

console.log(sillyString("onomaetopia"));

// Caesar Cipher
function caesarCipher(string, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let oldIdx = alphabet.indexOf(char);
    let newIdx = oldIdx + num;
    let newChar = alphabet[newIdx % alphabet.length];
    newStr += newChar;
  }
  return newChar;
}

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function choosePrimes(arr) {
    newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (isPrime(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(choosePrimes([36, 48, 9, 13, 19]));
console.log(choosePrimes([5, 6, 4, 11, 2017]));

function tripleSequence(start, length) {
    arr = [start];
    
    for (let i = 0; i < length -1 ; i++){
        nextEle = arr[i] * 3;
        arr.push(nextEle);
    }

    return arr;
}

function unique(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        let ele = arr[i];
        if (unique.includes(ele)) {
            continue;
        }
        newArr.push(ele);
    }
}

function fibonacciSequence(length) {
    if (length === 0) return [];
    if (length === 1) return [1];

    let seq = [1, 1];
    while (seq.length < length) {
        
    }
}

let totalSales = 0;

const addTotalSales = function (value) {
  totalSales += value;
}

const monthlySales = [123, 456, 1023];

monthlySales.forEach(addTotalSales)
console.log(totalSales)

const toys = [
  'Red Ball',
  'Pink Element',
  'Clown with Red Nose',
  'Firefighter Hat (Red)',
  'Teddy Bear (Brown)'
];

function isRedToy(toy) {
  return toy.toLowerCase().indexOf('red') > -1;
}

const redToy = toys.filter(isRedToy)

console.log(redToy)

const myFriends = [
  { firstname: "Isma", lastname: "Kirby", age: 27 },
  { firstname: "Aaliya", lastname: "Becker", age: 35 },
  { firstname: "Adnaan", lastname: "Tang", age: 22 },
  { firstname: "Rafi", lastname: "Pearson", age: 29 },
  { firstname: "Eshaal", lastname: "Gould", age: 29 },
  { firstname: "Scarlett", lastname: "Whitehead", age: 45 },
  { firstname: "Arslan", lastname: "Esparza", age: 38 },
  { firstname: "Isla-Mae", lastname: "Hastings", age: 46 },
  { firstname: "Eamonn", lastname: "Vang", age: 21 },
  { firstname: "Haya", lastname: "Mcdougall", age: 31 },
];

let total = 0;

myFriends.forEach(function (person) {
  const firtInitial = person.firstname.substring(0, 1);
  const lastInitial = person.lastname.substring(0, 1);
  person.initials = firtInitial + lastInitial;
  total += person.age
})

console.log(myFriends)
console.log(total)

const average = total / myFriends.length;
const myOlderFriends = myFriends.filter(function (person) {
  return person.age > average;
});
console.log(myOlderFriends)

const report = myOlderFriends.map(function (person) {
  return person.initials + ': ' + person.age;
})
console.log(report)

console.log('######')
console.log("");

const numbers = [0, 1, 2, 3]
const doSum = function (accumulator, currentValue) {
  return accumulator + currentValue;
}

const theSum = numbers.reduce(doSum, 0);

console.log(theSum)

console.log("######");
console.log("");
