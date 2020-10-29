const express = require('express');
const app = express();

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log("Whatup");
});


app.get('/', (req, res) =>{
    res.send("Welcome to the home page");
    res.send("Port is" + port);
});
