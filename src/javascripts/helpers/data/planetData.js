const planets = [
  {
    name: 'mercury',
    imageUrl: 'https://media.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'venus',
    imageUrl: 'https://media.giphy.com/media/13cxHLqRer5q6s/giphy.gif',
    description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'earth',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/DuJmk1yRUd1Di/giphy.gif',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',
    isGasPlanet: false,
    numberOfMoons: '1',
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'mars',
    imageUrl: 'https://media.giphy.com/media/Wkcw6SzOtaSxG/giphy.gif',
    description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.Mars is one of the most explored bodies in our solar system, and it\'s the only planet where we\'ve sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars.',
    isGasPlanet: false,
    numberOfMoons: '2',
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'jupiter',
    imageUrl: 'https://media.giphy.com/media/Jo1YxKmJWzYng6ZCDG/giphy.gif',
    description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth.That discovery changed the way we see the universe.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.Jupiter\'s familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.',
    isGasPlanet: true,
    numberOfMoons: '75',
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'saturn',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/n2PenGgu7ucNO/giphy.gif',
    description: 'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn\'s. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.',
    isGasPlanet: true,
    numberOfMoons: '82',
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'uranus',
    imageUrl: 'http://giphygifs.s3.amazonaws.com/media/D8TISWXHgGoeI/giphy.gif',
    description: 'The composition of Uranus\' clouds had long been a mystery. In April 2017, a global research team found hydrogen sulfide, the odiferous gas that most people avoid, in Uranus’ cloud tops—a striking difference from the gas giant planets located closer to the Sun.THe first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.',
    isGasPlanet: true,
    numberOfMoons: '27',
    nameOfLargestMoon: 'Ariel',
  },
  {
    name: 'neptune',
    imageUrl: 'https://66.media.tumblr.com/0bf841ab072eae197bba7a62068e5a78/tumblr_oqhfz7K2CP1vjhboso1_400.gifv',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. NASA\'s Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system',
    isGasPlanet: true,
    numberOfMoons: '13',
    nameOfLargestMoon: 'Triton',
  },

];

const getPlanets = () => planets;

export default { getPlanets };
