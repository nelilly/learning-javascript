/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

// https://www.patterns.dev/posts/proxy-pattern
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.warn(
        'Hmm.. this property doesn\'t seem to exist on the target object'
      );
    } else {
      console.warn(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.warn('Sorry, you can only pass numeric values for age.');
    } else if (prop === 'name' && value.length < 2) {
      console.warn('You need to provide a valid name.');
    } else {
      console.warn(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  },
});

personProxy.name;
personProxy.age = 43;
personProxy.name = 'Jane Doe';
