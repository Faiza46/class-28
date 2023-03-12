//Spread (...) Operator

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];


const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

q1.push('Jul');
console.log(q1);

const year_Update = [...q1, ...q2, ...q3, ...q4];
console.log(year_Update);

//for of loop
const cars = ["BMW", "Volvo", "Mini", "Honda"];
let text = "";

for (let x of cars) {
    text += x + " ";
}

console.log(text);
