const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

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

//---------------------- List Voucher -------------------------
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

//---------------------- Create Voucher ------------------------
app.post("/create", (req, res) => {
    let vouchername = req.body.vouchername;
    let amount = req.body.amount;
    let type = req.body.type;
    db.query("INSERT INTO voucher (`name`, `type`, `amount`, `delivered`, `date_created`) VALUES (?,?,?,0,CURRENT_DATE)",[vouchername, type, amount], function(error, results) {
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

//------------------- Get Specific Voucher  ----------------------
app.get('/voucher/:id', (req, res) => {
    db.query('SELECT * FROM voucher WHERE id = ?',[req.params.id], function(error, voucher) {
        if(error){ 
            res.send(error);
        }
        if (voucher.length > 0) {
            res.json(voucher);
        }        
    });
})

//-------------------- Generate  Voucher -------------------------
app.post('/generate/:id', (req, res) => {
    let inputAmount = req.body.inputAmount;
    let givenAmount, givenDelivered;
    db.query('SELECT * FROM voucher WHERE id = ?',[req.params.id], function(error, voucher) {
        if(error){ 
            res.send(error);
        }
        if (voucher.length > 0) {
            givenAmount = voucher[0].amount;
            givenDelivered = voucher[0].delivered;
        }  
        if(parseInt(inputAmount) > parseInt(givenAmount)){
            return res.json({ status : 404, message: "Không thể phân phối nhiều voucher hơn số lượng có sẵn"});
        }

        db.query('UPDATE voucher SET `delivered` = ? WHERE `id` = ?',[parseInt(inputAmount) + parseInt(givenDelivered), req.params.id], function(error) {
            if(error){ 
                res.send(error);
            }
            else{
                db.query('UPDATE voucher SET `amount` = ? WHERE `id` = ?',[parseInt(givenAmount) - parseInt(inputAmount), req.params.id], function(error) {
                    if(error){ 
                        res.send(error);
                    }
                    else{
                        res.json({ status : 200, message: "Generate Voucher Succesfully" });      
                    }
                });   
            }      
        }); 
    });
})

//----------------------- Edit Voucher ---------------------------
app.post('/edit/:id', (req, res) => {
    let vouchername = req.body.vouchername;
    let amount = req.body.amount;
    let type = req.body.type;
    db.query('UPDATE voucher SET `name` = ?, `type` = ?, `amount` = ? WHERE `id` = ?',[vouchername, type, amount, req.params.id], function(error) {
        if(error){ 
            res.send(error);
        }
        else{
            res.json({ status : 200, message: "Generate Voucher Succesfully" });      
        }
    });   
})

//----------------------- Delete Voucher ---------------------------
app.post('/delete/:id', (req, res) => {
    db.query('DELETE FROM voucher WHERE `id` = ?',[req.params.id], function(error) {
        if(error){ 
            res.send(error);
        }
        else{
            res.json({ status : 200, message: "Delete Voucher Succesfully" });      
        }
    });   
})

//----------------------------- Port -----------------------------
app.listen(3001, () => {
    console.log("App running on localhost:3001");
})