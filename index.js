//let dados &{};
async function myCity() {
  const dataCities = await fetch("./city.json").then((res) => res.json());
  const dataEstates = await fetch("./states.json").then((res) => res.json());

  let insertedCity = document.querySelector("input#city");
  let searchCity = String(insertedCity.value);
  let stateCity = "";
  let getStateName = "";
  let paragrafo = document.createElement("p");
  paragrafo.innerText += `${searchCity} \n`;

  let textBox = document.createElement("textarea");

  for (cities in dataCities) {
    let value = dataCities[cities];

    if (searchCity === value.Nome) {
      stateCity = value.Estado;
    }
  }

  for (stateOfCity in dataEstates) {
    let data = dataEstates[stateOfCity];
    if (stateCity === data.ID) {
      getStateName = data.Nome;
    }
  }

  paragrafo.innerText += `Sua cidade ${searchCity} fica no estado ${getStateName} `;

  paragrafo.innerText += `Aguarde um instante vamos busacar as cidades do seu estado!`;
  document.getElementById("response").appendChild(paragrafo);
  for (estado in dataCities) {
    let dataState = dataCities[estado];
    if (dataState.Estado === stateCity) {
      textBox.innerText += `${dataState.Nome}; `;
    }
  }

  document.getElementById("response").appendChild(textBox);
}
