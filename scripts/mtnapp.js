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
        mountain.options[mountain.options.length] = new Option(mtn.name, mtn.elevation);
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
    <div class="card-wrapper col-lg-4 col-md-6 col-xs-12" id=${result.elevation}>
      <div class="card">
        <div class="card-img-wrapper">
          <img class="card-img-top" src="./images/${result.img}" alt="Card image cap">
        </div>
        <div class="card-body">
          <h5 class="card-title text-uppercase">${result.name}</h5>
          <div class="card-content">
            <p class="card-text">${result.desc}</p>
            <p class="card-text">Elevation: ${result.elevation} ft</p>
          </div>
        </div>
      </div>
    </div>
    `;
    mtnGrid.innerHTML += content;
    });
}
