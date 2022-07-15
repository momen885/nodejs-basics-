const os = require("os");

// Info about current user

const user = os.userInfo();

console.log(user);

// Method returns system uptime in seconds/minutes
console.log(
  `system uptime is ${os.uptime()} seconds ${os.uptime() / 60} minuts`
);

const currentOs = {
  name: os.type(),
  hostName: os.hostname(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  CPU: os.arch(),
  Kernal: os.version(),
};
console.log(currentOs);
