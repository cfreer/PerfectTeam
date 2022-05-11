import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GamesIn from './../../public/imgs/GamesIn.PNG';

function Games(props : any) {

  const image = require("./GamesIn.PNG").default;

  // rendered games page
  return (
    <div className='games-container'>
      <div>
        <NavBar/>
      </div>
      <div className='game-image'>
        <GamesIn>
          <img src={image} alt="game_img"></img>
        </GamesIn>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Games;
