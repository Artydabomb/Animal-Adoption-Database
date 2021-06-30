const router = require("express").Router();
const axios = require('axios');

// Example array of fields we can include to be returned
// ["animalID","animalOrgID","animalActivityLevel","animalAdoptedDate","animalAdoptionFee","animalAgeString","animalAltered","animalAvailableDate","animalBirthdate","animalBreed","animalCoatLength","animalColor","animalColorDetails","animalDescription","animalEnergyLevel","animalEyeColor","animalHouseTrained","animalLocation","animalLocationCitystate","animalMixedBreed","animalName","animalSpecialNeedsDescription","animalNeedsFoster","animalOKWithAdults","animalOKWithCats","animalOKWithDogs","animalOKWithKids","animalPattern","animalPrimaryBreed","animalSecondaryBreed","animalRescueID","animalSex","animalSpecies","animalThumbnailUrl","animalUrl","locationAddress","locationPostalCode","animalPictures","animalVideos","animalVideoUrls"]
// EACH ADDITIONAL FIELD INCREASES SEARCH TIME! Only include the ones we are actually using! 
router.route("/").post(function(req, res) {
    console.log("Search term in back-end API :" + req.body.searchField);
    console.log("Species to search in back-end API: " + req.body.species)
    console.log("PAGE: " + req.body.page)
    let radius;
    if (req.body.radius !== "Search Radius") {
        radius = req.body.radius
    } else {
        radius=40
    }
    let filters=[
        {
        "fieldName" : "animalBreed",
        "operation" : "contains",
        "criteria" : req.body.searchField || " "
        },
        {
        "fieldName" : "animalLocationDistance",
        "operation" : "radius",
        "criteria" : radius
        },
        {
        "fieldName" : "animalSpecies",
        "operation" : "equals",
        "criteria" : req.body.species || "dog"
        },
        {
        "fieldName" : "animalLocation",
        "operation" : "equals",
        "criteria" : req.body.zipCode || "95616"
        },
        {
        "fieldName" : "animalStatus",
        "operation" : "equals",
        "criteria" : "available"
        }
    ]
    if (req.body.activity !== "Activity level") {
        filters.push(
            {
                "fieldName": "animalActivityLevel",
                "operation": "equals",
                "criteria": req.body.activity
            }
        )
    }
    if (req.body.size !== "Size") {
        filters.push(
            {
                "fieldName": "animalGeneralSizePotential",
                "operation": "equals",
                "criteria": req.body.size
            }
        )
    }
    if (req.body.sex !== "Sex") {
        filters.push(
            {
                "fieldName": "animalSex",
                "operation": "equals",
                "criteria": req.body.sex
            }
        )
    }
    return axios.post("https://api.rescuegroups.org/http/v2.json", {
        "apikey" : process.env.API_KEY,
        "objectType" : "animals",
        "objectAction" : "publicSearch",
        "search" : {
            "resultStart" : (req.body.page-1) * 8 || 0,
            "resultLimit" : 8,
            "resultSort" : "animalID",
            "resultOrder" : "asc",
            "calcFoundRows" : "Yes",
            "filters" : filters,
            "fields": ["animalID","animalAgeString", "animalGeneralAge", "animalBreed","animalDescriptionPlain","animalLocationCitystate","animalName","animalPrimaryBreed","animalSpecies","animalThumbnailUrl","animalUrl","animalPictures"]
        }
    }).then(response => {
        res.json(response.data)
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;