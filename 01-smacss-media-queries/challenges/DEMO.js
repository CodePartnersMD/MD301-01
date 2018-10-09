let students = ['Alyssa', 'Brittany', 'Harold'];

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log('break');

students.forEach((param, indx, arr) => {
    console.log(indx, arr);
});

let helperFunc = (param, indx, arr) => {
    console.log(indx, arr);
};

students.forEach(helperFunc);