const os = require("os"); // here we import the os module

// Displaying system information
console.log("🖥️  SYSTEM INFO");

console.log("Platform     :", os.platform()); // it will give us the platform of the OS
console.log("OS Type      :", os.type()); // it will give us the type of OS
console.log("Release      :", os.release()); // it will give us the release version of the OS
console.log("Architecture :", os.arch()); // it will give us the architecture of the OS
console.log("CPU Cores    :", os.cpus().length); // it will give us the number of CPU cores
console.log("Total Memory :", (os.totalmem() / 1024 ** 3).toFixed(2) + " GB"); // it will give us the total memory in GB
console.log("Free Memory  :", (os.freemem() / 1024 ** 3).toFixed(2) + " GB"); // it will give us the free memory in GB
console.log("Uptime       :", (os.uptime() / 60).toFixed(0) + " minutes"); // it will give us the uptime in minutes
console.log("User         :", os.userInfo().username); // it will give us the username of the current user
console.log("Home Dir     :", os.homedir()); // it will give us the home directory of the user
