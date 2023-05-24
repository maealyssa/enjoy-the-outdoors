"use strict";

window.onload = () => { 
    displayMtn();
    findMtn();
}

const findMtn = () => {
    const searchBtn = document.getElementById("searchMtn");
    const mountain = document.getElementById("mtnDropDown");
    for (let i = 0; i < mountainsArray.length; i++) {
        const mtn = mountainsArray[i];
        mountain.options[mountain.options.length] = new Option(mtn.name, `${mtn.name}${mtn.elevation}`);
    };

    searchBtn.onclick = () => {
        const mtnValue = mountain.value;
        const elmntToView = document.getElementById(mtnValue);
        elmntToView.scrollIntoView(); 
    }

}

const displayMtn = () => {
    const mtnGrid = document.getElementById("mtnGrid");

    mountainsArray.forEach(result => {
    const content = `
            <div class="col-4 mb-3 mb-lg-0" id="${result.name}${result.elevation}">
                <div class="hover hover-1 text-white rounded"><img src="../images/${result.img}" alt="">
                <div class="hover-overlay"></div>
                <div class="hover-1-content px-5 py-4">
                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0">${result.name}</h3>
                <p class="hover-1-description font-weight-light mb-0">${result.elevation} feet</p>
                </div>
                </div>
            </div>
    `;
    mtnGrid.innerHTML += content;
    });
}

