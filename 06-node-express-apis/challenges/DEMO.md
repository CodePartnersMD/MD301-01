```javascript
let studentsArr = ['Patrice', 'Mandana', 'Jason']
  for(let student of studentsArr) {
    console.log(student)
  }

let StudentsObj =  {
  name: 'Brittany',
  employer: 'DAI',
  role: 'Project Manager'
}

for(let student in StudentsObj) {
  console.log(StudentsObj[student])
}

Object.keys(StudentsObj)

Object.values(StudentsObj)

Object.entries(StudentsObj)
```
