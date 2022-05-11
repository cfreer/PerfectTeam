/**
 * This file contains the function Home that returns the render for the
 * home page. It features a slideshow and a description of Perfect Team's Create
 * a Team feature.
 */
import Slideshow from '../components/Slideshow';
import CreateTeamBtn from '../components/CreateTeamButton';

function Home(props : any) {

  // renders home page
  return (
    <div className='home-container' data-testid='home-container'>
      <Slideshow data-testid='slideshow'/>
      <div id='tutorial-description' data-testid='tutorial-description'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui
          vivamus arcu felis bibendum ut. Gravida quis blandit turpis cursus in
          hac habitasse platea dictumst. Sagittis nisl rhoncus mattis rhoncus.
        </p>
        <CreateTeamBtn />
      </div>

    </div>
  );
}

export default Home;
