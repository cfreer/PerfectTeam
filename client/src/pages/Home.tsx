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
          PerfectTeam is an NBA predictive modeling software that takes 
          any twelve-person lineup for a basketball team and accurately 
          predicts their wins for an 82 game season. It uses algorithms 
          for data analysis to predict their wins and losses. It includes 
          major features like a wins prediction, team customization, 
          salary cap, and a quick add team function. 
        </p>
        <CreateTeamBtn />
      </div>

    </div>
  );
}

export default Home;
