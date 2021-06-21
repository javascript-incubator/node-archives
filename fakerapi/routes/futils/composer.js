module.exports = (...fns) => x => fns.reduce((v, fn) => fn(v), x);
//Orignal Compose Right
