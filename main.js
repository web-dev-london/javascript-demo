const address = {
  street: 'a',
  city: 1,
  zipCode: true,
};

function showAddress(address) {
  return { ...address };
}

showAddress(address);
