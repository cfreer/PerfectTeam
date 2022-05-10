import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import Games from './pages/Games';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './index.css';

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

function App(props : any) {

  const [data, setData] = useState<Player[]>([]);

  // Base URL for Perfect Team API
  // const API_URL = 'https://perfect-team-api.herokuapp.com/';
  const API_URL = 'http://localhost:4567/';



  async function statusCheck(res : Response) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  useEffect(() => {
    // Get all player data from Perfect Team API
    function getPlayersRequest() {
      fetch(API_URL + 'players')
        .then(statusCheck)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }
    
    getPlayersRequest();
  });

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
            <CreateTeam data={data}/>
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/players">
            <Players />
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
