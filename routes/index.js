const path = require("path")
const router = require("express").Router();
const animalController = require("../controllers/animalController")

router.route("/animals")
    .get(animalController.getAnimal)

router.route("/")
    .post(animalController.createAnimal)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router