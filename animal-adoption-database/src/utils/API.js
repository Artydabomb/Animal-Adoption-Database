/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import dotenv from "dotenv";

export default {
    searchAnimals(searchData) {
        // axios.post("/api/animals/", searchData)
        console.log("Got here " + searchData.searchField)
    }
}