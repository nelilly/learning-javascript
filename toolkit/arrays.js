/* eslint-disable no-unused-vars */
// Arrays
const users = [
  {
    id: 11, name: 'Adam', age: 23, group: 'editor',
  },
  {
    id: 12, name: 'Chris', age: 23, group: 'subscriber',
  },
  {
    id: 13, name: 'Shannon', age: 64, group: 'subscriber',
  },
  {
    id: 47, name: 'John', age: 28, group: 'admin',
  },
  {
    id: 14, name: 'William', age: 34, group: 'editor',
  },
  {
    id: 15, name: 'Stacy', age: 28, group: 'subscriber',
  },
  {
    id: 97, name: 'Oliver', age: 28, group: 'admin',
  },
  {
    id: 16, name: 'Pat', age: 19, group: 'subscriber',
  },
  {
    id: 85, name: 'Billy', age: 34, group: 'subscriber',
  },
];

const people = [
  { name: 'nathan', id: 'a1' },
  { name: 'nathan2', id: 'a12' },
  { name: 'nathan3', id: 'a13' },
];

const tenant = {
  read: [
    'owners',
    'ops',
    'users',
    'collabs',
  ],
  write: [
    'owners',
    'ops',
  ],
  delete: [
    'owners',
  ],
  audit: [
    'owners',
  ],
  provision: [
    'owners',
  ],
};

const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France',
};

const crops = [
  {
    id: 1,
    grade: 'Grade A',
    category: 'Grains',
    subCategory: 'Maize',
    sales: 1200,
  },
  {
    id: 2,
    grade: 'Grade B',
    category: 'Grains',
    subCategory: 'Wheat',
    sales: 130,
  },
  {
    id: 3,
    grade: 'Grade B',
    category: 'Grains',
    subCategory: 'Banana',
    sales: 1200,
  },
  {
    id: 4,
    grade: 'Grade C',
    category: 'Grains',
    subCategory: 'Apple',
    sales: 1400,
  },
  {
    id: 5,
    grade: 'Grade A',
    category: 'Grains',
    subCategory: 'Maize',
    sales: 1200,
  },
  {
    id: 6,
    grade: 'Grade B',
    category: 'Grains',
    subCategory: 'Wheat',
    sales: 130,
  },
  {
    id: 7,
    grade: 'Grade B',
    category: 'Grains',
    subCategory: 'Banana',
    sales: 1200,
  },
  {
    id: 8,
    grade: 'Grade C',
    category: 'Grains',
    subCategory: 'Apple',
    sales: 1400,
  },
  {
    id: 7,
    grade: 'Grade B',
    category: 'Grains',
    subCategory: 'Banana',
    sales: 1200,
  },
  {
    id: 8,
    grade: 'Grade C',
    category: 'Grains',
    subCategory: 'Apple',
    sales: 1400,
  },
];

//
const countByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});

// get last user
const last = users.at(-1);

// countBy HOC
const countBy = (data, key) => data.reduce((acc, it) => {
  acc[it[key]] = acc[it[key]] + 1 || 1;
  return acc;
}, {});

// create countByGroup with countBy HOC
const countByGroup = countBy(users, 'group');

// Convert array to hash lookup: uTable[id]
const userTableById = users.reduce((acc, it) => ({ ...acc, [it.id]: it }), {});

// Convert array to hash lookup: uTable[name]
const userTableByName = users.reduce((acc, it) => ({ ...acc, [it.name]: it }), {});

// General function to create lookup table
const createLookup = (table, key) => table.reduce((acc, it) => ({ ...acc, [it[key]]: it }), {});

// create userTableById lookup table with createLookup HOC
const userTableByID = createLookup(users, 'id');

// Return array of groups
const listOfUserGroups = [...new Set(users.map((it) => it.group))];

// Object key-value map reversal
const countries = Object.keys(cities).reduce((acc, k) => {
  const country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});

// create User Groups
const groups = Object.keys(users).reduce((acc, k) => {
  const { group } = users[k];
  acc[group] = acc[group] || [];
  acc[group].push(users[k].name);
  return acc;
}, {});

// Return a queryString from params
const params = { lat: 45, lng: 6, alt: 1000 };
const queryString = Object.entries(params).map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join('&');

/* Rewrite .reduce to return as .map */
const initialNames = [];
const names = people.reduce(
  (accumulator, currentValue) => {
    accumulator.push(currentValue.name);
    return accumulator;
  },
  initialNames
);

/* Rewrite .reduce to return as .filter */

/* Rewrite .reduce to return as .reject */

// diffs
const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

difference([2, 1], [3, 2]);
// => [1]

// Sorts
const statusColor = {
  RED: 'RED',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  GREY: 'GREY',
};

const {
  RED, YELLOW, GREEN, GREY,
} = statusColor;

const statusPriority = {
  [RED]: 0,
  [YELLOW]: 1,
  [GREEN]: 2,
  [GREY]: 3,
};

// standard sort
[].sort((a, b) => statusPriority[a] - statusPriority[b]);

// sorts
const sortOrder = ['internet', 'internetvoice', 'voice', 'video', 'home', 'storeFront'];
// const formattedServices = services.sort((a, b) => sortOrder.indexOf(a.type) - sortOrder.indexOf(b.type));

const explicitOrder = ['age', 'name'];

const sortedObjects = users;

// Sort by Order
const months = [{ name: 'March', order: 3 }, { name: 'Feb', order: 2 }, { name: 'Jan', order: 1 }, { name: 'Dec', order: 12 }]
  .sort((a, b) => a.order - b.order);

//
const actionsByRole = Object.entries(tenant).reduce(
  (acc, currentValue) => {
    const roles = [...new Set(currentValue[1])];
    roles.forEach((role) => {
      acc[role] = acc[role] || [];
      acc[role].push(`tenant.${currentValue[0]}`);
    });
    return acc;
  },
  {}
);

// pivot Table
// create pivotOn function
const pivotOn = (data, key) => data.reduce((prev, cur) => {
  const existing = prev.find((x) => x[key] === cur[key]);

  if (existing) { existing.values.push(cur); } else {
    prev.push({
      [key]: cur[key],
      values: [cur],
    });
  }

  return prev;
}, []);

const pivotByGrade = pivotOn(crops, 'grade');
