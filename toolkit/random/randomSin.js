/* eslint-disable no-unused-expressions */
// Randoms
const users = [
  {
    id: 11, name: 'Adam', age: 23, group: 'editor',
  },
  {
    id: 85, name: 'Chris', age: 23, group: 'subscriber',
  },
  {
    id: 85, name: 'Shannon', age: 64, group: 'subscriber',
  },
  {
    id: 47, name: 'John', age: 28, group: 'admin',
  },
  {
    id: 85, name: 'William', age: 34, group: 'editor',
  },
  {
    id: 85, name: 'Stacy', age: 42, group: 'subscriber',
  },
  {
    id: 97, name: 'Oliver', age: 28, group: 'admin',
  },
  {
    id: 85, name: 'Pat', age: 19, group: 'subscriber',
  },
  {
    id: 85, name: 'Billy', age: 34, group: 'subscriber',
  },
];

/* Time */
const now = new Date();
const today = `${now.getFullYear()}-${(`0${now.getMonth() + 1}`).slice(-2)}-${(`0${now.getDate()}`).slice(-2)}`;

// Return the sine of a number
const sin = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

sin(1); // will always return 0.7098480789645691

// Random number generator
const randomNumber = (seed, length) => Math.ceil(sin(seed) * length);

randomNumber(1, 6); // will always return 5
randomNumber(Date.now(), 6); // will always return the same number 1-6 based on the same timestamp
randomNumber(Math.random(), 6); // will return a random number between 1-6

// Return the same number based on the same day
randomNumber(now.getDate(), 6);

// Return a random user in the users array
users[randomNumber(Date.now(), users.length) - 1];

// Return today's random user
users[randomNumber(today.getDate(), users.length) - 1];

