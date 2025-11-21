const EventEmitter = require('events');

const emitter = new EventEmitter();


//* on(eventName, listener)  --- create

emitter.on("GREET", ()=>{
    console.log("Hello World!")
} );

//* emit(eventName, [args]) --- exeute

emitter.emit("GREET");


emitter.on("GREETake", (username)=>{
    console.log(`Hello ${username}!`)
} );

emitter.emit("GREETake", "John");