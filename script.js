//Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    const form = document.querySelector("form")

    
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        
    })
    let document = window.document
    let list = document.getElementById('#faultyItems')
    let pilot = document.querySelector("input[name=pilotName]").value
    let copilot = document.querySelector("input[name=copilotName]").value
    let fuel = document.querySelector("input[name=fuelLevel]").value
    let cargo = document.querySelector("input[name=cargoMass]").value

    form.addEventListener("submit", function(event) {
        event.preventDefault()
    formSubmission(document, list, pilot, copilot, fuel, cargo)
    
    })

    let selectedPlanet = pickPlanet(listedPlanets)
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl)
  

 });