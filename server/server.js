const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//------------------------ List Voucher --------------------------
app.get("/", (req, res) => {
    res.send("Hello World");
});


//----------------------------- Port -----------------------------
app.listen(3001, () => {
    console.log("App running on localhost:3001");
})