
const add = (num1: number, num2: number ): number => {
  return num1 + num2;
}

const subtract = (num1: number, num2: number) => {
  return num1 - num2;
}

const divide = (num1: number, num2: number): number => {
  return num1 / num2;
}

const multiply = function(a: number, b:number): number {
  return a * b;
}

const throwError = (message: string): never => {
  if (!message) {
    throw new Error(message);
  }
  else throw new Error('doh!');
}

// function destructuring... which is weird
const logWeather = ({ date, weather}: { date: Date, weather: string}): void => {
  console.log(`Date: ${date}`);
  console.log(`Weather: ${weather}`);
}

console.log(add(5, 6));

console.log(subtract(5, 6));

console.log(divide(55, 6));


console.log(multiply(5, 6));
logWeather({date: new Date(), weather: 'Sunny'});