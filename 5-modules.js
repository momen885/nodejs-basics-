const { firstName, lastName } = require("./1-names");
const names = require("./1-names");
const sayHi = require("./2-utils");
// const data = require("./3-alternative-flavor");
require("./4-mind-grenade");

sayHi(firstName, lastName);
sayHi(names.firstName, names.lastName);
