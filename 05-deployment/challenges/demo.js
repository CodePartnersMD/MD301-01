let students = ['Alyssa', 'Patrice', 'Greg', 'Jason']

//splice method
students.splice(1, 0, 'Gary')

console.log(students)

students.splice(2, 1, 'Mandana')

console.log(students)

students.splice(3, 2, 'Brittany', 'Harold', 'Jalal')

console.log(students)

students = ['Alyssa', 'Patrice', 'Greg', 'Jason']

//slice method
let removeAlyssa = students.slice(0, 1)

console.log(removeAlyssa)

let removeManyStudents = students.slice(0, 3)

console.log(removeManyStudents)

let char = students[0].slice(0, 2)

console.log(char)

//split method
let str = 'These students are awesome'

let allChars = str.split('')

console.log(allChars)

let allWords = str.split(' ')

console.log(allWords)

let eSplit = str.split('e')

console.log(eSplit)

//join method

let newString = allWords.join(' ')

console.log(newString)

let joinEChar = eSplit.join('e')

console.log(joinEChar)

let joinChars = allChars.join('')

console.log(joinChars)

str.split('').reverse().join('')
