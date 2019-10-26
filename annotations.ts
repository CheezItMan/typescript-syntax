let apples: number = 5;

apples = 10;

// error
// apples = "pasta";


let speed: string = 'Fast';
// error
//speed = 27;
let hasName: boolean = true;

let nothingMuch: null = null;
// Error
// nothingMuch = 27;

let nothing: undefined = undefined;
let now: Date = new Date();

// Array

let color: string[] = ['Red', 'Green', 'Blue'];

let point: { x: number, y: number,} = {
  x: 3,
  y: 25,
  //error
  //  x: "heya",
};


// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1).  For functions that return the 'any' type.
const json = '{"x": 10, "y": 20}'; // json example
const coordinates: {x: number, y:number } = JSON.parse(json);
console.log(coordinates);