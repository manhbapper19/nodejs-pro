const express = require('express');

const app = express();
const port = 8080;
app.get("/", (req, res) => {
    res.send ("Hello World!");
})
app.get("/hoidanit", (req, res) => {
    res.send ("I have a problem with my code!");
})
app.listen(port, () => {
    console.log(`My app is running on port : ${port}`);
})