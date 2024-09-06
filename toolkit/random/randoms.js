/* eslint-disable no-unused-expressions */
// Randoms

/* Time */
const now = new Date();
const today = `${now.getFullYear()}-${(`0${now.getMonth() + 1}`).slice(-2)}-${(`0${now.getDate()}`).slice(-2)}`;

/* Alternate Random */
// True Random
function rand(n, timeSeed = null) {
  const time = timeSeed ? new Date(timeSeed) : new Date();
  let seed = time.getTime() % 0xffffffff;
  seed = (0x015a4e35 * seed) % 0x7fffffff;
  // eslint-disable-next-line no-bitwise
  return (seed >> 16) % n;
}

// Random
const random = rand(8, now);

// Daily Random
const dailyRandom = rand(8, today);

// Daily Random
const pointRandom = rand(8, 'December 17, 1995 03:24:00');

console.log(random, dailyRandom, pointRandom);
