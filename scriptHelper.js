// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">
    `
 }
 
 function validateInput(testInput) {
    try {
        if (testInput === "") {
            return "Empty"
        }
        else if (isNaN(Number(testInput))) {
            return "Not a Number"
        }
        else if (!isNaN(Number(testInput)))
            return "Is a Number"
    }
    catch(error){
        console.error("Error")
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus1 = document.getElementById('pilotStatus');
    let copilotStatus1 = document.getElementById('copilotStatus');
    let fuelStatus1 = document.getElementById('fuelStatus');
    let cargoStatus1 = document.getElementById('cargoStatus')
    let launchStatus1 = document.getElementById('launchStatus')
    
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("All fields are required.")
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
        alert("Names required for pilot and co-pilot.")
    } else if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
        alert("Please enter a number for fuel level and cargo level.")
    }

    else {
        pilotStatus1.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus1.innerHTML = `Co-pilot ${copilot} is ready for launch`
    }

    if(Number(fuelLevel) < 10000) {
        fuelStatus1.innerHTML = `Fuel level too low for launch`
        list.style.visibility = 'visible'
        launchStatus1.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus1.style.color = 'red'
    } else if(Number(fuelLevel) >= 10000) {
        fuelStatus1.innerHTML = `Fuel level high enough for launch`
    }
    
    if(Number(cargoLevel) > 10000) {
        cargoStatus1.innerHTML = `Cargo mass too heavy for launch`
        list.style.visibility = 'visible'
        launchStatus1.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus1.style.color = 'red'
    } else if(Number(cargoLevel) <= 10000){
        cargoStatus1.innerHTML = `Cargo mass low enough for launch`
    }
    
    if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
        fuelStatus1.innerHTML = `Fuel level high enough for launch`
        cargoStatus1.innerHTML = `Cargo mass low enough for launch`
        launchStatus1.innerHTML = `Shuttle is Ready for Launch`
        launchStatus1.style.color = 'green' 
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;