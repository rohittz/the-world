let urlAllCountries = 'https://restcountries.eu/rest/v2/all';
let divClassCountry, divClassimgName, imgFlag, countryNameh3, divCapitalCountry;
let allTheCountries = document.getElementById("all-countries");
async function getAllData(){
	let rawData = await fetch(urlAllCountries);
	let data = await rawData.json();
	showData(data);
}
getAllData();
function appendACountry(countryName, countryFlag, countryCapital){
	createElements();
	// appending a country class inside all-countries
	allTheCountries.append(divClassCountry);
	//appending classimgName inside this country
	divClassCountry.style.background = `url("${countryFlag}")`;
	divClassCountry.style.backgroundSize = "cover";
	divClassCountry.append(divClassimgName);
	// appending img inside classimgName
	divClassimgName.append(imgFlag);
	//putting the flag inside of items
	imgFlag.setAttribute("src", countryFlag);
	// append h3 inside classimgName
	divClassimgName.append(countryNameh3);
	countryNameh3.innerText = countryName;
	// append divCapitalCountry inside country
	divClassCountry.append(divCapitalCountry);
	divCapitalCountry.innerText = countryCapital;
}
function showData(data){
	let countryName, countryFlag, countryCapital;
	for( let i = 0; i < data.length; i++){
		countryName = data[i].name;
		countryFlag = data[i].flag;
		countryCapital = data[i].capital;
		appendACountry(countryName, countryFlag, countryCapital);
	}
}
function createElements(){
	divClassCountry = document.createElement("div");
	divClassCountry.setAttribute("class", "country");
	divClassimgName = document.createElement("div");
	divClassimgName.setAttribute("class", "imgname");
	imgFlag = document.createElement("img");
	countryNameh3 = document.createElement("h3");
	divCapitalCountry = document.createElement("div");
	divCapitalCountry.setAttribute("class", "capital");

}
