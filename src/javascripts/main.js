import 'bootstrap';
import cards from './components/cards/cards';
import modal from './components/modal/modal';
import '../styles/main.scss';

const init = () => {
  cards.printCards();
  modal.showModal();
};

init();
