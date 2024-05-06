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