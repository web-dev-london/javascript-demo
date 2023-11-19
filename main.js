// String primitive

const message = ' Hello World! ';

// String Object
const another = new String('Hi');

console.log(message.length);
console.log(message[1]);
console.log(message.includes('World'));
console.log(message.includes('John'));
console.log(message.startsWith('Hello'));
console.log(message.startsWith('World'));
console.log(message.endsWith('!'));
console.log(message.indexOf('World!'));
console.log(message.replace('World', 'John'));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(' '));
