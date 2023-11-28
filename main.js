function capitalizeNames(arr) {
  // your code here
  return arr.map(
    (item) =>
      item.charAt(0).toUpperCase() +
      item.substr(1).toLowerCase(),
  );
}

console.log(
  capitalizeNames([
    'john',
    'JACOB',
    'jinGleHeimer',
    'schmidt',
  ]),
); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
