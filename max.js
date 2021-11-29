console.log(process.argv)
const [, ,nums] = process.argv;
// node max.js '[1,20,8,4]'
const arr = JSON.parse(nums);
console.log(Math.max(...arr))
