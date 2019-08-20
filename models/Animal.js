const Schema = require("mongoose").Schema;
const Animal = Schema({
    name: String,
    type: String
})

module.exports = db.model('Animal', Animal)