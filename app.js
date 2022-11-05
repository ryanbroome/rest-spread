function filterOutOdds() {
  return [...arguments].filter((num) => num % 2 === 0);
}
function findMin(...val) {
  return val.reduce((min, num) => (min < num ? min : num));
}
// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// function doubleAndReturnArgs(arr, ...arguments) {
//   const doubleTrouble = arguments.map((num) => {
//     return num * 2;
//   });
//   return [...arr, ...doubleTrouble];
// }
function doubleAndReturnArgs(arr, ...arguments) {
  return [
    ...arr,
    ...arguments.map((num) => {
      return num * 2;
    }),
  ];
}
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let random = Math.floor(Math.random() * items.length);
  let remove = items[random];
  return items.filter((el) => {
    return el !== remove;
  });
  //   return [...items].slice(items[(0, Math.floor(Math.random() * 10))]);
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  if (obj[key]) delete obj[key];
  return { ...obj };
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  return { ...obj, [key]: val };
}
