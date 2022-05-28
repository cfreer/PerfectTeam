/**
 * This file contains the function App that returns the render for the
 * App component. It fetches data from the Perfect Team API and returns
 * the render of the routes for the different pages.
 */

import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import Games from './pages/Games';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './index.css';

// Interface for an NBA player
interface Player {
  id: string,
  Rk: number,
  Player: string,
  age: number,
  WS: string,
  salary: string,
  projSalary: string,
  playerTeam: string,
}

// Interface for an NBA team
interface Team {
  id: string,
  teamId: number,
  teamName: string,
  Conf: string,
  Div: string,
  W: number,
  L: number,
  WL: string,
  MOV: string,
  ORtg: string,
  DRtg: string,
  NRtg: string
}

function App() {

  const [playerData, setPlayerData] = useState<Player[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  // Base URL for Perfect Team API
  const API_URL = 'https://perfect-team-api.herokuapp.com/';
  // const API_URL = 'http://localhost:4567/';

  async function statusCheck(res : Response) {
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res;
  }

  useEffect(() => {
    // Get all player data from Perfect Team API
    function getPlayersRequest() {
      fetch(API_URL + 'players')
        .then(statusCheck)
        .then(res => res.json())
        .then(setPlayerData)
        .catch(console.error);
    }
    // Get all team data from Perfect Team API
    function getTeamsRequest() {
      fetch(API_URL + 'nbateams')
        .then(statusCheck)
        .then(res => res.json())
        .then(setTeamData)
        .catch(console.error);
    }
    getPlayersRequest();
    getTeamsRequest();
  }, []);

  // returns rendered routes and specified components
  return (
    <div id='page-container'>
      <div id='header-bar'>
        <p></p>
      </div>
      <header>
        <img src={process.env.PUBLIC_URL + '/imgs/perfect_team_logo.jpg'} alt='Perfect Team logo'/>
      </header>
      <hr />
      <Route path="/" component={NavBar} />
      <hr />
      <main id='content'>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/createteam">
            <CreateTeam data={playerData} teamData={teamData} />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/teams">
            <Teams data={teamData}/>
          </Route>
          <Route path="/players">
            <Players data={playerData} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <footer id='footer'>
        <Route path="/" component={Footer} />
      </footer>
    </div>
  );
}

export default App;
