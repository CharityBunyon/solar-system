import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './modal.scss';
import planets from '../../helpers/data/planetData';


const soloCardPrinter = (monkeyButt) => {
  // $('#solarCards').toggleClass('d-none');
  const domString = `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${monkeyButt.name}/h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <img class="card-img-top" src="${monkeyButt.imageUrl}" alt="Image of ${monkeyButt.name}">
          <div class="">
            <p class="card-text">Gas Planet:${monkeyButt.isGasPlanet}</p>
            <p class="card-text">Number of Moons:${monkeyButt.numberOfMoons}</p>
            <p class="card-text">Name of Largest Moon:${monkeyButt.nameOfLargestMoon}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
  utilities.printToDom('planetDetails', domString);
  $('#planetDetails').toggleClass('d-none');
};

// const closeModalEvent = () => {
//   $('#planetCards').toggleClass('d-none');
//   $('#planetDetails').toggleClass('d-none');
// };

// const closeListener = () => {
//   $('.closebutton').on('click', closeModalEvent);
// };

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
  // closeListener();
};

const cardListener = () => {
  const pCards = ($('.planetCard'));
  for (let i = 0; i < pCards.length; i += 1) {
    const currentCard = pCards[i];
    $(currentCard).on('click', createModalEvent);
  }
};

export default { cardListener };
