const express = require('express');
const app = express();

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log("Whatup");
});


app.get('/', (req, res) =>{
    res.send("If you are My Love or My Queen or My Princess, hello. Port is " + port + ".");
});
