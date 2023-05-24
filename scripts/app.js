"use strict"; // Declaring all variables

window.onload = () => {
    const opt1 = document.getElementById("option1");
    const opt2 = document.getElementById("option2");

    opt1.onclick = () => { searchPark(locationsArray); }
    opt2.onclick = () => { searchPark(parkTypesArray); }
}



const searchPark = (optionPicked) => {
    const searchType = document.getElementById("searchType");
    const parkOptions = document.getElementById("parkOptions");
    searchType.options.length = 1;
    parkOptions.length = 1;

    for (let i = 0; i < optionPicked.length; i++) {
        searchType.options[searchType.options.length] = new Option(optionPicked[i]);
    }

    searchType.onchange = () => {
        parkOptions.length = 1;
        for (let x = 0; x < nationalParksArray.length; x++) {
            if (optionPicked == locationsArray) {
                if(searchType.value == nationalParksArray[x].State) {
                    parkOptions.options[parkOptions.options.length] = new Option(nationalParksArray[x].LocationName);
                } 
            } else if (optionPicked == parkTypesArray){
                if (nationalParksArray[x].LocationName.includes(searchType.value)){
                    parkOptions.options[parkOptions.options.length] = new Option(nationalParksArray[x].LocationName);
                }
            }
        }
    }

    document.getElementById('searchBtn').onclick = () => {
        
        for (let i = 0; i < nationalParksArray.length; i++) {
            let park = nationalParksArray[i];
            if (parkOptions.value == park.LocationName) {
                document.getElementById("displayParkInfo").innerHTML = `<h2>${park.LocationName}</h2> <p>Address: <br> ${park.Address} <br> ${park.City}, ${park.State} ${park.ZipCode}</p> <p>Phone Number: ${park.Phone}</p> <p>Fax: ${park.Fax}</p>`
            }
        }
    }
}









