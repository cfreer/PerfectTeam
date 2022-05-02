import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import Games from './pages/Games';
import Teams from './pages/Teams';
import Players from './pages/Players';
import './index.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App(props : any) {

  // returns rendered routes and specified components
  return (
    <div>
      <Route path="/" component={NavBar} />
      <main>
        <Switch>
          <Route path="/" >
            <Home />
          </Route>
          <Route path="/createteam">
            <CreateTeam />
          </Route>
          <Route path="/games">
            <Games />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/players" >
            <Players />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <Route path="/" component={Footer} />
      </footer>
    </div>
  );
}

export default App;
