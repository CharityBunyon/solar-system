import utilities from '../../helpers/utilities';
import './cards.scss';
import planets from '../../helpers/data/planetData';


const printCards = () => {
  const planetList = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planetList.length; i += 1) {
    const planet = planetList[i];
    domString += `
    <div class="container" style="width:20rem; height:20rem;">
    <div class="card" style="width: 20rem; height: 20rem;">
      <div class="card-body">
        <h4>${planet.name}</h4>
      </div>
      <div class="overlay">
        <img src="${planet.imageUrl}" alt="Avatar">
      </div>
    </div>
  </div>
    `;
  }
  utilities.printToDom('solarCards', domString);
};

export default { printCards };
