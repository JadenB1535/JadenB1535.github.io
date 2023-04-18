const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://recipezD:1234@recipezcluster.zqmn4dm.mongodb.net/recipezDb");

// create a data schema
const vegSchema = new mongoose.Schema({
    vegetableName: String
});

const Vegetable = mongoose.model("VegSelection", vegSchema);

app.post("/sendVegSelection", async function (req, res) {
    const newVegetable = new Vegetable({
        vegetableName: req.body.vegetableName
    });
    newVegetable.save()
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
});

app.get('/getSelectionData', async (req, res) => {
    let veg = await Vegetable.find().exec();
    res.send(veg);
});

app.listen(3001, ["10.128.122.74", "localhost"], function () {
    console.log("Server is running on port 3001")
});