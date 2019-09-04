const Schema = require("mongoose").Schema;

const Animal = Schema({
    name: String,
    species: String
})

module.exports = db.model('Animal', Animal)