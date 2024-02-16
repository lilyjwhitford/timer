const args = process.argv.slice(2); // command line args starting from index 2
const timeInSeconds = []; 

for (let i = 0; i < args.length; i++) { // iterate through command line args with for loop
  const time = Number(args[i]); // convert args to number using Number() function
  if (!isNaN(time) && time >= 0) { // make sure number is a number and more than 0 for edge cases
    timeInSeconds.push(time); // push to timeInSeconds and proceed if truthy
  }
};

const timer = function(timeInSeconds) {
  for (let i = 0; i < timeInSeconds.length; i++) { // iterate over each index in timeInSeconds with for loop
    const time = timeInSeconds[i]; // assign index of timeInSeconds to new variable to convert to seconds
    setTimeout(() => {
      process.stdout.write('\x07'); // make ding sound
    }, time * 1000); // convert ms to s
  }
};

timer(timeInSeconds);