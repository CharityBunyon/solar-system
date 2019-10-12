const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://space-facts.com/wp-content/uploads/mercury.png',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. ',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'IS MOONLESS',
  },
  {
    name: 'Venus',
    imageUrl: 'https://space-facts.com/wp-content/uploads/mercury.png',
    description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. ',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'IS MOONLESS',
  },
  {
    name: 'Earth',
    imageUrl: 'https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'Mars',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/ewcvC8bNBec6oMG9zufgVg.jpg',
    description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://en.es-static.us/upl/2019/09/jupiter-juno-2-12-2019-e1567611570663.jpg',
    description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth.',
    isGasPlanet: true,
    numberOfMoons: 75,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://space-facts.com/wp-content/uploads/saturn.png',
    description: 'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg',
    description: 'The composition of Uranus clouds had long been a mystery. In April 2017, a global research team found hydrogen sulfide, the gas that most people avoid.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Ariel',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. ',
    isGasPlanet: true,
    numberOfMoons: 13,
    nameOfLargestMoon: 'Triton',
  },

];

const getPlanets = () => planets;

export default { getPlanets };
