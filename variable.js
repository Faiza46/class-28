//premitive data types
var x = 10;
{
    let x = 2;
    console.log('let varaible: ', x);
}
console.log('var variable:', x);

{
    const x = 2;
    console.log('const:', x);
}

//non-premitive data types
const student = { id: 16511056, name: 'maryy', age: 20, occupation: 'student', status: 'single' };

student.name = 'israt';
student.id = 16511055;
student.age = 26;
console.log(student);
