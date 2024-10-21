const numbers = [2,13,3,7,17,5,11,19,9]
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob']
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry']

function sortByLength(fruits) {
    return fruits.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(fruits))

function sortByLengthAsc(names) {
    return names.sort((a, b) => {
        const lengthDiff = a.length - b.length;
        if (lengthDiff !== 0) {
            return lengthDiff; 
        }
        return a.localeCompare(b);
    });
}
console.log(sortByLengthAsc(names))

function sortFrom15(numbers) {
    return numbers.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));
}
console.log(sortFrom15(numbers))

function addAsterisk(fruits) {
    return fruits.map(word => `*${word}*`);
}
console.log(addAsterisk(fruits))

function between5And15(numbers) {
    return numbers.filter(num => num >= 5 && num <= 15);
}
console.log(between5And15(numbers))

function isAllOdd(numbers) {
    return numbers.every(num => num % 2 !== 0);
}
console.log(isAllOdd(numbers))

function hasEven(numbers) {
    return numbers.some(num => num % 2 === 0);
}
console.log(hasEven(numbers))

function sigma(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
console.log(sigma(numbers))