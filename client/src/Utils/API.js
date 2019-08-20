import axios from 'axios'

export default {
    getAnimal: function () {
        return axios.get('/animals')
    },

    createAnimal: animal => {
        return axios.post("/", animal)
    }
}