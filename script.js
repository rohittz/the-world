let urlAllCountries = 'https://restcountries.eu/rest/v2/all';
let divClassCountry, divClassimgName, imgFlag, countryNameh3, divCapitalCountry;
let allTheCountries = document.getElementById("all-countries");

async function getAllData(){
	let rawData = await fetch(urlAllCountries);
	let data = await rawData.json();
	showData(data);
}
getAllData();
function showData(data){
	let countryName, countryFlag, countryCapital;
	data.forEach(country => {
		countryName = country.name;
		countryFlag = country.flag;
		countryCapital = country.capital;
		let aCountry = document.createElement("div");
		aCountry.className = "country";
		aCountry.innerHTML= `
			<div class = "imgname">
			<img src = "${countryFlag}" alt = "${countryName}">
			<h3> ${countryName} </h3>
			</div>
			<div class = "capital">
			${countryCapital}
			</div>
	`;
		allTheCountries.append(aCountry);
	});
}

// adding click event listener
allTheCountries.addEventListener("click", function(event){
	console.log(event);
});
