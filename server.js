const express = require("express");
const app = express();
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI || "mongodb://localhost/zoo"
const cors = require("cors")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

global.db = mongoose.createConnection(uri, { useNewUrlParser: true });

const routes = require("./routes")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("client/public"));
}

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next()
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
})