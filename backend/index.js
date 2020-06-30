const express = require('express');
const bodyParser = require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var objectId=require('mongodb').objectId;
var cors=require('cors');
var dbname="mydatabase"

var client=new MongoClient('mongodb+srv://aman:1234@technocrats-fvoxq.mongodb.net/techno?retryWrites=true&w=majority',{useNewUrlParser:true});

var connection;
client.connect((err, con) => {
    if (!err) {
        connection = con;
        console.log("Database Connected Successfully");
    }
    else {
        console.log("Databae Could Not Connect Successfully");
    }
})

const app = express();
app.use(cors());

app.post('sign-up', bodyParser.json(), (req, res) => {
    console.log(req.body);
    var collection = collection.db('technocrats').collection('user');
    collection.find({ email: req.body.email }).toArray((err, docs) => {
        if (!err && docs.length > 0) {
            res.send({ status: "failed", data: "email already exits" })
        } else {
            collection.insert(req.body, (err, result) => {
                if (!err) {
                    res.send({ status: "ok", data: "signup success...." });
                } else {
                    res.send({ status: "failed", data: err });
                }
            })
        }
    })
})







app.listen(3000, () => { console.log("server is listining on port 3000") });