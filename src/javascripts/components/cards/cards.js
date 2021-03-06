import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './cards.scss';
import planets from '../../helpers/data/planetData';

const showHide = () => {
  $(document).ready(() => {
    $('.planetCard').mouseover((e) => {
      const image = $(e.target.closest('.planetCard')).find('.back');
      const title = $(e.target.closest('.planetCard')).find('.front');
      title.hide();
      image.show();
    });
    $('.planetCard').mouseout((e) => {
      const image = $(e.target.closest('.planetCard')).find('.back');
      const title = $(e.target.closest('.planetCard')).find('.front');
      title.show();
      image.hide();
    });
  });
};

const printCards = () => {
  const planetList = planets.getPlanets();
  let domString = `<div class="row planetRow">
  `;
  for (let i = 0; i < planetList.length; i += 1) {
    const planet = planetList[i];
    domString += `
          <div class="col-3 planetCard" id="${planet.name}">
            <h4 class="front">${planet.name.toUpperCase()}</h4>
            <img class="planetImage back" src="${planet.imageUrl}" alt="${planet.name}">
          </div>
    `;
  }
  domString += '</div>';
  utilities.printToDom('solarCards', domString);
  showHide();
  $('.planetImage').hide();
};


export default { printCards };
