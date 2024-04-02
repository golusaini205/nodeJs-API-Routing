const express = require("express");
const app = express();

app.get("/", (requist, response) => {
    response.send("Home Page",);
});

app.get("/about", (requist, response) => {
    response.send("About Page");
});



module.exports = app;