function namesOnly(arr) {
  return arr.map((num) => {
    if (num.age >= 17) {
      return `${num.name} can go to The Matrix`;
    }
    if (num.age) {
      return `${num.name} is under age!`;
    }
  });
}
console.log(
  namesOnly([
    {
      name: 'Angelina Jolie',
      age: 80,
    },
    {
      name: 'Eric Jones',
      age: 2,
    },
    {
      name: 'Paris Hilton',
      age: 5,
    },
    {
      name: 'Kayne West',
      age: 16,
    },
    {
      name: 'Bob Ziroll',
      age: 100,
    },
  ]),
);
