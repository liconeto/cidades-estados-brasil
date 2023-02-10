const city = require("./city.json");
const states = require("./states.json");

let minhaCidade = "Alegre";

const myCity = () => {
  for (const x in city) {
    const element = city[x];
    if (element.Nome === minhaCidade) {
      return element;
    }
  }
};

const stateId = () => {
  return myCity().Estado;
};

const stateName = (id) => {
  for (const e in states) {
    const element = states[e];
    if (element.ID === id) {
      return element.Nome;
    }
  }
};

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

console.log(myCity());
console.log(stateId(myCity()));
console.log("|" + Object.values(myCity()) + "|" + stateName(stateId()) + " |");
console.log(listOfCitiesOfMyEstate(stateId(myCity())));
