// function disemvowel(str) {
//     const filterArr  = ['a', 'e', 'i', 'o', 'u'];
//     const resultArr = [];
//     str.split('').forEach((item)=> {
//         if (!filterArr.includes(item.toLocaleLowerCase())) {
//             resultArr.push(item);
//         }
//     });
//     let result = resultArr.join('').replace(/\n/g,'\n')
//     return result
// };

// console.log(disemvowel('asdasdasdasd'))

// // mask 

// function maskify(cc) {
//     const strLen = String(cc);
//     let counter = 0;
//     const resultStr = [];
//     for (let i in strLen) {
//         counter += 1
//         if  (counter <= strLen.length - 4) {
//             resultStr.push('#');
//         }
//         else {
//             resultStr.push(strLen[i]);
//         }
//     }
//     return resultStr.join('');
// }

// console.log(maskify(4556364607935616))

// // friends 

// function friend(friends){
//     const resultArr = [];
//     friends.forEach((item)=> {
//         if (item.length === 4) {
//             resultArr.push(item);
//         }
//     });
//     return resultArr;
// }

// const friendsArr = ["Ryan", "Kieran", "Mark"]
// console.log(friend(friendsArr))

// // get middle

// function getMiddle(s){
//     const center = s.length / 2;
//     if (s.length % 2 === 0) {
//         return s.slice(center-1, center+1);
//     }
//     return s.slice(center, center+1);
// }

// // array dif

// function arrayDiff(arr1, arr2) {
//     const dif = arr1.filter(item => !arr2.includes(item));
//     return dif;
// }
// const arr1 = [1,2]
// const arr2 = [1]

// console.log(arrayDiff([1,2],[1]))


// /// duplicate simbols search

// function duplicateCount(text){
//     let result = 0;
//     const resultObj = {};
//     text.toLowerCase().split('').map(str => {
//         if (!resultObj.hasOwnProperty(str)) {
//             resultObj[str] = 0;
//         } else {
//           if (resultObj[str] === 0) {
//             result += 1;
//           }
//           resultObj[str] = resultObj[str] + 1;
//         }
//     });
//     return result;
// }

// console.log(duplicateCount("abcde"))

// function persistence(num) {
//   let count = 0;
//   let digits = num.toString();
//   while(digits.length > 1) {
//     console.log(digits.split(''))
//     digits = digits.split('').reduce((acc, cur) => acc * cur, 1).toString();
//     count++;
//   }

//   return count;
// }

// function persistence(num) {
//   let counter = 0;
//   let numToStr = num.toString()
//   while (numToStr.length > 1) {
//     numToStr = numToStr.split('').reduce((prevItem, currentItem) => {
//       return prevItem * currentItem;
//     })
//     numToStr = numToStr.toString();
//     counter += 1;
//   }
//   return counter;
// }
// console.log(persistence(39))

// function reverseWords(str) {
//   const result = str.split(' ').map((item) => item.split('').reverse().join('')).join(' ')
//   return result;
// }

// function reverseWords(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverseWords('apple'))

// function rowSumOddNumbers(n) {
//   const basic  = (n - 1) * n / 2;
//   const firstNumberRow = basic * 2 + 1;
//   const lastNumber = firstNumberRow + 2 * (n - 1);

//   return n * (firstNumberRow + lastNumber) / 2;
// }

// console.log(rowSumOddNumbers(3))

// function accum(s) {
//   const patternUpper = /\b(\w)[-]*/g;
//   const patternFix = /[-]$/;
// 	const strArr =  s.split('');
//   let resultArr = [];
//   for (let i = 0; i < strArr.length;  i++) {
//     let str = strArr[i].toLowerCase().repeat(i+1) + '-';
//     resultArr.push(str);
//   }
//   const result = resultArr.join('').replace(patternFix, '').replace(patternUpper, (item) => item.toUpperCase());
  
//   return result;
// }

// console.log(accum("ZpglnRxqenU"))

