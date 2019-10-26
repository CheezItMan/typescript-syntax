// Object defined with type annotations
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(newAge: number): void {
    this.age = newAge;
  },
}

// Destructuring in typescript
const { age }: { age: number} = profile;

const { coords: {lat, lng } }: {coords: {lat: number, lng: number }} = profile;

console.log(lat);