const fs = require('fs');
const os = require('os');
console.log(os.cpus().length);

fs.writeFileSync("./hello.txt", "Hello from Node.js");
fs.appendFileSync("./hello.txt", "\nThis is appended text." );
fs.appendFileSync("./hello.txt",  new Date().toDateString() );

fs.appendFileSync("./log.txt", `File created and modified successfully on ${new Date().toDateString()}` );



fs.unlinkSync('log.txt');
console.log('File deleted');

const stats = fs.statSync('hello.txt');
console.log(stats);