// function positiveSum(arr) {
//     const resultArr = []
//     arr.forEach((item) => {
//         if (item > 0) {
//            resultArr.push(item);
//         }
//     });
//     if (resultArr.length === 0) {
//         return 0;
//     }
//     const result = resultArr.reduce((sum, item) => {
//         return sum + item;
//     })

//     return result;
// }

// console.log(positiveSum([0]))

// function findAverage(array) {
//     if (array.length === 0) {
//         return 0;
//     }
//     const result = array.reduce((sum, item) => {
//        return Math.floor((sum += item));
//     }, 0);
//     return result / array.length;
// }

// console.log(findAverage([1,2,3,4]))

// function descendingOrder(n){
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] < 0) delete n[i];
//     }
//     const toArr = n.toString().split('').sort((a,b) => a - b).reverse();
//     const result = Number(toArr.join(''));
//     return result;
// }

// console.log(descendingOrder(42145, -1))

// function squareDigits(num){
//     const toArr = num.toString().split('');
//     const resultArr = [];
//     toArr.forEach((item) => {
//         resultArr.push(Math.floor(Number(item) * Number(item)));
//     })
//     return Number(resultArr.join(''));
// }

// console.log(squareDigits(3212))

// function noSpace(x){
//     let toArr = x.split('').filter(item => item != ' ');
//     return toArr.join('');
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// function XO(str) {
//     const xArr = str.split('').filter((item) => item.toLowerCase() == 'x');
//     const oArr = str.split('').filter((item) => item.toLowerCase() == 'o');

//     return xArr.length == oArr.length ? true : false;
// }

// console.log(XO("aasd"))

// function solution(str, ending){
//     if (ending.length === 0) {
//         return true;
//     }
//     return str.substr(-(ending.length)) == ending;
// }

// console.log(solution('abbc', ':-('))

// function countSheeps(arrayOfSheep) {
//     const counter = arrayOfSheep.filter((item) => item === true).length;
//     return counter;
// }
// const arrOfheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true
// ];
// console.log(countSheeps(arrOfheep))

// function likes(names) {
//     let addStr;
//     let resultArr = []
//     if (names.length === 0){
//         addStr = 'no one likes this';
//         return addStr
//     }
//     else if (names.length === 1) {
//         addStr = 'likes this'
//         for(let i = 0; i < names.length; i++) {
//             resultArr.push(names[i] + addStr)
//         }
//         return resultArr
//     }
//     else {
//         for (let i = 0; i < names.length; i++) {
            
//             if (names.length === 3) {
//                 addStr = 'like this'
//                 let result = resultArr.push(`${names[i]}, ${names[i+1]} and ${names[i+2]} ${addStr}`)
//                 return resultArr.join('')
//             }
//             if (names.length >= 4) {
//                 addStr = 'like this'
//                 let result = resultArr.push(`${names[i]}, ${names[i+1]} and ${names.length - 2} others ${addStr}`)
//                 console.log(resultArr)
//                 return resultArr.join('')
//             }
//         }
//     }

// }

// function likes(names) {
//     let addStr;
//     let resultArr = []
//     if (names.length === 0) return 'no one likes this';

//     for (let i = 0; i < names.length; i++) {
//         if (names.length === 1) {
//             addStr = 'likes this';
//             resultArr.push(names[i] + ' ' + addStr);
//             return resultArr.join('');
//         }
//         else if (names.length === 2) {
//             addStr = 'like this';
//             resultArr.push(`${names[i]} and ${names[i+1]} ${addStr}`);
//             return resultArr.join('');

//         }
//         else if(names.length === 3) {
//             addStr = 'like this';
//             resultArr.push(`${names[i]}, ${names[i+1]} and ${names[i+2]} ${addStr}`);
//             return resultArr.join('');
//         }
//         else {
//             addStr = 'like this'
//             resultArr.push(`${names[i]}, ${names[i+1]} and ${names.length - 2} others ${addStr}`);
//             return resultArr.join('');
//         }

