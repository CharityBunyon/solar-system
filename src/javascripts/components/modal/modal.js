import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './modal.scss';
import planets from '../../helpers/data/planetData';


const soloCardPrinter = (monkeyButt) => {
  const domString = `
    <div class="planetDeets">
    <div id="close" class="col">Close</div>
      <h3 class="planetTitle">${monkeyButt.name}</h3>
      <img class="rounded mx-auto d-block" src="${monkeyButt.imageUrl}" alt="Image of ${monkeyButt.name}">
      <div class="card-body">
        <p class="card-text">Description: ${monkeyButt.description}</p>
        <p class="card-text">Gas Planet: ${monkeyButt.isGasPlanet}</p>
        <p class="card-text">Number of Moons: ${monkeyButt.numberOfMoons}</p>
        <p class="card-text">Name of Largest Moon: ${monkeyButt.nameOfLargestMoon}</p>
    </div>`;
  utilities.printToDom('solarCards', domString);
};

const closeModalEvent = () => {
  $('createModalEvent').hide();
};

const closeListener = () => {
  $('.closebutton').on('click', closeModalEvent);
};

const createModalEvent = (event) => {
  const selection = event.target;
  const planetName = $(selection).closest('.planetCard').attr('id');
  const planetList = planets.getPlanets();
  for (let i = 0; i < planetList.length; i += 1) {
    const chosenPlanet = planetList[i];
    if (chosenPlanet.name === planetName) {
      soloCardPrinter(chosenPlanet);
    }
  }
  closeListener();
};

const cardListener = () => {
  const pCards = ($('.planetCard'));
  for (let i = 0; i < pCards.length; i += 1) {
    const currentCard = pCards[i];
    $(currentCard).on('click', createModalEvent);
  }
};

export default { cardListener };
