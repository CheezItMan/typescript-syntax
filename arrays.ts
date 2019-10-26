
// Type inference array of strings
const carMakers = ['Tesla', 'Ford', 'Toyota', 'GM'];

// Type annotation for array of strings
// const otherCarMakers: string[] = ['Tesla', 'Ford', 'Toyota', 'GM'];


// Flexible types
// Date inference to array of various types
const importantDates = [new Date(), '2030-10-10'];

// Annotation to do the same thing
const otherDates: (string | Date)[] = [];

// Array of anything
const arrayOfAnything: any[] = [];