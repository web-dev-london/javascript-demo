// Factory Function
const address = showAddress('a', 'b', 'c');

function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

console.log(showAddress(address));

// Constructor Function

function CreateAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const another = new CreateAddress('1', '2', '3');
console.log(another);
