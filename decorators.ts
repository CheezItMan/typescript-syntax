class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Ooops Boat was sunk in ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}


// Decorator Factory

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}


const b = new Boat();
b.pilot();
