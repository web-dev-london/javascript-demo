// Factory function

function createCircle(radius) {
  return {
    radius,
    isVisible: true,
    draw() {
      return `Hello Draw`;
    },
    conor: [1, '2', 3],
  };
}

const circle1 = createCircle(2);
console.log(`Hello Circle`, circle1);

const circle2 = createCircle(4);
console.log(`Another Circel`, circle2);

// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    return `Hello Murod`;
  };
}

const circle5 = new Circle(5);
