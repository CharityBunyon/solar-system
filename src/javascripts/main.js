import 'bootstrap';
import cards from './components/cards/cards';
import modal from './components/modal/modal';
import closeCard from './components/closeCard/closeCard';
import search from './components/search/search';
import '../styles/main.scss';

const init = () => {
  cards.printCards();
  search.printSearch();
  search.search();
  // modal.soloCardPrinter();
  modal.cardListener();
  closeCard.closePlanetDetails();
};

init();