//     }
// }
// console.log(likes(["Alex", "Jacob"]))

// function multiplesSolution(number){
//     let targetNumber = number;
//     const resultArr = [];
//     if (number <= 0 || number === 1 || number <= 3) {
//         return 0;
//     }
//     else if (number === 5){
//         return 3;
//     }

//     for (let i = 1; i < number; i++)  {
//         targetNumber -= 1;
//         if (targetNumber % 5 === 0 || targetNumber % 3 === 0) {
//             resultArr.push(targetNumber);
//         }
//     }
//     return resultArr.reduce((item, next) => item + next);
// }
// console.log(multiplesSolution(10))

// function boolToWord( bool ){
//    return bool ? 'Yes' : 'No';
// }

// console.log(boolToWord(false))

// let list1 = [
//     { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
//   ];
// let list2 = [
//     { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
//     { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
//     { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
//   ];

// function isSameLanguage(list) {
//     let nextIndex = 0
//     let counter = 0;
//     for (let i = 0; i < list.length; i++) {
//         nextIndex += 1;
//         if (list[nextIndex] && list[i].language == list[nextIndex].language) {
//             counter += 1;
//         }
//     }
//     if (counter+1 == list.length) {
//         return true;
//     }
//     return false;
// }

// console.log(isSameLanguage(list2))

// function longestRepetition(s) {
//     if (!s) return ['', 0];

//     const toArr = s.split('');
//     const result = [];
//     let maxValue = 0;
//     let counter = 0;
//     let currentEl = undefined;
//     let symbol = undefined;
//     for (let i = 0; i < toArr.length; i++) {
//         currentEl = toArr[i]
//         if (currentEl == toArr[i+1]) {
//             counter += 1
//         }
//         else {
//             if (counter >= maxValue)  {
//                 maxValue = counter+1;
//                 result.push([currentEl, maxValue])
//             }
//             counter = 0;
//             maxValue = 0;
//         }
//     }
//     maxValue = 0;
//     currentEl = 0;
//     for (let i = 0; i < result.length; i++) {
//         currentEl = result[i][1]
//         if (currentEl > maxValue) {
//             maxValue = result[i][1]
//             symbol =  result[i][0]
//         }
//     }
//     return [symbol, maxValue];
// }

// console.log(longestRepetition('cbdeuuu900'))

// assert.strictEqual(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true)

// function solution(words, millipede = '') {
//     if (!words.length) return true;
//     const result = [];
//     for(let i = 0; i < words.length; i ++){
//       const word = words[i];
//       const slicedArr = words.slice(0, i).concat(words.slice(i+1))
//       if (millipede === '') {
//         result.push(solution(slicedArr, word))
//       }
//       if (word.slice(-1) === millipede[0]) {
//         console.log(word.slice(-1))
//         result.push(solution(slicedArr, word + millipede))
//       }
//       else if (word[0] === millipede.slice(-1)) {
//         result.push(solution(slicedArr, millipede + word))
//       }
//       else {
//         result.push(false);
//       }
//     }
//     return result.filter(result => result).length > 0;
// }

//   console.log(solution(["no", "dog", "on", "good"]))

// function fibonacciEven(max) {
//     if (max == 0 || max == 1) {
//         return 0;
//     }
//     let fib1 = 0 
//     let fib2 = 2;
//     let sum = fib1 + fib2;
//     while (fib2 <= max) {
//         let fib3 = 4 * fib2 + fib1;
//         if (fib3 >= max) {
//             break;
//         }    
//         fib1 = fib2;
//         fib2 = fib3;
//         sum += fib2;
//     }
//     return sum
// }
// console.log(fibonacciEven(8))

