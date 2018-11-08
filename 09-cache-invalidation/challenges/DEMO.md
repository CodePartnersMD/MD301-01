```javascript

let numbers = [1,2,3,'h',5,6]

numbers.reduce((accumulator, currentValue, index) => {
  return accumulator + currentValue
  
}, 0)



let heroes = [
  {name: 'Thor', universe: 'Marvel'},
  {name: 'Thanos', universe: 'Marvel'},
  {name: 'Hulk', universe: 'Marvel'}
]

heroes.reduce((acc, val) => {
  acc.push(val.name)
  return acc
}, [])
```
