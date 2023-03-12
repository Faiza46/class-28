//Arrow functions

var x = function (x, y) {
    return x * y;
}
console.log(x(200, 300));


const a = (x, y) => x * y;
console.log(a(100, 200));


const b = (x, y) => { let result = x * y; return result };

console.log(b(500, 300));

const isLeapYear = (year) => {
    if (year % 4 == 0) {
        return 'LeapYear'
    }
    else {
        return 'Not LeapYear'
    }
}

console.log(isLeapYear(2016));