// function fibonacci(n) {
//     //return fibonacci array of n elements 
//     const allArr = [];
//     if (n == 0) {
//         return allArr;
//     }
//     for (let i = 0; i < n; i++){
//         allArr.push(i)
//     }
//     for (let i = 2; i < allArr.length; i++) {
//         allArr[i] = allArr[i-1] + allArr[i-2]
//     }
//     return allArr;
// }

// console.log(fibonacci(13).length)


// my first 

// function missNumsFinder(arr) {
//     const resultArr= [];
//     const sortedArr = arr.sort((a, b) => a - b);
//     const max = Math.max(...arr);
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] > max) max = arr[i]
//     }
//     for (let i = 0; i < max; i++) {
//         if (sortedArr[i] != i && i != 0 && !sortedArr.includes(i)) {
//             resultArr.push(i);
//         }
//     }
//     return resultArr;
// }

// // for codewars over 30 000 000 el

// function missNumsFinder(arr) {
//     const tmpArr = new Array(arr.length + 10);
//     for (let i = 0; i < arr.length; i++) tmpArr[arr[i]] = arr[i];
//     while (typeof tmpArr[tmpArr.length - 1] === 'undefined') tmpArr.pop();
//     const result = [];
//     for (let i = 1; i < tmpArr.length; i++)
//       if (typeof tmpArr[i] === 'undefined') result.push(i);
//     return result;
// }

// impr first 
// const missNumsFinder = arr => {
//   const set = new Set(arr);
//   const result = [];
//   for (let i = 1; i <= Math.max(...Array.from(set)); i++)
//     if (!set.has(i)) result.push(i);
//   return result;
// };

// console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7]))


// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
// }

// function parse(string) {
//     if (string == "null") {
//         return null;
//     }
//     const clearStr = string.split('->').slice(0, -1).reverse('');
//     const result = clearStr.reduce((prev, current) => {
//         prev = new Node(Number(current), prev);
//         return prev;
//     }, null)
//     return result;
// }


// console.log(parse("1 -> 2 -> 3 -> null"))

// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
// }
// // "1 -> 2 -> 3 -> null"
// function stringify(list) {
//     if (list == null){
//         return 'null';
//     }
//     let next = list.next;
//     let arr = [];
//     arr.push(list.data);
//     while (next != null) {
//         arr.push(next.data);
//         next = next['next'];
//     }
//     arr.push(null);
//     let resultStr = arr.join(' -> ')+'null';
//     return resultStr;
// }

// console.log(stringify(new Node(1, new Node(2, new Node(3)))))

// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

// let solution = function(firstArray, secondArray) {
// 	let error = 0
// 	for (let i = 0; i < firstArray.length; i++) {
// 		error += Math.pow((secondArray[i] - firstArray[i]), 2)
// 	}
// 	return error / firstArray.length
// }


// let isSquare = function(n){
//     let result = Math.sqrt(n);
//     return (result % 1 === 0);
// }

// console.log(isSquare(25))
// "(123) 456-7890"

// function createPhoneNumber(numbers){
//     let resultStr = ''
//     let i = 0;
//     while (i < numbers.length) {
//         if (i == 0) {
//             resultStr += '(' + numbers[i];
//         }
//         else if (i != 0 && i < 2) {
//             resultStr += numbers[i];
//         }
//         else if (i == 2) {
//             resultStr += numbers[i] + ')'+' ';
//         } 
//          else if (i > 2 && i < 5) {
//             resultStr+=numbers[i];
//         }
//         else if (i == 5) {
//             resultStr+= numbers[i] + '-';
//         }
//         else if (i > 5){
//             resultStr+=numbers[i];
//         }         
//         i += 1;
//     }
//     return resultStr;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// 8 + 1 = 9 and 9 ** 2 = 81

// 512 = 5 + 1 + 2 = 8 and 8**3 = 512

// function powerSumDigTerm(n) {
//     let basicNum = 9;
//     let basicPow = 2;
//     let result = 0;
//     if (n == 0 || n == 1) {
//         return Math.pow(basicNum, basicPow);
//     }

