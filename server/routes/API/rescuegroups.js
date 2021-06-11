const router = require("express").Router();
const axios = require('axios');

router.route("/").post(function(req, res) {
    console.log("Search term in back-end API :" + req.body.searchField);
    console.log("Species to search in back-end API: " + req.body.speciesSearch)
    let zip;
    let species;
    let breed;
    if (req.body.zipCode) {
        zip = req.body.zipCode
    } else {
        zip = "95616"
    }
    if (req.body.speciesSearch) {
        species = req.body.speciesSearch
    } else {
        species = "dog"
    }
    if (!req.body.searchField) {
        if (species === "dog") {
            breed="dog"
        }
        if (species === "cat") {
            breed="tabby"
        }
    } else {
        breed=req.body.searchField
    }
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
                "fieldName" : "animalBreed",
                "operation" : "contains",
                "criteria" : breed
                },
                {
                "fieldName" : "animalSpecies",
                "operation" : "equals",
                "criteria" : species
                },
                {
                "fieldName" : "animalLocationDistance",
                "operation" : "radius",
                "criteria" : "30"
                },
                {
                "fieldName" : "animalLocation",
                "operation" : "equals",
                "criteria" : zip
                },
                {
                "fieldName" : "animalStatus",
                "operation" : "equals",
                "criteria" : "available"
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