// Write a function called extractValue
// which accepts an array of objects
// and a key and returns a new array with the value of
// each object at the key.

// let extractValue = function (arr, key) {
//     return arr.reduce(function (acc, next) {
//         acc.push(next[key]);
//         return acc;
//     }, []);
// }

// const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }]
// console.log(extractValue(arr, 'name')) // ['Elie', 'Tim', 'Matt', 'Colt']


// // Write a function called vowelCount which accepts a
// // string and returns an object with the keys as the
// // vowel and the values as the number of times the vowel
// // appears in the string.This function should be case
// // insensitive so a lowercase letter and uppercase letter should count


// let vowelCount = function (str) {

//     let vowels = 'aeiouAEIOU'

//     return str.split('').reduce(function (accum, next) {

//         if (vowels.indexOf(next) !== -1) {
//             if (accum[next]) {
//                 accum[next]++;

//             } else {
//                 accum[next] = 1;
//             }
//         }

//         return accum;
//     }, {});
// }


// // Examples:
// // console.log(vowelCount('Elie')) // {e:2,i:1};
// // console.log(vowelCount('Tim')) // {i:1};
// // console.log(vowelCount('Matt')) // {a:1})
// // console.log(vowelCount('hmmm')) // {};
// // console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};



// let addKeyAndValue = function (arr, key, value) {

//     return arr.reduce(function (accum, next, idx) {
//         accum[idx][key] = value;
//         return accum
//     }, arr);


// }


let partition = function (arr, cb) {
    return arr.reduce(function (acc, next) {
        if (cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next)
        }
        return acc;
    }, [[], []]);
}

function isEven(val) {
    return val % 2 === 0;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(partition(arr, isEven)) // [[2,4,6,8], [1,3,5,7]];
