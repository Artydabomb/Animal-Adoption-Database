import axios from "axios";

export default {
    async searchAnimals(searchData) {
        return await axios.post("/api/rescuegroups/", searchData)
    }
}