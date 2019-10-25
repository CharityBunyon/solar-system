import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './modal.scss';
import planets from '../../helpers/data/planetData';

const planetList = planets.getPlanet;

// eslint-disable-next-line no-unused-vars
let currentPlanet;

const soloCardPrinter = (monkeyButt) => {
  $('#solarCards').toggleClass('d-none');
  const domString = `
      <button type="button" class="closebutton btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <img class="card-img-top" src="${monkeyButt.imageUrl}" alt="Image of ${monkeyButt.name}">
            <div class="">
              <p class="card-text">Gas Planet:${monkeyButt.isGasPlanet}</p>
              <p class="card-text">Number of Moons:${monkeyButt.numberOfMoons}</p>
              <p class="card-text">Name of Largest Moon:${monkeyButt.nameOfLargestMoon}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  utilities.printToDom('planetDetails', domString);
  $('#planetDetails').toggleClass('d-none');
};

const closeModalEvent = () => {
  $('#planetCards').toggleClass('d-none');
  $('#planetDetails').toggleClass('d-none');
};

const closeListener = () => {
  $('.closebutton').on('click', closeModalEvent);
};

const createModalEvent = (event) => {
  const selection = event.target;
  const planetName = $(selection).attr('id');
  for (let i = 0; i < planetList.length; i += 1) {
    const chosenPlanet = planetList;
    if (chosenPlanet === planetName) {
      soloCardPrinter(chosenPlanet);
    }
  }
  soloCardPrinter();
  closeListener();
};

const cardListener = () => {
  const pCards = ($('.planetCard'));
  for (let i = 0; i < pCards.length; i += 1) {
    const currentCard = pCards[i];
    $(currentCard).on('click', createModalEvent);
  }
};


export default { soloCardPrinter, cardListener };
