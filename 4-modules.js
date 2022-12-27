const names = require('./2-names')
const sayHi = require('./3-utils')
const alternate = require('./6-alternativeModuleExport')
require('./7-MindBuster')

sayHi('susan')
sayHi(names.john)
console.log(alternate);