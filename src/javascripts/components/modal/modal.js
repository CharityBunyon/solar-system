// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './modal.scss';
// import cards from './components/cards/cards';
import planets from '../../helpers/data/planetData';

const printModal = () => {
  const planetList = planets.getPlanets();
  for (let i = 0; i < planetList.length; i += 1) {
    const planet = planetList[i];
    const modalString = `
    // <div class="modal fade bd-example-modal-lg" tab index="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    // <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <h3>${planet.name}</h3>
        <img class="planetImage back" src="${planet.imageUrl}" alt="${planet.name}">
        <p>Description: ${planet.description}</p>
        <p>Is Gas Planet: ${planet.isGasPlanet}</p>
        <p>Number of Moons: ${planet.numberOfMoons}</p>
        <p>Name of Largest Moon: ${planet.nameOfLargestMoon}</p>
      </div>
    </div>
  </div>
    `;
    utilities.printToDom('modal', modalString);
  }
};

const showModal = () => {
  $('planetCard').click(printModal);
};

export default { showModal };
