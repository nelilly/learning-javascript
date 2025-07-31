/* https://dev.to/elihood/implementing-a-decorator-design-pattern-within-react-gno */
function myDecorator(func) {
  return function wrapper(...args) {
    // Do something before the function is called
    console.log('Before function call');
    const result = func(...args);
    // Do something after the function call
    console.log('After function call');
    return result;
  };
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

const decoratedSayHello = myDecorator(sayHello);

decoratedSayHello('World');
