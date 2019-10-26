// Really important for TS
// They're great alongside classes

//  Code to define a new type

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};

// Fuk this is long
const printVehicle = (car: { name: string, year: number, broken: boolean }) => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  console.log(`Is it broke: ${car.broken ? 'Yep': 'NO'}`);
}

printVehicle(oldCivic);

// Interfaces

interface Vehicle {
  name: string,
  year: number,
  broken: boolean
}

const otherPrintVehicle = (car: Vehicle): void => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  console.log(`Is it broke: ${car.broken ? 'Yep': 'NO'}`);
}

otherPrintVehicle(oldCivic);
