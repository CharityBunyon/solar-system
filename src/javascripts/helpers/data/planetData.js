const planets = [
  {
    name: 'mercury',
    imageUrl: 'https://media.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. ',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'IS MOONLESS',
  },
  {
    name: 'venus',
    imageUrl: 'https://media.giphy.com/media/13cxHLqRer5q6s/giphy.gif',
    description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. ',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'IS MOONLESS',
  },
  {
    name: 'earth',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/DuJmk1yRUd1Di/giphy.gif',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
    isGasPlanet: false,
    numberOfMoons: '1',
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'mars',
    imageUrl: 'https://media.giphy.com/media/Wkcw6SzOtaSxG/giphy.gif',
    description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
    isGasPlanet: false,
    numberOfMoons: '2',
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'jupiter',
    imageUrl: 'https://media.giphy.com/media/Jo1YxKmJWzYng6ZCDG/giphy.gif',
    description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth.',
    isGasPlanet: true,
    numberOfMoons: '75',
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'saturn',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/n2PenGgu7ucNO/giphy.gif',
    description: 'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.',
    isGasPlanet: true,
    numberOfMoons: '82',
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'uranus',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/D8TISWXHgGoeI/giphy.gif',
    description: 'The composition of Uranus clouds had long been a mystery. In April 2017, a global research team found hydrogen sulfide, the gas that most people avoid.',
    isGasPlanet: true,
    numberOfMoons: '27',
    nameOfLargestMoon: 'Ariel',
  },
  {
    name: 'neptune',
    imageUrl: 'https://66.media.tumblr.com/0bf841ab072eae197bba7a62068e5a78/tumblr_oqhfz7K2CP1vjhboso1_400.gifv',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. ',
    isGasPlanet: true,
    numberOfMoons: '13',
    nameOfLargestMoon: 'Triton',
  },

];

const getPlanets = () => planets;

export default { getPlanets };
