class Vehicle {
  color: string = 'red';

  constructor(color: string) {
    this.color = color;
  }

  protected hong(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(public color: string, public sound: string) {
    super(color);
  }

  public drive(): void {
    console.log('vroom vroom');
  }
}

const car = new Car('Blue', 'Umm umm');

console.log(car.color);
car.drive();
console.log(car.sound);