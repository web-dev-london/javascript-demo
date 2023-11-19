// Constructor Function

function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const another = new CreateAddress('1', '2', '3');
const another2 = new CreateAddress('1', '2', '3');
const another3 = another;

function areEqual(another, another2) {
  return (
    another.street === another2.street &&
    another.city === another2.city &&
    another.zipCode === another2.zipCode
  );
}

function areSame(another, another2) {
  return another === another2;
}

console.log(areSame(another, another2));
console.log(areEqual(another, another2));
console.log(areSame(another, another3));
