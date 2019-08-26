import axios from 'axios';

export default {
    getAnimal: function () {
        console.log("HI")
        return axios.get('/api/animals')
    },

    createAnimal: animal => {
        return axios.post("/api/animals", animal)
    }
}