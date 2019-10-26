// Kind of like an array where specific elements have specific types
// why not use an array of objects...

// An object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// An array
// const pepsi = ['brown', true, 45];
// Tuple
const pepsi: [string, boolean, number] = ['brown', true, 45];

// error 40 is not assignable to type string
// pepsi[0] = 40;

// Type alias
type Drink = [string, boolean, number];

const drPepper: Drink = ['brown', true, 38];

// We don't use tuples often, mostly for things like reading from a CSV.
// I would still use an object