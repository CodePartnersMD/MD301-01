```javascript
// array.map demo

const people = [
  { name: 'Brittany', role: 'student' },
  { name: 'Jason', role: 'student' },
  { name: 'Zach', role: 'teacher' },
  { name: 'Greg', role: 'student' },
];

people.filter(val => val.role === 'teacher')

people.map(val => val.name = val.name.toUpperCase())

people.map(val => console.log(val.name))


```
