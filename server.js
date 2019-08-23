const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI || "mongodb://localhost/zoo"

global.db = mongoose.createConnection(uri, { useNewUrlParser: true });

const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})