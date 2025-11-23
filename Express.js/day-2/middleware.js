import express from 'express';

const app = express();
const PORT = 3000;

// *1. global middleware
function SayHiMiddleware(req, res, next) {
    console.log("Hi from Middleware");
    next();
}
// app.use(SayHiMiddleware);

// *2. route-specific middleware

app.get("/users", SayHiMiddleware, (req, res) =>{
    res.send("Welcome to our Server")
})


// *3. multiple middleware
function FirstMiddleware(req, res, next) {
    console.log("First Middleware Executed");
    next();
}
function SecondMiddleware(req, res, next) {
    console.log("Second Middleware Executed");
    next();
}
app.get("/products", FirstMiddleware, SecondMiddleware, (req, res) =>{
    res.send("Welcome to our Products Page")
}
)

app.get("/", (req, res)=>{
    res.send("Welcome to our Server")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
