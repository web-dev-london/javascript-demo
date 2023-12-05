// showStars(5);

// function showStars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for (let y = 0; y < i; y++) pattern += '*';
//     console.log(`${i} ${pattern}`);
//   }
// }

// Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(array) {
  return array.map(
    ({ name, age }) => `<h1>${name}</h1> <h2>${age}</h2>`,
  );
}

console.log(
  readyToPutInTheDOM([
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
