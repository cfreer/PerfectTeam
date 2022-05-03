import React from 'react';
import { Button } from 'react-bootstrap';
import Slideshow from '../components/Slideshow';

function Home(props : any) {

  // renders home page
  return (
    <div className='home-container'>
      <Slideshow />
      <div id='tutorial-description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui
          vivamus arcu felis bibendum ut. Gravida quis blandit turpis cursus in
          hac habitasse platea dictumst. Sagittis nisl rhoncus mattis rhoncus.
        </p>
        <Button variant='primary'>Create Team</Button>
      </div>

    </div>
  );
}

export default Home;
