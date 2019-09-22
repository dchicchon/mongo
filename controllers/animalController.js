const Animal = require("../models/Animal")

module.exports = {
    getAnimal: (req, res) => {
        Animal.find()
            .then(dbAnimal => {
                console.log(dbAnimal)
                res.json(dbAnimal)
            })

    },

    createAnimal: (req, res) => {
        Animal.create(req.body)
            .then(dbAnimal => {
                console.log(dbAnimal)
                res.json(dbAnimal)
            })
    },

    updateAnimal: (req, res) => {
        Animal.findByIdAndUpdate(req.body.id,
            {
                name: req.body.name,
                species: req.body.species
            })
            .then(dbAnimal =>   {
                res.json(dbAnimal)
                console.log('Successfully Edited Animal')
            })
    },

    deleteAnimal: (req, res) => {
        Animal.findByIdAndDelete(
            req.params.id)
            .then(dbAnimal => {
                console.log("Animal Deleted");
                res.json("Animal Deleted")
            })
    }
}