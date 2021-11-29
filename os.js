const os = require("os")

console.log("Os version", os.version());
console.log("Free Memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("Cpu", os.cpus());