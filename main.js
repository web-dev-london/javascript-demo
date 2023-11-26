const address = createAddress('a', 'b', 'c');

function createAddress(street, city, postCode) {
  return {
    street,
    city,
    postCode,
  };
}
console.log(createAddress(address));

function CreateAddress(street, city, postCode) {
  this.street = street;
  this.city = city;
  this.postCode = postCode;
}

const address2 = new CreateAddress(
  'John',
  'Mary',
  'Harry',
);
console.log(address2);
