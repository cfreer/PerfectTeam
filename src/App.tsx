import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';
import Games from './pages/Games';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './index.css';


function App(props : any) {

  // returns rendered routes and specified components
  return (
    <div>
      <header>
        <h1><a href="/">PerfectTeam</a></h1>
      </header>
      <hr />
      <Route path="/" component={NavBar} />
      <hr />
      <main>
        <Switch>
          <Route exact path="/" >
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
