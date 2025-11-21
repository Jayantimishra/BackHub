const http = require('http');
const fs = require('fs');

const PORT = 3050;

const myServer = http.createServer((req, res) => {
const log = `${Date.now()}: New Request Received\n`;

fs.appendFile("log.txt", log, (err) => {
    if (err) {
        console.error("Error writing to log file", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
    }
    res.end("Log updated successfully");


});

})

myServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});