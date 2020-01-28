# flat-array

Function to flat an array of any depth

```js
const result = flat([[1,2,[3]],4])
console.log(result) // [1,2,3,4]

const result = flat([['a','b',['c']],'d'])
console.log(result) // ['a','b','c','d']
````

# Test

```
npm i
npm run test
```
