const crypto = require('crypto');


// 1. randomBytes
const randomBytes = crypto.randomBytes(8);
console.log("Random Bytes:", randomBytes);
console.log("Random Bytes (hex):", randomBytes.toString('hex'));

// 2. createHash
const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
const digest = hash.digest('hex');
console.log("SHA-256 Hash:", digest);
