import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { cities } from './cz-cities';
import { City } from './City/index.jsx';


//ZADANI 1.
/*
const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

// const cityElements = cities.map((city) => {
//   return (
//     <div className="city">{city}</div>
//   )
// })

const App = () => {
  return (
    <div className="container">
      {cities.map((city) => (
        <div className="city" key={city}>{city}</div>
      ))}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
*/





//ZADANI 2.
/*
const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
];

const App = () => {
  return (
    <div className="cities">
      {cities.map(({ name, population, area }) => (
        <City key={name} name={name} population={population} area={area} />
      ))}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
*/




// ZADANI 3.

const App = () => {
  return (
    <div className="cities">
      {cities.map(({ name, population, area, district, photo }) => (
        <City
          key={name}
          name={name}
          population={population}
          area={area} km
          district={district}
          photo={photo}
        />
      ))}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);







