const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const uri = "mongodb://localhost/zoo"

global.db = mongoose.createConnection(uri, { useNewUrlParser: true });

const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)
// mongoose.connect('mongodb://localhost/zoo', { useNewUrlParser: true });



app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})