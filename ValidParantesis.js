```
const inputArr = ['([}])', '{}]', '[{}]()'];


const pushElements = '({[';
const popElements = ')}]';

const ml = {
  '{': '}',
  '(': ')',
  '[': ']'
};

function isBalanced(input) {
  const iArr = input.split('');

  const arr = [];

  let valid = true;
  arr.push(iArr.shift());
  while (valid) {
    iArr.forEach(function(elm) {
       if (pushElements.indexOf(elm) >= 0) {
         arr.push(elm);
       } else {
         if (ml[arr.pop()] !== elm) {
           valid = false;
         }
       }
    })
  break;
  
  };

  return valid ? 'YES' : 'NO';
}

result = inputArr.map(item => isBalanced(item));

console.log(result);
```

