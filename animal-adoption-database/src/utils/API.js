/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import dotenv from "dotenv";

export default {
    sampleData: function() {
        console.log("API KEY: " + process.env.API_KEY);
        // return axios.post("https://api.rescuegroups.org/http/v2.json", {
        //     "apikey" : process.env.API_KEY,
        //     "objectType" : "animals",
        //     "objectAction" : "publicSearch",
        //     "search" : {
        //         "resultStart" : 0,
        //         "resultLimit" : 10,
        //         "resultSort" : "animalID",
        //         "resultOrder" : "asc",
        //         "calcFoundRows" : "Yes",
        //         "filters" : [
        //             {
        //             "fieldName" : "animalSpecies",
        //             "operation" : "equals",
        //             "criteria" : "dog"
        //             }
        //         ],
        //         "fields": ["animalID","animalOrgID","animalActivityLevel","animalAdoptedDate","animalAdoptionFee","animalAgeString","animalAltered","animalAvailableDate","animalBirthdate","animalBreed","animalCoatLength","animalColor","animalColorDetails","animalDescription","animalEnergyLevel","animalEyeColor","animalHouseTrained","animalLocation","animalLocationCitystate","animalMixedBreed","animalName","animalSpecialNeedsDescription","animalNeedsFoster","animalOKWithAdults","animalOKWithCats","animalOKWithDogs","animalOKWithKids","animalPattern","animalPrimaryBreed","animalSecondaryBreed","animalRescueID","animalSex","animalSpecies","animalThumbnailUrl","animalUrl","locationAddress","locationPostalCode","animalPictures","animalVideos","animalVideoUrls"]
        //     }
        // })
        return axios.get("/api/sampleData").then((data) => {
            console.log(data);
        })
    }
}