const mult = (x) => {
  return (y) => (x * y);
};

let multby3 = mult(3);
console.log(multby3(2));
console.log(multby3(3));

const logger = (type) => {
  return (msg) => ({message : msg, type: type});
};

let errorLogger = logger("Error");
let infoLogger = logger("Info");
let warningLogger = logger("Warning");

console.log(errorLogger("Syntax Error"));
console.log(infoLogger("If statment"));
console.log(warningLogger("Unused variable"));

const arrApply = (f) => {
  return (arr) => {
    return arr.map((elem) => {
      return f(elem);
    });
  }
};

const arrSquare = arrApply((x) => (x ** x));
const arrDouble = arrApply((x) => (x * 2));

console.log(arrSquare([1, 2, 3, 4]));
console.log(arrDouble([1, 2, 3, 4]));