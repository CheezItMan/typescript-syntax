import 'reflect-metadata';

const plane = {
  color: 'red',
};

// Reflect.defineMetadata(with keynote and value hiya on plane)
Reflect.defineMetadata('note', 'hiya', plane);

console.log(plane); // the basic object
const answer = Reflect.getMetadata('note', plane);
console.log(answer); // hiya

// Put a metadata value on the color attribute of plane
Reflect.defineMetadata('other-note', 'Heya', plane, 'color');

const otherNote = Reflect.getMetadata('other-note', plane, 'color');
console.log(otherNote);