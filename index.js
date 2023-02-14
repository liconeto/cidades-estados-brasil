const insertedCity = document.getElementById("city");

async function myCity() {
  const searchCity = insertedCity.value;
  const dataCities = await fetch("./city.json").then((res) => res.json());
  const dataEstates = await fetch("./states.json").then((res) => res.json());

  let paragrafo = document.createElement("p");
  let objCity;
  let objState;

  for (x in dataCities) {
    objCity = dataCities[x];

    if (searchCity === objCity.Nome) {
      paragrafo.innerText += `${searchCity} | Id estado = ${objCity.Estado} | Id cidade = ${objCity.ID} | ${objCity.Nome}`;
      for (State in dataEstates) {
        objState = dataEstates[State];

        if (objState.ID === objCity.Estado) {
          paragrafo.innerText += `${objState.Nome} \n\n\tAguarde buscando as cidade do seu estado! \n`;
        }
      }
    }

    console.log(objCity);
    document.body.appendChild(paragrafo);
  }
}

const listOfCitiesOfMyEstate = () => {
  const idState = stateId();
  let cities = [];
  for (const x in city) {
    const element = city[x];
    if (element.Estado === idState) {
      cities.push({
        id: `${element.ID}`,
        nome: `${element.Nome}`,
        estado: `${element.Estado}`,
      });
    }
  }
  return cities;
};
s;
