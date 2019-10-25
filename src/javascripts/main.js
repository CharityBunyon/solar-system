import 'bootstrap';
import cards from './components/cards/cards';
import modal from './components/modal/modal';
// import search from './components/search/search';
import '../styles/main.scss';

const init = () => {
  cards.printCards();
  // search.printSearchForm();
  modal.soloCardPrinter();
  modal.cardListener();
};

init();
