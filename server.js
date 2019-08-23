const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI || "mongodb://localhost/zoo"
const cors = require("cors")

global.db = mongoose.createConnection(uri, { useNewUrlParser: true });

const routes = require("./routes")

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next()
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})