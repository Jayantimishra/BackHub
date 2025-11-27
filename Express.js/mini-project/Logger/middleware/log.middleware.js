import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// *Handle __dirname in ES module*
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware to log all requests

const logMiddleware = (req, res, next) => {
    const log = `[${new Date().toISOString()} ${req.method} ${req.originalUrl}\n`;
    const logFile = path.join(__dirname, "../logs/requests.log");
    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error("Failed to write log:", err);
        }   
    });
    next();
}


export default logMiddleware;
