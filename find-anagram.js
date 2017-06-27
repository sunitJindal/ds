// find all the anagrams

const input = ['abg', 'abc', 'cab', 'abdq', 'bag', 'cat', 'now', 'qabd', 'qab', 'tac' ,'won'];
const result = {};
input.forEach((str) => {
  const ss = str.split('').sort().join('');
  
  if (result[ss]) {
    result[ss].push(str);
  } else {
    result[ss] = [ss]
  }
});

console.log(result)
