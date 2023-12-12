function countLetter(string) {
  return string.split('').reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;

    return count;
  }, {});
}

console.log(countLetter('ababscd'));
