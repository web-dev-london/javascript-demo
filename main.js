const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');

function Address(street, city, postCode) {
  this.street = street;
  this.city = city;
  this.postCode = postCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.postCode === address2.postCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
