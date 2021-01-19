const randomColor = require('randomcolor'); // import the script
const chalk = require('chalk'); // import chalk

const color = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
}); // a hex code for an attractive color

console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)('#####       ' + color + '       #####'));

console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
