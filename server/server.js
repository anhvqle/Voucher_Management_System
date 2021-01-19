const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "helloVN84",
    database: "flc",
})

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("MySQL Database Connected successfully");
    }
})

//------------------------ List Voucher --------------------------
app.get("/", (req, res) => {
    db.query('SELECT * FROM voucher', function(error, voucher) {
        if(error){ 
            res.send(error);
        }
        if (voucher.length > 0) {
            res.json(voucher);
        }        
    });
});

//------------------------ Create Voucher --------------------------
app.post("/create", (req, res) => {
    let vouchername = req.body.vouchername;
    let amount = req.body.amount;
    let type = req.body.type;
    console.log(vouchername, amount, type);
    db.query("INSERT INTO voucher (`name`, `type`, `amount`, `date_created`) VALUES (?,?,?,CURRENT_DATE)",[vouchername, type, amount], function(error, results) {
        if(error) 
            throw error;
        else {
            res.json({ status : 200, message: "Voucher Created", voucher : {
                vouchername : vouchername,
                type : type,
                amount : amount,
            }});
        }
    });
});


//----------------------------- Port -----------------------------
app.listen(3001, () => {
    console.log("App running on localhost:3001");
})