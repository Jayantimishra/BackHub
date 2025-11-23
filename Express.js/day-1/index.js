import express from 'express';
import Userdata from "./data/data.js"


const app = express();
const PORT = 3000;

app.use(express.json());

// * 1. Get Request (it is used to fetch data from the server)
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World from Express.js');
});

// Industry Standard 

app.get('/api/v1/users', (req, res) => {
    res.status(200);
    res.send( Userdata );
});

// query params
app.get('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = Userdata.find((u) => u.id === id);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }   
});


// *2. Post Request (it is used to send data to the server)
app.post('/api/v1/users', (req, res) => {
    const {name, displayname} = req.body;

    const newUser = {
        id: Userdata.length + 1,
        name,
        displayname
    };

    Userdata.push(newUser);

    
    res.status(201).send(
        {message: 'User created successfully',
             data: newUser}
    );
});


// *3. Put Request (it is used to update data on the server)
app.put('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, displayname} = req.body;
    const userIndex = Userdata.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        Userdata[userIndex] = { 
            id: id,
            name: name,
            displayname: displayname
        };
        res.status(200).send(
            {message: 'User updated successfully',
             data: Userdata[userIndex]}
        );
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

// *4. Patch Request (it is used to partially update data on the server)
app.patch('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, displayname} = req.body;
    const user = Userdata.find((user) => user.id === id);
    if (user) {
        if (name) user.name = name;
        if (displayname) user.displayname = displayname;
        res.status(200).send(
            {message: 'User partially updated successfully',
             data: user}
        );
    } else {
        res.status(404).send({ message: 'User not found' });
    }   

});

// *5. Delete Request (it is used to delete data from the server)
app.delete('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const userIndex = Userdata.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        const deletedUser = Userdata.splice(userIndex, 1);
        res.status(200).send(
            {message: 'User deleted successfully',
             data: deletedUser}
        );
    } else {
        res.status(404).send({ message: 'User not found' });
    }   

});


app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});