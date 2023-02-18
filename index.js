//let dados &{};
async function myCity() {
  const dataCities = await fetch("./city.json").then((res) => res.json());
  const dataEstates = await fetch("./states.json").then((res) => res.json());

  let insertedCity = document.querySelector("input#city");
  let searchCity = String(insertedCity.value);

  let paragrafo = document.createElement("p");
  paragrafo.innerText += `${searchCity} \n`;

  for (cities in dataCities) {
    let value = dataCities[cities];
    if(value.Estado === )
    paragrafo.innerText += `Estado: ${value.Estado} cidade: ${value.Nome}`;
  }
  document.getElementById("response").appendChild(paragrafo);
}
