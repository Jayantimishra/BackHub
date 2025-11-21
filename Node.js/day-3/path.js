const path = require('path');


console.log('File Name:',__filename);
console.log('Directory Name:',__dirname);

//*1. join() method

const filepath = path.join("folder1","folder2","folder3","file.txt");
console.log(filepath)


const parsedDataPath = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const baseName = path.basename(filepath);
const dirName = path.dirname(filepath);
const extName = path.extname(filepath);

console.log({
    parsedDataPath,
    resolvedPath,
    baseName,
    dirName,
    extName
})