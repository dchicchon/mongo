import axios from 'axios';

export default {
    getAnimal: function () {
        return axios.get('/api/animals')
    },

    createAnimal: animal => {
        return axios.post("/api/animals", animal)
    },

    deleteAnimal: id => {
        return axios.delete("/api/animals/" + id)
    },

    updateAnimal: animal => {
        return axios.put("/api/animals", animal)
    }
}