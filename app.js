const express = require('express');
const app = express();
const homepage = require('index.html');

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log("Whatup");
});


app.get('/', (req, res) =>{
    res.send(homepage);
});
