const randomColor = require('randomcolor'); // import the script
const chalk = require('chalk'); // import chalk

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
}); // a hex code for an attractive col

console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)(`#####       ${color}       #####`));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
console.log(chalk.hex(color)('###############################'));
