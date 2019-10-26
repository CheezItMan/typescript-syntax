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

