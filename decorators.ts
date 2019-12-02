class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
}

// Decorators

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}
