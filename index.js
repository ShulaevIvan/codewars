function disemvowel(str) {
    const filterArr  = ['a', 'e', 'i', 'o', 'u'];
    const resultArr = [];
    str.split('').forEach((item)=> {
        if (!filterArr.includes(item.toLocaleLowerCase())) {
            resultArr.push(item);
        }
    });
    let result = resultArr.join('').replace(/\n/g,'\n')
    return result
};

console.log(disemvowel(testStr))

// mask 

function maskify(cc) {
    const strLen = String(cc);
    let counter = 0;
    const resultStr = [];
    for (let i in strLen) {
        counter += 1
        if  (counter <= strLen.length - 4) {
            resultStr.push('#');
        }
        else {
            resultStr.push(strLen[i]);
        }
    }
    return resultStr.join('');
}

console.log(maskify(4556364607935616))

// friends 

function friend(friends){
    const resultArr = [];
    friends.forEach((item)=> {
        if (item.length === 4) {
            resultArr.push(item);
        }
    });
    return resultArr;
}

const friendsArr = ["Ryan", "Kieran", "Mark"]
console.log(friend(friendsArr))

// get middle

function getMiddle(s){
    const center = s.length / 2;
    if (s.length % 2 === 0) {
        return s.slice(center-1, center+1);
    }
    return s.slice(center, center+1);
}

// array dif

function arrayDiff(arr1, arr2) {
    const dif = arr1.filter(item => !arr2.includes(item));
    return dif;
}
const arr1 = [1,2]
const arr2 = [1]

console.log(arrayDiff([1,2],[1]))


/// duplicate simbols search

function duplicateCount(text){
    let result = 0;
    const resultObj = {};
    text.toLowerCase().split('').map(str => {
        if (!resultObj.hasOwnProperty(str)) {
            resultObj[str] = 0;
        } else {
          if (resultObj[str] === 0) {
            result += 1;
          }
          resultObj[str] = resultObj[str] + 1;
        }
    });
    return result;
}

console.log(duplicateCount("abcde"))

function persistence(num) {
  let count = 0;
  let digits = num.toString();
  while(digits.length > 1) {
    console.log(digits.split(''))
    digits = digits.split('').reduce((acc, cur) => acc * cur, 1).toString();
    count++;
  }

  return count;
}

function persistence(num) {
  let counter = 0;
  let numToStr = num.toString()
  while (numToStr.length > 1) {
    numToStr = numToStr.split('').reduce((prevItem, currentItem) => {
      return prevItem * currentItem;
    })
    numToStr = numToStr.toString();
    counter += 1;
  }
  return counter;
}
console.log(persistence(39))

function reverseWords(str) {
  const result = str.split(' ').map((item) => item.split('').reverse().join('')).join(' ')
  return result;
}

function reverseWords(str) {
  return str.split('').reverse().join('')
}

console.log(reverseWords('apple'))

function rowSumOddNumbers(n) {
  const basic  = (n - 1) * n / 2;
  const firstNumberRow = basic * 2 + 1;
  const lastNumber = firstNumberRow + 2 * (n - 1);

  return n * (firstNumberRow + lastNumber) / 2;
}

console.log(rowSumOddNumbers(3))


function accum(s) {
  const patternUpper = /\b(\w)[-]*/g;
  const patternFix = /[-]$/;
	const strArr =  s.split('');
  let resultArr = [];
  for (let i = 0; i < strArr.length;  i++) {
    let str = strArr[i].toLowerCase().repeat(i+1) + '-';
    resultArr.push(str);
  }
  const result = resultArr.join('').replace(patternFix, '').replace(patternUpper, (item) => item.toUpperCase());
  
  return result;
}

console.log(accum("ZpglnRxqenU"))