const router = require("express").Router();
const axios = require('axios');

router.route("/").post(function(req, res) {
    console.log("Search term in back-end API: " + req.body.searchField);
    return axios.post("https://api.rescuegroups.org/http/v2.json", {
        "apikey" : process.env.API_KEY,
        "objectType" : "animals",
        "objectAction" : "publicSearch",
        "search" : {
            "resultStart" : 0,
            "resultLimit" : 12,
            "resultSort" : "animalID",
            "resultOrder" : "asc",
            "calcFoundRows" : "Yes",
            "filters" : [
                {
                "fieldName" : "animalName",
                "operation" : "equals",
                "criteria" : req.body.searchField
                },
                {
                "fieldName" : "animalSpecies",
                "operation" : "equals",
                "criteria" : "dog"
                }
            ],
            "fields": ["animalID","animalOrgID","animalActivityLevel","animalAdoptedDate","animalAdoptionFee","animalAgeString","animalAltered","animalAvailableDate","animalBirthdate","animalBreed","animalCoatLength","animalColor","animalColorDetails","animalDescription","animalEnergyLevel","animalEyeColor","animalHouseTrained","animalLocation","animalLocationCitystate","animalMixedBreed","animalName","animalSpecialNeedsDescription","animalNeedsFoster","animalOKWithAdults","animalOKWithCats","animalOKWithDogs","animalOKWithKids","animalPattern","animalPrimaryBreed","animalSecondaryBreed","animalRescueID","animalSex","animalSpecies","animalThumbnailUrl","animalUrl","locationAddress","locationPostalCode","animalPictures","animalVideos","animalVideoUrls"]
        }
    }).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;