function countLetter(string) {
  const count = {};

  string.split('').forEach((el) => {
    count[el] ? count[el]++ : (count[el] = 1);
  });
  return count;
}

console.log(countLetter('ababscd'));
