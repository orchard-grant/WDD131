// activity 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}


// activity 2
const letters = ['A', 'B', 'B']
function convertGrade(letter) {
    let number = 0;
    if (letter === 'A') {
        number = 4;
    } else if (letter === 'B') {
        number = 3;
    }
    return number;
}

const gpaPoints = letters.map(convertGrade)

// activity 3

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// activity 4

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const shortWords = words.filter(function (word) {
    return word.length < 6;
});

// activity 5

const myArray = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber)

// const stepsHtml = steps.map(listTemplate)
// document.querySelector("#myList").innerHTML = stepsHtml.join()

// let new_array = arr.map(function callback() {
    
// }[, thisArg])