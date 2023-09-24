import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/logo.png';
import pokeball from './images/pokeball.png';
import bulbasaur from './images/bulbasaur.png';
import charmander from './images/charmander.png';
import pikachu from './images/pikachu.png';
import jigglypuff from './images/jigglypuff.png';
import psyduck from './images/psyduck.png';
import squirtle from './images/squirtle.png';
import onyx from './images/onyx.png';
import butterfree from './images/butterfree.png';
import chikorita from './images/chikorita.png';
import totodile from './images/totodile.png';
import caterpie from './images/caterpie.png';
import arbok from './images/arbok.png';
import mew from './images/mew.png';
import clefairy from './images/clefairy.png';
import meowth from './images/meowth.png';
import vulpix from './images/vulpix.png';
import eevee from './images/eevee.png';
import oddish from './images/oddish.png';
import bellsprout from './images/bellsprout.png';
import snorlax from './images/snorlax.png';
import {FaSearch} from 'react-icons/fa'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {FaArrowRightLong} from 'react-icons/fa6'

function App() {
const pokemonData = [
{
  name:"Bulbasaur",
  image:bulbasaur,
  evolveto:"Ivysaur",
  attack:"100 AP",
  weakness:"Fire, Ice",
  type:"Grass",
  specialmove:"Overgrow",
  color: "#7CC600"
},
{
  name:"Charmander",
  image:charmander,
  evolveto:"Charmeleon",
  attack:"250 AP",
  weakness:"Water, Rock",
  type:"Fire",
  specialmove:"FireBlast",
  color: "#FF6C3E"
},
{
  name: "Pikachu",
  image: pikachu,
  evolveto: "Raichu",
  attack: "300 AP",
  weakness: "Ground",
  type: "Electric",
  specialmove:"ThunderBolt",
  color: "#FC0"
},
{
  name: "Jigglypuff",
  image: jigglypuff,
  evolveto: "Wigglypuff",
  attack: "400 AP",
  weakness: "Poison, Steel",
  type: "Normal",
  specialmove:"Cute Charm",
  color: "#E4E4E4"
},
{
  name: "Psyduck",
  image: psyduck,
  evolveto: "Golduck",
  attack: "40 AP",
  weakness: "Grass, Electric",
  type: "Normal",
  specialmove:"Cloud Nine",
  color: "#E4E4E4"
},
{
  name: "Squirtle",
  image: squirtle,
  evolveto: "Wartortle",
  attack: "200 AP",
  weakness: "Grass, Electric",
  type: "Water",
  specialmove:"Water Gun",
  color: "#8CCFFF"
},
{
  name: "Onyx",
  image: onyx,
  evolveto: "Steelix",
  attack: "400 AP",
  weakness: "Water, Grass",
  type: "Rock",
  specialmove:"Earthquake",
  color: "#9E8E00"
},
{
  name: "Butterfree",
  image: butterfree,
  evolveto: "None",
  attack: "350 AP",
  weakness: "Fire, Electric",
  type: "Bug",
  specialmove:"Quiver Dance",
  color: "#7CC600"
},
{
  name: "Chikorita",
  image: chikorita,
  evolveto: "Bayleaf",
  attack: "350 AP",
  weakness: "Fire, Poison",
  type: "Grass",
  specialmove:"Overgrow",
  color: "#7CC600"
},
{
  name: "Totodile",
  image: totodile,
  evolveto: "Croconaw",
  attack: "200 AP",
  weakness: "Grass, Electric",
  type: "Water",
  specialmove:"Torrent",
  color: "#8CCFFF"
},
{
  name: "Vulpix",
  image: vulpix,
  evolveto: "Ninetales",
  attack: "500 AP",
  weakness: "Water, Rock",
  type: "Fire",
  specialmove:"FLash Fire",
  color: "#FF6C3E"
},
{
  name: "Eevee",
  image: eevee,
  evolveto: "Umbreon",
  attack: "55 AP",
  weakness: "Fighting",
  type: "Normal",
  specialmove:"Evoboost",
  color: "#E4E4E4"
},
{
  name: "Oddish",
  image: oddish,
  evolveto: "Gloom",
  attack: "250 AP",
  weakness: "Fire, Ice",
  type: "Grass",
  specialmove:"Chlorophyll",
  color: "#7CC600"
},
{
  name: "Bellsprout",
  image: bellsprout,
  evolveto: "Weepinbell",
  attack: "200 AP",
  weakness: "Fire, Ice",
  type: "Grass",
  specialmove:"Chlorophyll",
  color: "#7CC600"
},
{
  name: "Snorlax",
  image: snorlax,
  evolveto: "None",
  attack: "700 AP",
  weakness: "Fighting",
  type: "Normal",
  specialmove:"Gluttony",
  color: "#E4E4E4"
},
{
  name: "Caterpie",
  image: caterpie,
  evolveto: "Metapod",
  attack: "30 AP",
  weakness: "RocK, Fire",
  type: "Bug",
  specialmove:"Shield Dust",
  color: "#7CC600"
},
{
  name: "Arbok",
  image: arbok,
  evolveto: "None",
  attack: "95 AP",
  weakness: "Ground",
  type: "Poison",
  specialmove:"Shed Skin",
  color: "#BC7AF9"
},
{
  name: "Mew",
  image: mew,
  evolveto: "None",
  attack: "999 AP",
  weakness: "Dark, Ghost",
  type: "Psychic",
  specialmove:"Synchronize",
  color: "#FFDBAA"
},
{
  name: "Clefairy",
  image: clefairy,
  evolveto: "Clefable",
  attack: "45 AP",
  weakness: "Poison, Steel",
  type: "Fairy",
  specialmove:"Cute Charm",
  color: "#FFA1F5"
},
{
  name: "Meowth",
  image: meowth,
  evolveto: "Persian",
  attack: "250 AP",
  weakness: "Fighting",
  type: "Psychic",
  specialmove:"Pickup",
  color: "#FFDBAA"
}
];

const itemsPerPage = 10;
const [currentPage, setCurrentPage] = useState(1);
const [searchTerm, setSearchTerm] = useState('');
const [filteredPokemon, setFilteredPokemon] = useState([]);

// Filter Pokémon based on the search term
useEffect(() => {
const filtered = pokemonData.filter(pokemon =>
pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilteredPokemon(filtered);
}, [searchTerm]);

// Calculate total pages
const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);

// Pagination handlers
const nextPage = () => {
if (currentPage < totalPages) {
setCurrentPage(currentPage + 1);
}
};
const prevPage = () => {
if (currentPage > 1) {
setCurrentPage(currentPage - 1);
}
};

// Calculate the current page's Pokémon list
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentPokemonList = filteredPokemon.slice(startIndex, endIndex);

  return (
    <div className="App">
      <div className='container'>
      <div className='logosearchbar'>
        <img src={logo} className="logo" alt="pokemonlogo" />
        <div className='searchbar'>
          <img src={pokeball} className="pokeball" alt="pokeballimg" />
          <input type="text" id="search" placeholder="Who's That Pokemon! Enter the name of your pokemon" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
          <FaSearch className='searchicon'/>
        </div>
      </div>

      <div id="pokemon-list" className="pokemon-grid">
        {currentPokemonList.map(pokemon => (
          <div key={pokemon.name} className='pokemoncard'>
            <img src={pokemon.image} alt={pokemon.name} className='pokemonimg'/>
            <div className='pokemoninfo'>
              <div className='content'>
                <p id="name">{pokemon.name}</p>
                <p id="type" style={{background:pokemon.color}}>{pokemon.type}</p>
              </div>
              <div className='info'><p className='info1'>Attack</p><p>{pokemon.attack}</p></div>
              <div className='info'><p className='info1'>Evolve</p><p>{pokemon.evolveto}</p></div>
              <div className='info'><p className='info1'>Weakness</p><p>{pokemon.weakness}</p></div>
              <div className='info'><p className='info1'>Ability</p><p>{pokemon.specialmove}</p></div>
            </div>
          </div>
        ))}
      </div>

      <div id="pagination">
        <button id="previous" onClick={prevPage} disabled={currentPage === 1}><FaArrowLeftLong/></button>
        <span className='page'>{`Page ${currentPage} of ${totalPages}`}</span>
        <button id="next" onClick={nextPage} disabled={currentPage === totalPages}><FaArrowRightLong/></button>
      </div>
      </div>
    </div>
  );
}

export default App