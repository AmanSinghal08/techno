const express = require('express');
const bodyParser = require('body-parser');


const app = express();
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