// filters
const state = {
  filters: {
    status: 'active',
  },
  sort: {
    column: 'name',
    direction: 'asc',
  },
  search: {
    columns: ['name', 'description'],
    value: '8',
  },
};

const table = [
  {
    id: 1234,
    name: 'B Row 1',
    order: 1,
    status: true,
    type: 'web',
    browser: 'chrome',
  },
  {
    id: 1235,
    name: 'Z Row 2',
    order: 2,
    status: 'active',
    type: 'web',
    browser: 'firefox',
  },
  {
    id: 1236,
    name: 'Q Row 3',
    order: 3,
    status: 'active',
    type: 'web',
    browser: 'safari',
  },
  {
    id: 1237,
    name: 'X Row 4',
    order: 4,
    status: true,
    type: 'web',
    browser: 'chrome',
  },
  {
    id: 1238,
    name: 'Y Row 5',
    order: 5,
    status: 'inactive',
    type: 'web',
    browser: 'firefox',
  },
  {
    id: 1239,
    name: 'U Row 6',
    order: 6,
    status: 'inactive',
    type: 'web',
    browser: 'safari',
  },
  {
    id: 1240,
    name: 'B Row 7',
    order: 7,
    status: 'active',
    type: 'api',
    browser: 'chrome',
  },
  {
    id: 1241,
    name: 'A Row 8',
    order: 8,
    status: 'active',
    type: 'api',
    browser: 'firefox',
  },
  {
    id: 1242,
    name: 'Z Row 9',
    order: 9,
    status: 'active',
    type: 'api',
    browser: 'safari',
  },
  {
    id: 1243,
    name: 'Q Row 10',
    order: 10,
    status: 'inactive',
    type: 'api',
    browser: 'chrome',
  },
  {
    id: 1244,
    name: 'W Row 11',
    order: 11,
    status: 'inactive',
    type: 'api',
    browser: 'firefox',
  },
  {
    id: 1245,
    name: 'S Row 12',
    order: 12,
    status: 'inactive',
    type: 'api',
    browser: 'safari',
  },
];

const selectFilter = (row, filters) => Object.keys(filters).every((column) => {
  if (filters[column] === '') { return true; }
  return row[column] === filters[column];
});

const searchFilter = (row, search) => search.columns.some((column) => {
  console.log(column, row[column]);
  if (search[column] === '') { return true; }
  return row[column]?.includes(search.value);
});

const sortText = (a, b, sort) => {
  if (sort.direction === '') { return 0; }
  if (sort.direction === 'desc') {
    if (a[sort.column] > b[sort.column]) { return -1; }
    if (a[sort.column] < b[sort.column]) { return 1; }
  }
  if (a[sort.column] < b[sort.column]) { return -1; }
  if (a[sort.column] > b[sort.column]) { return 1; }
  return 0;
};

const filteredTable = table
  .filter((row) => selectFilter(row, state.filters))
  .filter((row) => searchFilter(row, state.search))
  .sort((a, b) => sortText(a, b, state.sort));

// eslint-disable-next-line no-console
console.log(filteredTable.length, filteredTable);
