// Arrays
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 12, name: 'Chris', age: 23, group: 'subscriber' },
  { id: 13, name: 'Shannon', age: 64, group: 'subscriber' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 14, name: 'William', age: 34, group: 'editor' },
  { id: 15, name: 'Stacy', age: 28, group: 'subscriber' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' },
  { id: 16, name: 'Pat', age: 19, group: 'subscriber' },
  { id: 85, name: 'Billy', age: 34, group: 'subscriber' },
];

// 
const countByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});

// 
const countByGroup = users.reduce((acc, it) => {
  acc[it.group] = acc[it.group] + 1 || 1;
  return acc;
}, {});

// Convert array to hash lookup: uTable[id]
const uTableById = users.reduce((acc, it) => (acc[it.id] = it, acc), {});
// Convert array to hash lookup: uTable[name]
const uTableByName = users.reduce((acc, it) => (acc[it.name] = it, acc), {});

// Return array of groups
const listOfUserGroups = [...new Set(users.map(it => it.group))];

// Object key-value map reversal
const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};

let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});

// User Groups
let groups = Object.keys(users).reduce((acc, k) => {
  let group = users[k]['group'];
  acc[group] = acc[group] || [];
  acc[group].push(users[k]['name']);
  return acc;
}, {});

// Return a queryString from params
const params = {lat: 45, lng: 6, alt: 1000};
const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&');
