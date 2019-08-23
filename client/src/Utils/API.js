import axios from 'axios'

export default {
    getAnimal: function () {
        return axios.get('/animal')
    },

    createAnimal: animal => {
        return axios.post("/", animal)
    }
}