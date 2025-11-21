const os = require('os');


console.log("os platform:", os.platform());
console.log("User Info:", os.userInfo());
console.log("System Uptime (seconds):", os.uptime());
console.log("Total Memory (bytes):", os.totalmem());
console.log("Free Memory (bytes):", os.freemem());
console.log("CPU Info:", os.cpus().length);
console.log("Network Interfaces:", os.networkInterfaces());
console.log("free memory in GB:", os.freemem(), "bytes");
console.log("total memory in GB:", os.totalmem(), "bytes");
console.log("home dir:", os.homedir());
console.log("hostname:", os.hostname());
console.log("os type:", os.type());
console.log("os release:", os.release());
console.log("os arch:", os.arch());
console.log("temp dir:", os.tmpdir());
console.log("endianness:", os.endianness());
console.log("load average:", os.loadavg());



