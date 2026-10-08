function clone(obj) {
  let newObject = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (obj[key] instanceof Date) {
        newObject[key] = new Date(obj[key]);
      } else if (obj[key] instanceof Set) {
        newObject[key] = new Set([...obj[key]]);
      } else if (obj[key] instanceof Map) {
        newObject[key] = new Map([...obj[key]]);
      } else if (obj[key] instanceof RegExp) {
        newObject[key] = new RegExp(obj[key]);
      } else if (obj[key] instanceof Array) {
        newObject[key] = [...obj[key]];
      } else if (obj[key] instanceof Object) {
        newObject[key] = clone(obj[key]);
      } else if (obj[key] instanceof Symbol) {
        newObject[key] = Symbol(obj[key].description);
      }
    } else {
      newObject[key] = obj[key];
    }
  });

  return newObject;
}

const original = {
  name: "Ada",
  born: new Date("1815-12-10"),
  skills: new Set(["math", "code"]),
  scores: new Map([["a", 1]]),
  pattern: /ab+c/gi,
  [Symbol("id")]: 7,
  get upper() {
    return this.name.toUpperCase();
  },
};

console.log(clone(original));
