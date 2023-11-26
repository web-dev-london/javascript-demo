const circle = {
  radius: 45,
  draw() {
    return `Hello Murod`;
  },
};

const another = {};

for (let key in circle) {
  another[key] = circle[key];
}

// const another = Object.assign({}, circle);

// const another = { ...circle };

console.log(another);
