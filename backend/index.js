const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').objectId;
var cors = require('cors');
const { json } = require('body-parser');
const e = require('express');
var dbname = "techno"

var client = new MongoClient('mongodb+srv://aman:1234@technocrats-fvoxq.mongodb.net/techno?retryWrites=true&w=majority', { useNewUrlParser: true });

var connection;
client.connect((err, con) => {
    if (!err) {
        connection = con;
        console.log("Database Connected Successfully");
    } else {
        console.log("Databae Could Not Connect Successfully");
    }
})

const app = express();
app.use(cors());

app.post('/sign-up', bodyParser.json(), (req, res) => {
    console.log("in sign up");
    console.log(req.body);
    var collection = connection.db('techno').collection('users');
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


app.post('/login', bodyParser.json(), (req, res) => {
    
    var collection = connection.db('techno').collection('users');
    collection.find(req.body).toArray((err, docs) => {
        console.log(docs);
        if (!err && docs.length > 0) {
            res.send({ status: "ok", data: docs });
        } else {
            res.send({ status: "failed", data: err });
        }
    })
})

app.listen(3000, () => { console.log("server is listining on port 3000") });