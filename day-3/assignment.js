//* create a program using Node-js EVENTEMITTER that:
// listens for multiple types of user events (eg. login, logout, purchase, and profile update)
// track how many times each event is emitted.
// logs a summary of all events occurrence when a special "SUMMARY" event is emitted.


const EventEmitter = require ("events")
const fs  = require ("fs")

const userEmitter = new EventEmitter()
const eventCount = {
    LOGIN: 0,
    LOGOUT: 0,
    PURCHASE: 0,
    PROFILE_UPDATE: 0
}

const logFile = "eventlog.json";
if(fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile, "utf-8");
    Object.assign(eventCount, JSON.parse(data));
}

function saveEventCount() {
    fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2));
}


userEmitter.on("LOGIN", (username)=> {
    eventCount.LOGIN ++;
    console.log(`${username} Logged In Successfilly`);
    saveEventCount();
})

userEmitter.on("LOGOUT", (username)=> {
    eventCount.LOGOUT ++;
    console.log(`${username} Logout Successfilly`)
    saveEventCount();
})

userEmitter.on("PURCHASE", (username, item)=> {
    eventCount.PURCHASE ++;
    console.log(`${username} purchase ${item} successfully`)
    saveEventCount();
})

userEmitter.on("PROFILE_UPDATE", (username, field)=> {
    eventCount.PROFILE_UPDATE ++;
    console.log(`${username} updated their profile field: ${field}`)
    saveEventCount();
})



userEmitter.on("SUMMARY", ()=> {
    console.log("\n Event Summary:")
    console.log(`Login Events: ${eventCount.LOGIN}`)
    console.log(`Logout Events: ${eventCount.LOGOUT}`)
    console.log(`Purchase Events: ${eventCount.PURCHASE}`)
    console.log(`Profile Update Events: ${eventCount.PROFILE_UPDATE}`)
})

userEmitter.emit("LOGIN", "Jayanti")
userEmitter.emit("LOGOUT", "Jayanti")
userEmitter.emit("PURCHASE", "Jayanti", "Book")
userEmitter.emit("PROFILE_UPDATE", "Jayanti", "Phone-no")
userEmitter.emit("SUMMARY")

