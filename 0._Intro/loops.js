// car batteries

// don't use for loops because...
// overly verbose
// error prone (index out of bounds)
// is not functional

const carBatteries = [0.2323, 0.5126, 0.12554, 0.98531];

console.log(carBatteries);

//task add a charge to each battery
const chargedCarBatteries = carBatteries.map(battery => battery+0.4);

console.log(chargedCarBatteries);

// place each car and its battery in a seperate index charger
// no need to return a new Array so forEach is allowed
// Task how do i get index.
carBatteries.forEach((element, index) => console.log(`You go in stand ${index + 1}`));

// filter out the batteries that have more than 50% charge
const drainedBatteries = carBatteries.filter(battery => battery < 0.5);
console.log(drainedBatteries);