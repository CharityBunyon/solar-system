import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import planets from '../../helpers/data/planetData';
// import cards from '../cards/cards';
import './search.scss';


const printSearch = () => {
  const domString = `
  <form onsubmit='return false'>
  <div class='search-box'>
      <input type='text' class='search-txt' id='myInput' placeholder='Search...'/>
      <a class="search-btn" href="#">
      <img src="https://raw.githubusercontent.com/CharityBunyon/solar-system/master/images/search.png" alt="" class="icon">
      </a>
  </div>
  </form>
`;
  utilities.printToDom('searchBar', domString);
};


const search = () => {
  $(document).ready(() => {
    $('#myInput').keyup(() => {
      const value = $('#myInput').val().toUpperCase();
      $('.planetCard').hide();
      $(`.planetCard:contains("${value}")`).closest('.planetCard').show();
    });
    if ($('#myInput').val() === 'Search..') {
      $('.planetCard').show();
    }
  });
};

export default { printSearch, search };