//     for (let i = 0; i < n; i++){
//         if (i == 0) {
//             continue
//         }
//         basicPow += 1;
//         basicNum -= 1;
//         result = Math.pow(basicNum, basicPow)
//     } 
//     return result;
// }

// for (int b = 2; b < 400; b++) {
//     BigInteger value = b;
//     for (int e = 2; e < 50; e++) {
//         value *= b;
 
//         if (DigitSum(value) == b) {
//             a.Add(value);            
//         }
//         if (a.Count > 50) break;                    
//     }
//     if (a.Count > 50) break;                    
// }

// function powerSumDigTerm(n) {
//     let resultArr = [];
//     for (let i = 2; i <= 100; i++) {
//         for (let j = 2; j <= 45; j++) {
//             let powNum= Math.pow(i, j).toString();
//             let sum = 0;

//             for (let k = 0; k < powNum.length; k++) sum += parseInt(powNum[k], 10);
//             if (sum === i) {
//                 resultArr.push(parseInt(powNum,10));
//             }
//         }
//     }
//     resultArr = resultArr.sort((a, b) => a - b);
//     return resultArr[n-1];
// }

// console.log(powerSumDigTerm(4))

// function findMatchedByPattern(pattern) {
//     return (resultStr) => {
//       const checkArr = [...pattern];
//       for (let sym of resultStr) {
//         let checkPos = checkArr.indexOf(sym);
//         if (checkPos > 0) {
//             return false;
//         }
//         else if (checkPos === 0) {
//             checkArr.splice(0, 1);
//         }
//       }
//       return checkArr.length === 0;
//     }
// }

// const predicate = findMatchedByPattern('acs')
// console.log(predicate("accsess"))

// function solution(nums){
//     if (!nums) return [];
//     return nums.sort((a,b) => a - b);
// }

// console.log(solution([1, 2, 10, 50, 5]))

// function nextPal(val) {
//     let counter = val;
//     while(val < 99999999) {
//         counter += 1
//         if (isPalidrome(counter)) {
//             return counter;
//         }else if (counter === 9999999999) {
//             return false;
//         };
//     };
// };

// function isPalidrome(number) {
//     let tmpNum = number.toString().split('').reverse().join('');
//     if (tmpNum == number) {
//         return true;
//     };
// };

// console.log(nextPal(188))

const hackerrankTask = n => [
    ...Array.from({length: n}, (_, index) => ' '.repeat(n - 1 - index) + '/\\'.repeat(index + 1) + '_\\'.repeat(n)),
    ...Array.from({length: n}, (_, index) => ' '.repeat(index) + '\\/'.repeat(n - index) + '_/'.repeat(n)),
].join('\n');

console.log(hackerrankTask(3))


let defenceSurvivors = 0
let attackSurvivors = 0 
let loopLimit

// if (attackers.length > defenders.length) {
//   loopLimit = defenders.length 
//   attackSurvivors += attackers.length - defenders.length 
// }

// if (defenders.length > attackers.length) {
//   loopLimit = attackers.length 
//   defenceSurvivors += defenders.length - attackers.length 
// }

// else if (defenders.length === attackers.length) {
//   loopLimit = defenders.length 
//   }


// for (let i = 0; i < loopLimit; i++) {
//   if (attackers[i] === defenders[i]) continue 
//   else if (attackers[i] > defenders[i]) attackSurvivors++ 
//   else defenceSurvivors++
// }
// console.log([attackSurvivors, defenceSurvivors])

// if (attackSurvivors === defenceSurvivors) {
//   let initialAttackPower = attackers.reduce((pv,cv) => pv + cv,0)
//   let initialDefensePower = defenders.reduce((pv,cv) => pv + cv,0)
  
//   if (initialDefensePower >= initialAttackPower) return true
//   else return false 
// }
// else if (attackSurvivors > defenceSurvivors) {
//   return false 
// }
// else return true

// }