function getGrade(...numbers) {
  const average =
    numbers.reduce((a, b) => a + b) / numbers.length;

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

console.log(getGrade(30, 40, 50));
