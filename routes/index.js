const path = require("path")
const router = require("express").Router();
const animalController = require("../controllers/animalController")

router.route("/animals")
    .get(animalController.getAnimal)
    .post(animalController.createAnimal)

router.route("/animals/:id")
    .delete(animalController.deleteAnimal)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router