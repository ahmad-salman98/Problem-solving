// function fizzbuzz(arr) {

//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
//             output[i] = "fizzpuzz";
//         }
//         else if (arr[i] % 3 == 0) {
//             output[i] = "fizz";

//         }
//         else if (arr[i] % 5 == 0) {
//             output[i] = "buzz";

//         }
//         else {
//             output[i] = arr[i];
//         }

//     }
//     return output;
// }

// let arr = [2, 3, 8, 10, 13, 15];

// console.log(fizzbuzz(arr));


// function forLoopTwoToThe(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = Math.pow(2, arr[i]);
//     }
//     return result;
// }

// console.log(forLoopTwoToThe([1, 2, 3, 4]));


// function oddValues(arr) {
//     const ans = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// console.log(oddValues([1, 2, 3, 4, 5, 6, 7]));


// function oddValues(arr) {
//     const ans = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 17];
// console.log(oddValues(arr));

// function countNumber(arr) {
//     let ans = 1;
//     for (let i = 0; arr.indexOf(arr[i]) < arr.indexOf(arr[i + 1]); i++) {
//         ans++;
//     }
//     return ans;
// }

// console.log(countNumber([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6]));


// var lengthOfLongestSubstring = function (s) {
//     let arr = [];
//     let count = 0;
//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (!arr.includes(s[i])) {
//             arr.push(s[i]);
//             count++;
//             if (result < count) result = count;
//         }

//         else {
//             count = 0;
//             arr = [];
//             i -= result - 1;
//             ;
//         }
//     }


//     return result;
// }


// console.log(lengthOfLongestSubstring("dvrd"));


// _______________Foreach practice :______________

// const inventory = [

//     { name: 'apples', available: true },
//     { name: 'pears', available: true },
//     { name: 'oranges', available: false },
//     { name: 'bananas', available: true },
//     { name: 'blueberries', available: false }]
// let result = [];
// inventory.forEach(e => { if (e.available) result.push(e) });
// // console.log(result);


// _______________ MAp practice _________________

// let arr = [1, 2,4,4,4, 3, 4, '5', '6']
// let result = arr.map(e => {
//     if (isNaN(e)) return 'N\A';
//     else if (e % 2 == 0) return "even";
//     else return 'odd';
// })

// console.log(result);


//__________________ Filter practice____________

// let arr1 = [1, 2, 3, 5, 7];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];


// function notInFirstArray(e) {
//     if (!arr1.includes(e)) return e;
// }

// let result = arr2.filter(notInFirstArray);
// console.log(result);

// _________________ reduce practice _________________

// function reversedString(str) {
//     return str.split("").reduce((acc, curr) => { return curr.concat(acc); })
// }
// console.log(reversedString("HI THERE"));


// ___________ RegEx practice _______

// let str = 'hello There 2';
// let isNum = function (str) {
//     let arr = str.toString().match(/\d/g);
//     if (arr == null) return false;
//     else return true;
// }
// console.log(isNum(str));

// ___________ RegEx practice _______

// function Halloween() {
//     let input = prompt("In which Month The Halloween is ?");
//     let arr = input.match(/(\boctober\b|\boct\b)/i)
//     if (arr != null) return true;
//     else return false;
// }
// console.log(Halloween());