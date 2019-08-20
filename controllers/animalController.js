const Animal = require("../models/Animal")

module.exports = {
    getAnimal: (req, res) => {
        console.log("Made it to getanimal")
        // console.log(req.body)
        Animal.find()
            .then(dbAnimal => {
                console.log(dbAnimal)
                res.json(dbAnimal)
            })

    },

    createAnimal: (req, res) => {
        console.log(req.body)
        console.log('made it to createanimal')
        Animal.create(req.body)
            .then(dbAnimal => {
                console.log(dbAnimal)
                res.json(dbAnimal)
            })
    }
}