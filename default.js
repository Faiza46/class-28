function addNumbers(x = 1, y = 1) {
    let number = x + y;
    return number;
}

let number = addNumbers(12 + 14);
console.log(number);


function addString(x = 'Faiza', y = 'Huma') {
    let string = x.concat(' ').concat(y);
    return string;
}

let string = addString();
console.log(string);