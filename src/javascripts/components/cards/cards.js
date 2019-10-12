import utilities from '../../helpers/utilities';
import './cards.scss';
import planets from '../../helpers/data/planetData';


const printCards = () => {
  const planetList = planets.getPlanets();
  let domString = `<div class="row">
  `;
  for (let i = 0; i < planetList.length; i += 1) {
    const planet = planetList[i];
    domString += `
      <div class="col-4">
      <div class="planetCard">
      <figure class="front">
        <h4 >${planet.name}</h4>
      </figure>
      <figure class="back">
        <img src="${planet.imageUrl}" alt="Avatar" style="width: 300px; height:300px;">
      </figure>
    </div>
    </div>
    `;
  }
  domString += '</div>';
  utilities.printToDom('solarCards', domString);
};

export default { printCards };
