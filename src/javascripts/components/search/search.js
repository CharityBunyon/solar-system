import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import planets from '../../helpers/data/planetData';
// import cards from '../cards/cards';
import './search.scss';


const printSearch = () => {
  const domString = `
  <form onsubmit='return false'>
  <div class='form-row'>
      <div class="form-group col-md-6 offset-md-2 col-8">
      <input type='text' class='form-control' id='myInput' placeholder='Enter Search Term'/>
      </div>
  </div>
  </form>
`;
  utilities.printToDom('searchBar', domString);
};


const search = () => {
  $(document).ready(() => {
    $('#myInput').keyup(() => {
      const value = $('#myInput').val().toLowerCase();
      $('.planetCard').hide();
      $(`.planetCard:contains("${value}")`).closest('.planetCard').show();
    });
    if ($('#myInput').val() === 'Search..') {
      $('.planetCard').show();
    }
  });
};

export default { printSearch, search };
