console.log("array-methods");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
var cap = document.getElementById("capPlanets");
var ePlan = document.getElementById("planetsE");
var senten = document.getElementById("joined");
planets.forEach(function(item) {

	el.innerHTML += item + " ";
})

// Use the map method to create a new array where the first letter of each planet is capitalized
planets.forEach(function(item) {
	// return item
	// console.log("item", item);
	let plans = item;
	let capFirst = plans.charAt(0).toUpperCase() + plans.slice(1);
	
	cap.innerHTML += capFirst + " ";
})

// Use the filter method to create a new array that contains planets with the letter 'e'
for (var i = 0; i < planets.length; i++) {
	if (planets[i].indexOf("e") != -1)
	ePlan.innerHTML += planets[i] + " ";
}


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

senten.innerHTML = words.join(" ") + ".";
