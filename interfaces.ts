// Really important for TS
// They're great alongside classes

//  Code to define a new type

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}
    Year: ${this.year}
    Is is broke: ${this.broken ? 'Yep': 'No'}`
  }
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
  name: string; // You can also use commas in place of ;
  year: number;
  broken: boolean;
  summary(): string;
}

const otherPrintVehicle = (car: Vehicle): void => {
  console.log(car.summary());
}

otherPrintVehicle(oldCivic);

interface Reportable {
  summary(): string,
}

const printReportable =  (item: Reportable):void => {
  console.log(item.summary());
}