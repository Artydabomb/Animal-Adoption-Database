import axios from "axios";

export default {
    async searchAnimals(searchData) {
        return await axios.post("/api/rescuegroups/", searchData)
    },

    postAnimal(animal) {
        return axios.put("/api/user/saveAnimal", animal)
    },

    deleteAnimal(animal) {
        return axios.put("/api/user/unsaveAnimal", animal)
    }
}