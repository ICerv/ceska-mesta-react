import React from "react";
import './style.css'



// ZADANI 2.
/*
export const City = ({ name, population, area }) => (
  <div className='city'>
    <div className='name'><strong> {name}</strong></div>
    <div className='population'>Pocet obyvatel: {population}</div>
    <div className='area'> Rozloha: {area} km</div>
    <hr />
  </div>
)
*/

// ZADANI 3.
export const City = ({ name, population, area, district, photo }) => (

  <div className='city' key={name}>
    <div className='name'><strong> {name}</strong></div>
    <div className='population'>Pocet obyvatel: {population}</div>
    <div className='area'> Rozloha: {area} km</div>
    <div className='district'> Okres: {district}</div>
    <img src={photo} alt={`Fotka ${name}`} />
  </div>
)