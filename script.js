// TODO: one first tap, showDetails will show and the second tap will remove them.
let urlAllCountries = 'https://restcountries.eu/rest/v2/all';
let divClassCountry, divClassimgName, imgFlag, countryNameh3, divCapitalCountry;
let allTheCountries = document.getElementById("all-countries");
let aCountryDetails = "https://restcountries.eu/rest/v2/name/";
let showDetailsCount = 0;
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
		aCountry.className = `country ${countryName}`;
		aCountry.innerHTML= `
			<div class = "imgname">
			<img src = "${countryFlag}" alt = "${countryName}">
			<h3> ${countryName} </h3>
			</div>
			<div class = "capital">
			${countryCapital}
			</div>
			<button onclick = "showDetails(${showDetailsCount}, '${countryName}')">Show Details </button>
	`;
		allTheCountries.append(aCountry);
	});
}
function showDetails(detailscount, countryName){
	let detailsUrl = `${aCountryDetails}${countryName}`;
	fetch(detailsUrl).then(raw => raw.json()).then( data => displayDetials(data));
}
function displayDetials(data){
	console.log(data);
	let region = data[0].region;
	let population = data[0].population;
	let area = data[0].area;
	let currency = data[0].currencies[0].name;
	let blockOfDetials = document.createElement("div");
	blockOfDetials.className = "blockOfDetials";
	blockOfDetials.innerHTML = `
		<p> Region : ${region} </p>
		<p> Population : ${population} </p>
		<p> Area : ${area} </p>
		<p> Currency : ${currency} </p>
	`
	document.getElementsByClassName(data[0].name)[0].append(blockOfDetials);
}

