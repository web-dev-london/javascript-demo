// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw');
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(4);
console.log(circle2);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('drew');
  };
}
const circle = new Circle(3);
