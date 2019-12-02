// Decorator
const testDecorator = function (target: any, key: string) {
  console.log(target);
  console.log(key);
  console.log(target[key]);
}

const parameterDecorator = function (target: any, key: string, index: number) {
  console.log(key, index);
}

const classDecorator = function (constructor: typeof Boat) {
  console.log(constructor)
}

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Ooops Boat was sunk in ocean')
  pilot(@parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
      generateWake ? console.log('generating a wake') : '';
    } else {
      console.log('nothin');
    }
  }
}




// Decorator Factory with hoisting

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method('fast');
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}


// const b = new Boat();
// b.pilot('fast', true);
